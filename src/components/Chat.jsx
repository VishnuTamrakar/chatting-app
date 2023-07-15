import React, { useContext } from 'react'
import add from '../Img/add.png'
import more from '../Img/more.png'
import cam from '../Img/cam.png'
import Input from './Input'
import { ChatContext } from '../context/chatContext'
import Messages from './Messages'
const Chat = () => {
  const {data} = useContext(ChatContext)
  return (

    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat
