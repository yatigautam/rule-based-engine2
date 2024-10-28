import React, { useState } from "react";

function CombineRules() {
  const [ruleStrings, setRuleStrings] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/combine-rules", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ruleStrings: ruleStrings
            .split("\n")
            .map((s) => s.trim())
            .filter((s) => s),
        }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Combine Rules</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={ruleStrings}
          onChange={(e) => setRuleStrings(e.target.value)}
          placeholder="Enter rule strings (one per line)"
          rows={5}
          required
        />
        <button type="submit">Combine Rules</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default CombineRules;
