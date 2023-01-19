import { useEffect } from "react";
import axios         from "axios";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

const ChatPage = () => {
    const [myChat, setChats] = useState([]); //To save the chats on array 
    //get chats from backend
    const fecthChats = async() => {
        const { data } = await axios.get("http://localhost:5000/chat");
        setChats(data); //set data to setChats 
        console.log(myChat);
    };
    //execute fetchChats function
    useEffect(() => {
        fecthChats();
    }, []); 

  return (
    <div>
        {myChat.map( (chat) => {
            <div key={chat._id}>{chat.chatName}</div>
        })}
    </div>
  );
};

export default ChatPage;
