import React, { useState } from "react";

const VerifyTokenForm = () => {
  const [token, setToken] = useState("");
  const [verificationData, setVerificationData] = useState(null);
  const [error, setError] = useState("");

  const handleVerifyToken = async () => {
    try {
      const response = await fetch("/api/verify-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (response.ok) {
        setVerificationData(data);
        setError("");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to verify token");
    }
  };

  if (verificationData) {
    return <CreateUserForm verificationData={verificationData} token={token} />;
  }

  return (
    <div>
      <h2>Verify Invitation Token</h2>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter your token"
      />
      <button onClick={handleVerifyToken}>Verify</button>
      {error && <p>{error}</p>}
    </div>
  );
};

const CreateUserForm = ({ verificationData, token }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreateUser = async () => {
    try {
      const response = await fetch("/api/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, name, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("User created successfully!");
        setError("");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to create user");
    }
  };

  return (
    <div>
      <h2>Create Your Account</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handleCreateUser}>Create Account</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default VerifyTokenForm;
