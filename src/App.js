
import './App.css';
import gptlogo from './assets/chatgpt.svg'
import addbtn from './assets/add-30.png'
import messageicon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendbtn from './assets/send.svg'
import usericon from './assets/user-icon.png'
import gptimglogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './Openai';
import { useEffect, useRef, useState } from 'react';
function App() {

  const msgEnd=useRef("");
  const[input,setInput]=useState("");
  const [messages,setMessages]=useState([{
    text: "Hello! I am MyGPT, a language model developed by Amitanshu  with the help of OpenAI API. How can I assist you today? If you have any questions or need information on a particular topic, feel free to ask! "  ,
    isBot:true,
  }]);

useEffect(()=>{
msgEnd.current.scrollIntoView();
},[messages])


  const handaldesend = async () => {
    try {
      const text=input;
      setInput('');
      setMessages([
        ...messages,
        {
          text,isBot:false
        }
      ])
        const res = await sendMsgToOpenAI(input);
        console.log(res);
        setMessages([...messages ,
         {text,isBot:false},
         {text:res,isBot:true}
         
        ])
    } catch (error) {
        console.error('Error while sending message to OpenAI:', error);
        // Handle the error appropriately
    }
};

const handaleEnter=async (e)=>{
  if(e.key==='Enter')
    await handaldesend()
}

const handaleQuery= async(e)=>{
  try {
    const text=e.target.value;
    
    setMessages([
      ...messages,
      {
        text,isBot:false
      }
    ])
      const res = await sendMsgToOpenAI(text);
    
      setMessages([...messages ,
       {text,isBot:false},
       {text:res ,isBot:true}
       
      ])
  } catch (error) {
      console.error('Error while sending message to OpenAI:', error);
      // Handle the error appropriately
  }
}
  return (
    <div className="App">
     <div className='sidebar'  >
     <div className='upperside'>
      <div className='uppersidetop'><img  src={gptlogo} alt='sory' className='logo'  /> <span className='span'>MyGpt</span>
      


      <button className='midbtn' onClick={()=>{
        window.location.reload()
      }}> <img src={addbtn} alt='' className='addbtn' /> NewChat</button>
       <div className='uppersidebottom'>
      <button className='query' onClick={handaleQuery} value={"What is Web Developement "}><img src={messageicon}alt=''  />What is Web Developement </button> 
      <button className='query' onClick={handaleQuery}  value={"What Is Api"}><img src={messageicon} alt=''  />What Is Api </button> 
      <button className='query' onClick={handaleQuery}  value={"How Api Works"}><img src={messageicon} alt=''  />How Api Works </button> 
      <button className='query' onClick={handaleQuery}  value={"How To Use Api"}><img src={messageicon} alt=''  />How To Use Api</button>  
 
      




       </div>
      
      </div>


     </div>
     <div className='loweside'></div>
       <div className='listitems'>
          <img src={home} alt='' className='listitemsimg' /> Home
       </div>
       <div className='listitems'>
          <img src={saved} alt='' className='listitemsimg' /> Saved
       </div>
       <div className='listitems'>
          <img src={rocket} alt='' className='listitemsimg' /> Upgrade
       </div>


     </div>
     <div className='main'>
      <div className='chats'>
  {messages.map((message,i)=>
     <div key={i} className={message.isBot?'chat bot ':'chat'}>
     <img className='chatimg' src={message.isBot?gptimglogo:usericon} alt='' /> <p className='txt'>

      {message.text}
     </p>
   
   </div>
  )}
  <div  ref={msgEnd} />
  
  
      </div>
      <div className='chatfooter'>
        <div className='inp'>

          <input  type='text'  placeholder='Send A Message  ' value={input} onKeyDown={handaleEnter}    onChange={(e)=>{setInput(e.target.value)}}/>
          <button className='send' onClick={handaldesend}> <img src={sendbtn} alt='sendbtn' /></button>
        </div>
        <p>MyGPT can make mistakes. Consider checking important information.</p>
      </div>
     </div>
    </div>
  );
}

export default App;


