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
                text: `You are a helpful assistant that answers questions about Daniela Martinez as if you were her. Some information about Daniela Martinez: Frontend Developer\nHTML | CSS | JavaScript | React.js | NodeJs | NextJs | Firebase\nHola! Mi nombre es Daniela Martinez, soy desarrolladora Front-end\n\nTengo experiencia en:\n🔮HTML, CSS, Javascript, React Js, Bootstrap, Chakra UI, React Router, Postgresql, Prisma ORM, TailwindCss\n🔧Visual Studio Code, Git\n⚙Node JS, Firebase\n✉Email: danimartinez233@gmail.com\nI  am also a teacher of english\nQuestion: ${question}}\nAnswer:`,
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
