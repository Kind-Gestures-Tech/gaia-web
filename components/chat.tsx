import { Mic, SendHorizontal, X } from "lucide-react";
import { Button } from "components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "components/ui/textarea";
import { api } from "utils/api";
import { type AUTHOR, type CONVERSATION_TYPE } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "components/ui/select";

type Message = {
  type: CONVERSATION_TYPE;
  author: AUTHOR;
  message: string;
};

type ChatProps = {
  type: CONVERSATION_TYPE;
  botConversationTrigger: (msg: string) => void;
};

function Chat({ type, botConversationTrigger }: ChatProps) {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [followUp, setFollowUp] = useState<string[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<
    "en-US" | "hi" | "ja"
  >("en-US");
  const [transcript, setTranscript] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  const getAllMessages = api.conversation.getConversation.useQuery();
  const createMessage = api.conversation.createConversation.useMutation({
    onSuccess: () => setMessage(""),
  });

  useEffect(() => {
    if (getAllMessages.isSuccess) {
      setMessages(
        getAllMessages.data.map((msg) => ({
          type: msg.type,
          author: msg.author,
          message: msg.message,
        }))
      );
    }
  }, [getAllMessages.isSuccess]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, getAllMessages.isSuccess, createMessage.isSuccess]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  const createMes = (message: string, author: AUTHOR) => {
    createMessage.mutate({ type, author, text: message });
  };

  const handleFollowUpClick = async (followUpText: string) => {
    setMessages((prev) => [
      ...prev,
      { type, author: "user", message: followUpText },
    ]);
    await sendToApi({ message: followUpText, isFollowUp: false });
    setFollowUp([]);
    await sendToApi({
      message: "generate a list of possible follow-up questions.",
      isFollowUp: true,
    });
  };

  const handleSendToApi = async () => {
    try {
      await sendToApi({ message, isFollowUp: false });
      await sendToApi({
        message: "generate a list of possible follow-up questions.",
        isFollowUp: true,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const translateText = async (text: string) => {
    try {
      const response = await fetch(
        "http://app.kindhealth.tech:8080/translate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, language: selectedLanguage }),
        }
      );
      return await response.text();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const sendToApi = async ({
    message,
    isFollowUp,
  }: {
    message: string;
    isFollowUp: boolean;
  }) => {
    const context =
      "You are 'Gaia', a personal intelligent healthcare advisor. Provide accurate information.";
    const followUpContext = "Generate a list of possible follow-up questions.";
    try {
      const response = await fetch(
        `http://app.kindhealth.tech:8080/${type.toLowerCase()}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message,
            context: isFollowUp ? followUpContext : context,
            history: messages.map((msg) => ({
              author: msg.author,
              message: msg.message,
            })),
          }),
        }
      );
      const text = await response.text();
      const translated = await translateText(text);

      if (isFollowUp) {
        setFollowUp(
          translated!
            .trim()
            .split("\n")
            .map((question) => question.trim().substring(2))
        );
      } else {
        setMessages((prev) => [
          ...prev,
          { type, author: "bot", message: translated! },
        ]);
        botConversationTrigger(translated!);
        createMes(translated!, "bot");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  async function transcribe() {
    console.log("Started transcription");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!MediaRecorder.isTypeSupported("audio/webm")) {
        alert("Browser not supported");
        return;
      }
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm",
      });

      const webSocketUrl =
        selectedLanguage === "en-US"
          ? "wss://api.deepgram.com/v1/listen?model=nova"
          : `wss://api.deepgram.com/v1/listen?language=${selectedLanguage}`;

      const socket = new WebSocket(webSocketUrl, [
        "token",
        process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY!,
      ]);

      socket.onopen = () => {
        console.log({ event: "onopen" });
        mediaRecorder.addEventListener("dataavailable", (event) => {
          if (event.data.size > 0 && socket.readyState === 1) {
            socket.send(event.data);
          }
        });
        mediaRecorder.start(1000);
      };

      socket.onmessage = (message) => {
        const received = message && JSON.parse(message?.data as string);
        const transcript = received.channel?.alternatives[0]
          .transcript as string;
        setTranscript((prev) => {
          if (!prev.some((item) => item === transcript)) {
            return [...prev, transcript];
          }
          return prev;
        });
      };

      socket.onclose = () => console.log({ event: "onclose" });
      socket.onerror = (error) => console.log({ event: "onerror", error });

      socketRef.current = socket;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    if (isRecording) {
      console.log(transcript, "Recording...");
      setMessage("");
      transcribe();
    } else {
      console.log(transcript);
      setMessage(transcript.join(" "));
      setTranscript([]);
    }
  }, [isRecording]);

  const changeLang = api.user.changeLanguage.useMutation();
  const getLang = api.user.getLanguage.useQuery();

  useEffect(() => {
    if (getLang.isSuccess) {
      setSelectedLanguage(getLang.data as "en-US" | "hi" | "ja");
    }
  }, [getLang.isSuccess]);

  return (
    <div className="w-[300px] max-w-xl flex-grow overflow-hidden p-1 lg:w-[400px]">
      <div className="mb-4 h-96 overflow-y-auto bg-opacity-50 text-gray-600">
        {(getAllMessages.isLoading || createMessage.isPending) && (
          <div className="flex h-full items-center justify-center">
            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-100"></div>
          </div>
        )}

        {!(getAllMessages.isLoading || createMessage.isPending) &&
          messages
            .filter((msg) => msg.type === type)
            .map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.author === "user" ? "justify-end" : "justify-start"
                } mt-2`}
              >
                <div
                  className={`${
                    msg.author === "user"
                      ? "self-end bg-blue-600 text-white"
                      : "self-start bg-gray-200 text-gray-800"
                  } max-w-[70%] rounded-lg p-2`}
                  dangerouslySetInnerHTML={{
                    __html: msg.message.replace(/\n/g, "<br />"),
                  }}
                ></div>
              </div>
            ))}
        <div ref={messagesEndRef} />
      </div>

      {followUp.length > 0 && (
        <div className="no-scrollbar overflow-x-auto whitespace-nowrap border-t py-3">
          {followUp.map((followUpText, index) => (
            <span
              key={index}
              onClick={() => handleFollowUpClick(followUpText)}
              className="m-1 inline-block cursor-pointer rounded-lg bg-slate-200 px-3 py-2 text-sm hover:bg-slate-100 dark:bg-slate-600 dark:hover:bg-slate-500"
            >
              {followUpText}
            </span>
          ))}
        </div>
      )}

      <div className="border-t py-3">
        <div className="flex items-center">
          <Textarea
            style={{ resize: "none" }}
            disabled={getAllMessages.isLoading || createMessage.isPending}
            placeholder={
              getAllMessages.isLoading || createMessage.isPending
                ? "Loading..."
                : "Type a message..."
            }
            className="mr-2 rounded-l-lg border py-2 pr-10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key === "Enter" && !e.shiftKey && message.trim() !== "") {
                e.preventDefault();
                setMessages((prev) => [
                  ...prev,
                  { type, author: "user", message },
                ]);
                createMes(message, "user");
                await handleSendToApi();
              }
            }}
          />
          <div className="flex flex-col space-y-1">
            <Button
              onClick={async () => {
                if (isRecording) {
                  socketRef.current?.close();
                  await navigator.mediaDevices
                    .getUserMedia({ audio: true })
                    .then((stream) => {
                      stream.getTracks().forEach((track) => track.stop());
                    });
                  setIsRecording(false);
                } else {
                  setIsRecording(true);
                }
              }}
            >
              {isRecording ? (
                <X className="h-5 w-5" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
            </Button>
            <Button
              onClick={async () => {
                if (message.trim() !== "") {
                  setMessages((prev) => [
                    ...prev,
                    { type, author: "user", message },
                  ]);
                  createMes(message, "user");
                  await sendToApi({ message, isFollowUp: false });
                }
              }}
              disabled={
                message.length === 0 ||
                getAllMessages.isLoading ||
                createMessage.isPending
              }
            >
              <SendHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Select
          value={selectedLanguage}
          onValueChange={(value) => {
            setSelectedLanguage(value as "en-US" | "hi" | "ja");
            changeLang.mutate({ language: value as "en-US" | "hi" | "ja" });
          }}
          disabled={changeLang.isPending}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              <SelectItem value="en-US">English</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="ja">Japanese</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Chat;
