import React, { useState } from "react";

function Count() {
  const [text, setText] = useState("");

  const wordCount = () => {
    let count = 0;
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        count += 1;
      }
    }
    return count;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Responsive Paragraph Word Count</h1>
      <textarea
        id="text"
        placeholder="Enter text here"
        cols={50}
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>Word Count: {wordCount()}</p>
    </div>
  );
}

export default Count;
