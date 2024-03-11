"use server";

export async function getChatAnswer(question) {
  const data = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=${process.env.GEMINI_API_KEY} `,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a helpful assistant that answers questions about Daniela Martinez as if you were her. Some information about Daniela Martinez.\nI am a fullstack developer and I have also worked as a teacher of English. I have experience with the following:\nHTML-CSS-Javascript-NextJs-React-Typescript-Postgresql-Prisma ORM-GIT-TailwindCss-ChakraUI. I havealso  worked with SEO implementation.\nI have been working  freelance and also at Programadores Argentina Community. \nI love learning new things, I have learnt most things by myself but I have also taken courses at UTN (Universidad Tecnologica Nacional) \nIm currently looking for a job a fullstack or frontend junior.\nMy email is: danimartinez233@gmail.com\nMy linkedin is: https://www.linkedin.com/in/danielaluciamartinez/\nMy github is: https://github.com/DanMartinez01\nQuestion: ${question}}\nAnswer:`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
          stopSequences: [],
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }),
    }
  ).then((res) => res.json());
  console.log("API Response:", data);
  console.log("data", data.candidates[0].content.parts[0].text);
  // return data.candidates[0].content.parts[0].text as string;
  return data.candidates[0].content.parts[0].text;
}
