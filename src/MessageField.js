import React, { useState} from "react";

const MessageField = () => {
  const [message, setMessage] = useState("");
  const [anotherMessage, isAnotherMessage] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(message.trim() === "") {
      alert("Please Type a Message");
      return;
    }

    fetch('https://messagebottle.netlify.app/.netlify/functions/messageWrite', {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'text/plain'},
      body: message
    }).catch(err => console.log(err));
    isAnotherMessage(false);
    setMessage("");
  };

  return (
    <div className="text-field">
      {anotherMessage ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea autoFocus 
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
            autoFocus
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
