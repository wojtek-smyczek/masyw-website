"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendMail, formState } from "../app/api/action";

const initialState: formState = {};

function ContactForm() {
  const [state, formAction] = useFormState(sendMail, initialState);

  return (
    <form action={formAction}>
      {/* NAME */}

      <label htmlFor="name">YOUR NAME</label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        className="border-white-100 w-full border-b p-1"
        placeholder="Enter your name..."
      />
      {state.errors?.name && (
        <p className="text-red-500">{state.errors?.name[0]}</p>
      )}

      {/* MAIL */}
      <label htmlFor="email">YOUR MAIL</label>
      <br />
      <input
        type="email"
        name="email"
        id="email"
        className="border-white-100 w-full border-b p-1"
        placeholder="Enter your mail..."
      />
      {state.errors?.email && (
        <p className="text-red-500">{state.errors?.email[0]}</p>
      )}

      {/* MESSAGE */}
      <label htmlFor="message">YOUR MESSAGE</label>
      <br />
      <textarea
        name="message"
        id="message"
        className="border-white-100 w-full border-b p-1"
        placeholder="Your message..."
      />
      {state.errors?.message && (
        <p className="text-red-500">{state.errors?.message[0]}</p>
      )}

      <SubmitButton />

      {state?.success && <p className="text-green-500">{state.success}</p>}
    </form>
  );
}

export default ContactForm;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <div className="animate-spin"></div>
          <span>Submitting</span>
        </>
      ) : (
        <span>SUBMIT</span>
      )}
    </button>
  );
}
