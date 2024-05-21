const OpenAI = require('openai')

require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// // 1) Text to text conversation
// const getText = async () => {
//   const completion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: 'system',
//         content: 'You are a helpful assistant',
//       },
//       {
//         role: 'user',
//         content: 'What is the oldest English county?',
//       },
//     ],
//     model: 'gpt-4o',
//   })

//   console.log(completion.choices)
// }

// // 2) Longer text to text conversation
// const getText = async () => {
//   const completion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: 'system',
//         content: 'You are a helpful assistant',
//       },
//       {
//         role: 'user',
//         content: 'What is the oldest English county?',
//       },
//       {
//         role: 'assistant',
//         content:
//           'Some of the oldest established regions include Sussex, Kent, and Essex.',
//       },
//       {
//         role: 'user',
//         content: 'Where are those?',
//       },
//     ],
//     model: 'gpt-4o',
//   })

//   console.log(completion.choices[0].message)
// }

// // 3) Image to text
// const getText = async () => {
//   const completion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: 'user',
//         content: [
//           { type: 'text', text: 'What is this creature wearing?' },
//           {
//             type: 'image_url',

//             //dog-in-glasses.jpg
//             image_url: { url: 'https://i.ibb.co/Vm1gXyL/dog-in-glasses.jpg' },
//           },
//         ],
//       },
//     ],
//     model: 'gpt-4o',
//   })

//   console.log(completion.choices[0].message.content)
// }

// // 4) Multiple images to text/Comparing images
// const getText = async () => {
//   const completion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: 'user',
//         content: [
//           {
//             type: 'text',
//             text: 'What is the difference between the two images?',
//           },
//           {
//             type: 'image_url',
//             image_url: {
//               //person-holding-lightbulb.jpg
//               url: 'https://i.ibb.co/kH0QJZv/diego-ph-f-Iq0t-ET6llw-unsplash.jpg',
//             },
//           },
//           {
//             type: 'image_url',
//             image_url: {
//               //rose-in-vase.jpg
//               url: 'https://i.ibb.co/wwjjn7n/tirza-van-dijk-c-NGUw-CEsp0-unsplash.jpg',
//             },
//           },
//         ],
//       },
//     ],
//     model: 'gpt-4o',
//   })

//   console.log(completion.choices[0])
// }

getText()