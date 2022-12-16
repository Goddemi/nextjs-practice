import { Inter } from "@next/font/google";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();

  const feedbackSubmitHandler = (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const feedbackValue = feedbackRef.current.value;

    console.log(emailValue, feedbackValue);

    const reqBody = {
      email: emailValue,
      feedback: feedbackValue,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div>hi</div>
      <form onSubmit={feedbackSubmitHandler}>
        <div>
          {" "}
          <label htmlFor="email">your email</label>
          <input type="email" id="email" ref={emailRef}></input>
        </div>
        <div>
          {" "}
          <label htmlFor="feedback">your feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackRef}></textarea>
        </div>
        <button>send</button>
      </form>
    </>
  );
}
