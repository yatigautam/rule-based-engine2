import React, { useState } from "react";

function EvaluateRule() {
  const [ast, setAst] = useState("");
  const [data, setData] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedAst = JSON.parse(ast);
      const parsedData = JSON.parse(data);

      const response = await fetch("http://localhost:5000/api/evaluate-rule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ast: parsedAst, data: parsedData }),
      });
      const responseData = await response.json();
      setResult(responseData);
    } catch (error) {
      console.error("Error:", error);
      setResult({ success: false, error: error.message });
    }
  };

  return (
    <div>
      <h2>Evaluate Rule</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={ast}
          onChange={(e) => setAst(e.target.value)}
          placeholder="AST (JSON format)"
          rows={5}
          required
        />
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Data (JSON format)"
          rows={5}
          required
        />
        <button type="submit">Evaluate Rule</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default EvaluateRule;
