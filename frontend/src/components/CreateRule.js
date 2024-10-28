import React, { useState } from "react";

function CreateRule() {
  const [name, setName] = useState("");
  const [ruleString, setRuleString] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/create-rule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, ruleString }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Create Rule</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Rule Name"
          required
        />
        <textarea
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder="Rule String"
          required
        />
        <button type="submit">Create Rule</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default CreateRule;
