import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Select, { Options } from "react-select";

// Define the type for the options
type ModelOption = {
  value: string;
  label: string;
  type: "local" | "cloud";
};

const modelOptions: Options<ModelOption> = [
  { value: "Ollam", label: "Ollam", type: "local" },
  { value: "LM Studio", label: "LM Studio", type: "local" },
  { value: "Local AI", label: "Local AI", type: "local" },
  { value: "GPT-3", label: "GPT-3", type: "cloud" },
  { value: "BERT", label: "BERT", type: "cloud" },
  { value: "T5", label: "T5", type: "cloud" },
  { value: "RoBERTa", label: "RoBERTa", type: "cloud" },
  { value: "GPT-4", label: "GPT-4", type: "cloud" },
];

const embeddingOptions: Options<ModelOption> = [
  { value: "Kind Health Embedding", label: "KH Embedding", type: "local" },
  { value: "LM Studio", label: "LM Studio", type: "local" },
  { value: "Open AI", label: "Cloud Embedding 1", type: "cloud" },
  { value: "Azure Open AI", label: "Cloud Embedding 2", type: "cloud" },
];

export default function Configuration() {
  const { data: session } = useSession();
  const [step, setStep] = useState(1);
  const [company, setCompany] = useState("");
  const [purpose, setPurpose] = useState("");
  const [telemetry, setTelemetry] = useState(false);
  const [patientSelfHelp, setPatientSelfHelp] = useState(false);
  const [useOfApis, setUseOfApis] = useState(false);
  const [selectedModel, setSelectedModel] = useState<ModelOption | null>(null);
  const [selectedEmbedding, setSelectedEmbedding] =
    useState<ModelOption | null>(null);
  const [apiUrl, setApiUrl] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [vectorDbUrl, setVectorDbUrl] = useState("");
  const router = useRouter();

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!session || !session.user) {
      // Handle case where session is null
      return;
    }

    const res = await fetch("/api/configuration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        purpose,
        telemetry,
        patientSelfHelp,
        useOfApis,
        selectedModel: selectedModel?.value, // Save selected model
        selectedEmbedding: selectedEmbedding?.value, // Save selected embedding
        apiUrl,
        apiKey,
        vectorDbUrl,
        userId: session.user.id,
      }),
    });
    if (res.ok) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-center text-lg font-bold">Configuration</h2>
        {step === 1 && (
          <>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Purpose of Using the Product
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select a purpose
                </option>
                <option value="Trying">Trying</option>
                <option value="Working with patients">
                  Working with patients
                </option>
                <option value="System Admins">System Admins</option>
              </select>
            </div>
            <fieldset className="border-b border-t border-gray-200">
              <legend className="sr-only">Configuration Options</legend>
              <div className="divide-y divide-gray-200">
                <div className="relative flex items-start pb-4 pt-3.5">
                  <div className="min-w-0 flex-1 text-sm leading-6">
                    <label
                      htmlFor="telemetry"
                      className="font-medium text-gray-900"
                    >
                      Telemetry Enabled
                    </label>
                    <p id="telemetry-description" className="text-gray-500">
                      Enable or disable telemetry data collection.
                    </p>
                  </div>
                  <div className="ml-3 flex h-6 items-center">
                    <input
                      id="telemetry"
                      aria-describedby="telemetry-description"
                      name="telemetry"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={telemetry}
                      onChange={(e) => setTelemetry(e.target.checked)}
                    />
                  </div>
                </div>
                <div className="relative flex items-start pb-4 pt-3.5">
                  <div className="min-w-0 flex-1 text-sm leading-6">
                    <label
                      htmlFor="patientSelfHelp"
                      className="font-medium text-gray-900"
                    >
                      Patient Self Help Enabled
                    </label>
                    <p
                      id="patientSelfHelp-description"
                      className="text-gray-500"
                    >
                      Allow patients to access self-help resources.
                    </p>
                  </div>
                  <div className="ml-3 flex h-6 items-center">
                    <input
                      id="patientSelfHelp"
                      aria-describedby="patientSelfHelp-description"
                      name="patientSelfHelp"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={patientSelfHelp}
                      onChange={(e) => setPatientSelfHelp(e.target.checked)}
                    />
                  </div>
                </div>
                <div className="relative flex items-start pb-4 pt-3.5">
                  <div className="min-w-0 flex-1 text-sm leading-6">
                    <label
                      htmlFor="useOfApis"
                      className="font-medium text-gray-900"
                    >
                      Use of APIs
                    </label>
                    <p id="useOfApis-description" className="text-gray-500">
                      Enable or disable the use of external APIs.
                    </p>
                  </div>
                  <div className="ml-3 flex h-6 items-center">
                    <input
                      id="useOfApis"
                      aria-describedby="useOfApis-description"
                      name="useOfApis"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      checked={useOfApis}
                      onChange={(e) => setUseOfApis(e.target.checked)}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-150 hover:bg-gray-800"
              >
                Next
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                AI LLM Models
              </label>
              <Select
                options={modelOptions}
                value={selectedModel}
                onChange={(selectedOption) =>
                  setSelectedModel(selectedOption as ModelOption)
                }
                className="text-sm"
              />
            </div>
            {selectedModel && selectedModel.type === "local" && (
              <>
                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium">
                    API URL
                  </label>
                  <input
                    type="text"
                    value={apiUrl}
                    onChange={(e) => setApiUrl(e.target.value)}
                    className="w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-1 block text-sm font-medium">
                    API Key
                  </label>
                  <input
                    type="text"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </>
            )}
            {selectedModel && selectedModel.type === "cloud" && (
              <div className="mb-4">
                <label className="mb-1 block text-sm font-medium">
                  API Key
                </label>
                <input
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-150 hover:bg-gray-800"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-150 hover:bg-gray-800"
              >
                Next
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Embedding Preferences
              </label>
              <Select
                options={embeddingOptions}
                value={selectedEmbedding}
                onChange={(selectedOption) =>
                  setSelectedEmbedding(selectedOption as ModelOption)
                }
                className="text-sm"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-150 hover:bg-gray-800"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-150 hover:bg-gray-800"
              >
                Next
              </button>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Vector DB URL
              </label>
              <input
                type="text"
                value={vectorDbUrl}
                onChange={(e) => setVectorDbUrl(e.target.value)}
                className="w-full rounded-lg border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-150 hover:bg-gray-800"
              >
                Back
              </button>
              <button
                type="submit"
                className="rounded-lg bg-black px-4 py-2 text-sm text-white transition duration-150 hover:bg-gray-800"
              >
                Save Configuration
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
