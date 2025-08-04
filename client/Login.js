import React, { useState } from "react";
import supabase from "./supabaseClient";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setSuccess("✅ Login successful!");
      setError("");

      // ✅ Redirect to Streamlit ML app
      window.location.href = "https://yut4dj6nxyxaasimwwvpzm.streamlit.app";
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>🔐 Login to Diabetes App</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
      />
      <button onClick={handleLogin} style={{ padding: "0.5rem 1rem" }}>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default Login;
