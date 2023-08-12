import React, { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info }) => {
  const [showinfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!showinfo)}>
          {showinfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showinfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
