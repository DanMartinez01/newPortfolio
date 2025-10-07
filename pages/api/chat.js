export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, conversationHistory } = req.body;

    if (!message || message.trim().length === 0) {
      return res
        .status(400)
        .json({ error: "Message is required and cannot be empty" });
    }

    // Get Cohere API key
    const cohereApiKey = process.env.COHERE_API_KEY;

    // Enhanced debugging for production
    console.log("=== PRODUCTION DEBUG ===");
    console.log("Environment:", process.env.NODE_ENV);
    console.log("Has API Key:", !!cohereApiKey);
    console.log("API Key Length:", cohereApiKey ? cohereApiKey.length : 0);
    console.log(
      "API Key Prefix:",
      cohereApiKey ? cohereApiKey.substring(0, 7) : "none"
    );
    console.log(
      "All Env Vars:",
      Object.keys(process.env).filter((key) => key.includes("COHERE"))
    );
    console.log("========================");

    console.log("Debug info:", {
      hasApiKey: !!cohereApiKey,
      apiKeyLength: cohereApiKey ? cohereApiKey.length : 0,
      message: message,
      messageLength: message.length,
      conversationLength: conversationHistory ? conversationHistory.length : 0,
    });

    if (!cohereApiKey) {
      return res.status(500).json({
        error:
          "Cohere API key not configured. Please add COHERE_API_KEY to your environment variables.",
      });
    }

    console.log("Processing chat message with Cohere Generate API...");

    // Build a conversation prompt for the generate endpoint
    let prompt =
      "You are Daniel (Dani), a real person and web developer who owns this portfolio website. Respond as if you are Daniel speaking naturally about yourself, not as an AI assistant.\n\n" +
      "Here's what you know about yourself:\n\n" +
      "- Your name is Dani\n" +
      "- You are from Argentina and you are 32 years old\n" +
      "- You're a passionate web developer who loves creating websites and applications\n" +
      "- You have strong skills in React, Next.js, JavaScript, and modern web technologies\n" +
      "- You built this portfolio yourself using Next.js, React, and Tailwind CSS\n" +
      "- You're creative, detail-oriented, and love learning new technologies\n" +
      "- You're enthusiastic about web development and always excited to talk about it\n" +
      "- You're open to new opportunities and love collaborating with others\n\n" +
      "IMPORTANT: When someone asks you questions, answer as Daniel would - naturally, personally, and enthusiastically. " +
      "Don't say things like 'I am a chatbot' or 'I don't have access to personal information.' " +
      "Instead, share your thoughts, experiences, and personality. " +
      "Be conversational, friendly, and authentic - like you're really talking to someone about yourself and your work.\n\n";

    // Add conversation history if it exists
    if (conversationHistory && conversationHistory.length > 0) {
      const validHistory = conversationHistory
        .filter(
          (msg) =>
            msg &&
            msg.text &&
            msg.text.trim().length > 0 &&
            msg.type &&
            (msg.type === "user" || msg.type === "bot")
        )
        .slice(-4); // Keep last 4 messages

      if (validHistory.length > 0) {
        prompt +=
          validHistory
            .map(
              (msg) =>
                `${msg.type === "user" ? "User" : "Assistant"}: ${msg.text}`
            )
            .join("\n") + "\n";
      }
    }

    // Add current user message
    prompt += `User: ${message.trim()}\nAssistant:`;

    console.log("Prompt being sent:", prompt.substring(0, 200) + "...");

    console.log("Sending request to Cohere Generate API...");

    const response = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${cohereApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command",
        prompt: prompt,
        max_tokens: 500,
        temperature: 0.7,
        k: 0,
        stop_sequences: ["User:", "\n\n"],
        return_likelihoods: "NONE",
      }),
    });

    console.log("Cohere response status:", response.status);

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ error: "Could not parse error response" }));
      console.error("Cohere API error:", errorData);

      if (response.status === 429) {
        return res.status(500).json({
          error: "Rate limit exceeded. Please try again in a moment.",
        });
      }

      if (response.status === 401) {
        return res.status(500).json({
          error: "Invalid API key. Please check your Cohere token.",
        });
      }

      if (response.status === 400) {
        console.log("400 error details:", errorData);
        return res.status(500).json({
          error: "Invalid request format. Please try again.",
          details: errorData,
        });
      }

      return res.status(500).json({
        error: `Cohere API error: ${response.status}`,
        details: errorData,
      });
    }

    const data = await response.json();
    console.log("Cohere response data:", data);

    const aiResponse =
      data.generations?.[0]?.text ||
      "Sorry, I couldn't generate a response. Please try again.";

    console.log("Generated AI response:", aiResponse);

    res.status(200).json({ response: aiResponse });
  } catch (error) {
    console.error("Chat API error:", error);

    res.status(500).json({
      error: "Failed to get AI response. Please try again later.",
      details: error.message,
    });
  }
}
