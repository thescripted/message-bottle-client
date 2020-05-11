import React, { useState } from "react";

const MessageField = () => {
  const [message, setMessage] = useState("Dear Website...,\n\n");
  const [anotherMessage, isAnotherMessage] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Date.now());
    console.log(message);
  };

  return (
    <div className="text-field">
      {anotherMessage ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea
            className="textarea"
            placeholder="Dear Website...,"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <input className="submit-button" type="submit" value="submit" />
        </form>
      ) : (
        <span className="thank-you">
          <p>Thank you!</p>
          <button
            className="submit-button"
            onClick={() => isAnotherMessage(true)}
          >
            Another?
          </button>
        </span>
      )}
    </div>
  );
};

export default MessageField;
