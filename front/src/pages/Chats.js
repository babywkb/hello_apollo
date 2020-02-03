import React from "react";
import useChatsQuery from "./useChatsQuery";
import SendMessage from "./SendMessage";
import useChatsChanged from "./useChatsChanged";

const Chats = () => {
  useChatsChanged();
  let { data } = useChatsQuery();

  if (!data || !data.chats) return null;

  const chats = [];
  for (var i in data.chats) {
    chats.push(
      <div key={i}>
        <p>"{data.chats[i].message}"</p>
        <p>{data.chats[i].author}</p>
      </div>
    );
  }

  return (
    <div>
      <span>{chats}</span>
      <SendMessage author='user001'></SendMessage>
    </div>
  );
};

export default Chats;
