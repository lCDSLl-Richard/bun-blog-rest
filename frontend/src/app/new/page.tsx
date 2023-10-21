"use client";
import { useState } from "react";

import { client } from "../page";

interface FormState {
  title: string;
  content: string;
}

export default function Page() {
  const [formState, setFormState] = useState<FormState>({
    title: "",
    content: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      await client.blogs[""].post(formState);
      setFormState({ title: "", content: "" });
      setErrorMessage("");
    } catch {
      setErrorMessage("Something went wrong! Please try again later.");
    }
  }

  return (
    <main>
      <hgroup>
        <h1>Add a blog</h1>
        <h2>So everyone can read what you have to say</h2>
      </hgroup>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={(event) =>
            setFormState({
              ...formState,
              title: event.target.value,
            })
          }
        />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          value={formState.content}
          onChange={(event) =>
            setFormState({ ...formState, content: event.target.value })
          }
        />
        <button onClick={handleSubmit}>Create Blog!</button>
        <h6 style={{ color: "#c62828" }}>{errorMessage}</h6>
      </form>
    </main>
  );
}
