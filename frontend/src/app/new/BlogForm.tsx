"use client";

import Button from "@/components/Button";
import Input from "@/components/Forms/Input";
import TextArea from "@/components/Forms/TextArea";
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
    <form
      className="w-4/5 mx-auto mt-10 flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <Input
        label="Title"
        value={formState.title}
        onChange={(event) => {
          setFormState({ ...formState, title: event.target.value });
        }}
        placeholder="Your blog's title..."
      />
      <TextArea
        label="Content"
        value={formState.content}
        onChange={(event) => {
          setFormState({ ...formState, content: event.target.value });
        }}
        placeholder="Your blog's content..."
      />
      <Button label="Submit Blog!" />
      <h6 className="text-primary">{errorMessage}</h6>
    </form>
  );
}
