const API_URL = "http://localhost:5000/api/rules";

export const createRule = async (ruleString) => {
  const res = await fetch(`${API_URL}/create_rule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ruleString }),
  });
  return await res.json();
};

export const combineRules = async (ruleIds) => {
  const res = await fetch(`${API_URL}/combine_rules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ruleIds }),
  });
  return await res.json();
};

export const evaluateRule = async (ast, data) => {
  const res = await fetch(`${API_URL}/evaluate_rule`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ast, data }),
  });
  return await res.json();
};
