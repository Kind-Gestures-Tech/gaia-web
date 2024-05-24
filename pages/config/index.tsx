import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Select, { Options } from "react-select";

// Define the type for the options
type ModelOption = {
  value: string;
  label: string;
};

const modelOptions: Options<ModelOption> = [
  { value: "GPT-3", label: "GPT-3" },
  { value: "BERT", label: "BERT" },
  { value: "T5", label: "T5" },
  { value: "RoBERTa", label: "RoBERTa" },
  { value: "GPT-4", label: "GPT-4" },
];

export default function Configuration() {
  const { data: session } = useSession();
  const [step, setStep] = useState(1);
  const [company, setCompany] = useState("");
  const [purpose, setPurpose] = useState("");
  const [telemetry, setTelemetry] = useState(false);
  const [patientSelfHelp, setPatientSelfHelp] = useState(false);
  const [useOfApis, setUseOfApis] = useState(false);
  const [aiModels, setAiModels] = useState<ModelOption[]>([]);
  const [apiUrl, setApiUrl] = useState("");
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
        aiModels: aiModels.map((model) => model.value), // Convert selected models to array of values
        apiUrl,
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
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={telemetry}
                  onChange={(e) => setTelemetry(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <label className="ml-2 text-sm font-medium">
                  Telemetry Enabled
                </label>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={patientSelfHelp}
                onChange={(e) => setPatientSelfHelp(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <label className="ml-2 text-sm font-medium">
                Patient Self Help Enabled
              </label>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={useOfApis}
                onChange={(e) => setUseOfApis(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <label className="ml-2 text-sm font-medium">Use of APIs</label>
            </div>
            <div className="flex justify-between">
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
                isMulti
                options={modelOptions}
                value={aiModels}
                onChange={(selectedOptions) =>
                  setAiModels(selectedOptions as ModelOption[])
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
        {step === 3 && (
          <>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">API URL</label>
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
