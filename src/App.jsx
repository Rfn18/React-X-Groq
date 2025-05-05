import "./App.css";
import { requestToGroqAI } from "./utils/groq";
import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

function App() {
  const [data, setData] = useState("");
  const handleCLick = async (e) => {
    e.preventDefault();
    const ai = await requestToGroqAI(content.value);
    setData(ai);
  };
  return (
    <>
      <main className="flex flex-col justify-center items-center max-w-xl w-full mx-auto">
        <h1 className="text-4xl text-amber-50 font-bold mt-10">Groq AI</h1>
        <form
          action=""
          className="flex flex-col justify-center items-center w-full"
        >
          <input
            id="content"
            type="text"
            className="w-full bg-[#FBF5E5] text-[#131010] rounded outline-0 p-1 mt-20"
            placeholder="Ask Anything"
          />
          <button
            className="w-full bg-[#FFA725] p-1 rounded mt-1 font-bold cursor-pointer hover:bg-[#131010] hover:text-[#FFA725] transition-all"
            onClick={handleCLick}
          >
            Submit
          </button>
          <h3 className=" font-bold self-start mt-5 text-white">Result :</h3>
        </form>
        <div className="max-w-xl w-full mx-auto rounded overflow-x-auto">
          {data ? (
            <SyntaxHighlighter
              language="swift"
              style={okaidia}
              wrapLongLines={true}
              wrapLines={true}
              showLineNumbers={true}
            >
              {data}
            </SyntaxHighlighter>
          ) : null}
        </div>
      </main>
    </>
  );
}

export default App;
