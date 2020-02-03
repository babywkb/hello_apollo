import React, { useState, useEffect } from "react";
import useSendMessageMutations from "./useSendMessageMutations";

const SendMessage = ({ author }) => {
  const sendMessage = useSendMessageMutations();
  let [message, setMessage] = useState();

  useEffect(() => {
    setMessage(message);
  }, [message]);

  return (
    <div>
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={() => sendMessage({ message: message, author: author })}>
        Boom!
      </button>
    </div>
  );
};

export default SendMessage;
