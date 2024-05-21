const OpenAI = require('openai')

const openai = new OpenAI({
  apiKey: `${process.env.openAiAPIKey}`,
})
