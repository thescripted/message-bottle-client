import React, { useState } from "react";
import Message from "./Message";

const HeaderField = () => {
  const [reqMessage, setReqMessage] = useState("");
  const [messageRequested, isMessageRequested] = useState(true);

  const requestMessage = (e) => {
    e.preventDefault();
    fetch('https://messagebottle.netlify.app/.netlify/functions/messageRead', {
      method: 'GET',
      mode: 'cors',
      headers: {'Content-Type': 'text/plain'},
    }).then(response => response.json())
    .then(res => {
      isMessageRequested(false);
      setReqMessage(res.data.body);
    }).catch(err => console.log(err))
  }

  return (
    <div className="intro">
      {messageRequested ? (
        <>
          <p>Hello,</p> <br />
          <p>
            This is a website where you can do whatever you want in here. Go
            ahead and write your first message in the text box below.
          </p>
          <br />
          <p>
            Or, if you want, you can click the &#34;Read a Message&#34; button to see
            what someone else has written.
          </p>
          <br />
        </>
      ) : (
        <Message message={reqMessage} />
      )}

      <input
        className="submit-button"
        type="submit"
        value="Read a Message"
        onClick={(e) => requestMessage(e)}
      />
    </div>
  );
};

export default HeaderField;
