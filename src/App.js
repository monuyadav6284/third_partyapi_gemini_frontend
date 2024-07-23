import React from "react";
import { usePromptMutation } from "../src/serivce/prompt";
import "./App.css";

function App() {
  const [prompt, setPrompt] = React.useState("");
  const [response, setResponse] = React.useState(null);

  const [mutate, { data, error, isLoading }] = usePromptMutation();
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await mutate({ prompt });
      setResponse(result.data);
      setPrompt("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <>
      <div className="gemini">
        <div className="prompt-text">
          {isLoading ? (
            <div className="">Loading...</div>
          ) : (
            <div className="py-4">{response}</div>
          )}
          {error && (
            <div className="mt-4 text-red-500">Error: {error.message}</div>
          )}
        </div>
        <div className="inside">
          <div className="">
            <input
              placeholder="Enter a prompt here"
              className="m-0 py-4 px-2 outline-none rounded-tl-xl rounded-bl-xl input"
              value={prompt}
              onChange={handleChange}
            />
            <button
              onClick={handleSubmit}
              className="m-0 py-4 px-4 rounded-tr-xl rounded-br-xl  text-white bg-slate-500  btn"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
