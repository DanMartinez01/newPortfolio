"use client";

import React, { useEffect, useRef, useState } from "react";
import { getChatAnswer } from "./actions";
import Image from "next/image";

function Chat({ initialMessage }) {
  const [messages, setMessages] = useState(
    initialMessage
      ? [
          {
            id: "1",
            type: "bot",
            text: initialMessage,
          },
        ]
      : []
  );
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const container = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessages((messages) =>
      messages.concat({ id: String(Date.now()), type: "user", text: question })
    );
    setQuestion("");

    const text = await getChatAnswer(question);

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "bot",
        text,
      })
    );

    setLoading(false);
  }

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight);
  }, [messages]);

  return (
    <main>
      <div className="flex flex-col gap-4 m-auto border border-neutral-500/20 rounded-lg mt-10 ">
        <div className="w-full py-6 px-6   flex flex-row items-center bg-blue-500 rounded-lg rounded-b-none">
          <Image
            src="/images/profilepic.jpg"
            alt="chat user"
            width={100}
            height={100}
            className="rounded-full w-20 h-20 "
          />
          <h1 className="text-3xl text-white text-center ml-4">Hi there! 👋🏼</h1>
        </div>
        <div
          ref={container}
          className="flex flex-col gap-4 h-[480px] overflow-y-auto px-4"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 max-w-[80%] h-auto rounded-3xl text-white items-center ${
                message.type === "bot"
                  ? "bg-blue-600 text-left self-start rounded-bl-none  break-words"
                  : "bg-blue-900  text-right self-end rounded-br-none  break-words"
              }`}
            >
              <p className="m-0">{message.text}</p>
            </div>
          ))}
        </div>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            className="rounded rounded-r-none flex-1 border border-neutral-500/20 text-black py-2 px-4"
            name="question"
            placeholder="Who are you?"
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
          <button
            className={`px-4 py-2 text-white bg-blue-600 rounded-lg rounded-l-none rounded-t-none ${
              loading ? "bg-primary-300" : "bg-primary-500"
            }`}
            disabled={loading}
            type="submit"
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Chat;
