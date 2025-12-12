"use client";

import { useState } from "react";

export default function JokePage() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchJoke() {
    setLoading(true);

    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    
    setJoke(data);
    setLoading(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>😂 Random Joke</h1>

      {joke && (
        <div>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </div>
      )}

      <button
        onClick={fetchJoke}
        disabled={loading}
        style={{
          padding: "10px 20px",
          background: loading ? "#444" : "black",
          color: "white",
          borderRadius: "6px",
          marginTop: "20px",
          cursor: loading ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        {loading ? (
          <div style={{ display: "flex", gap: "3px" }}>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        ) : (
          "Get Joke"
        )}
      </button>

      <style>
        {`
          .dot {
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            animation: blink 1s infinite ease-in-out;
          }
          .dot:nth-child(2) {
            animation-delay: 0.2s;
          }
          .dot:nth-child(3) {
            animation-delay: 0.4s;
          }
          @keyframes blink {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
    </div>
  );
}
