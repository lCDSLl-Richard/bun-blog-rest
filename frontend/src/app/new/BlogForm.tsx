"use client";

import { API } from "@/utils/Api";
import { useState } from "react";

interface FormState {
  title: string;
  content: string;
}

export default function BlogForm() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formState.title || !formState.content) {
      setErrorMessage("Please fill out all fields!");
      return;
    }

    const res = await fetch(API.blogs.create(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });

    if (!res.ok) {
      setErrorMessage("Something went wrong! Please try again later.");
      return;
    }

    setFormState({ title: "", content: "" });
    setErrorMessage("");
  }

  const [formState, setFormState] = useState<FormState>({
    title: "",
    content: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formState.title}
        onChange={(event) => {
          setFormState({ ...formState, title: event.target.value });
        }}
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        value={formState.content}
        onChange={(event) =>
          setFormState({ ...formState, content: event.target.value })
        }
      />
      <button>Create Blog!</button>
      <h6 style={{ color: "#c62828" }}>{errorMessage}</h6>
    </form>
  );
}
