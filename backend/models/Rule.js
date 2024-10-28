const mongoose = require("mongoose");

const RuleSchemaDefinition = new mongoose.Schema({
  ruleName: {
    type: String,
    required: true,
    unique: true,
  },
  ruleExpression: {
    type: String,
    required: true,
  },
  abstractSyntaxTree: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("RuleEntity", RuleSchemaDefinition);
