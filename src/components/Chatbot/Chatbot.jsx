import {useState} from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import chatbot from "../../images/chatrobot.gif";

const CHATBOT_THEME = {
  background: "#fff",
  fontFamily: "Roboto",
  headerBgColor: "hsl(34.25deg 100% 50.2%)",
  headerFontColor: "hsl(257.42deg 31.96% 19.02%)",
  headerFontSize: "15px",
  botBubbleColor: "hsl(260deg 14.59% 63.73%)",
  botFontColor: "hsl(257.42deg 31.96% 19.02%)",
  userBubbleColor: "",
  userFontColor: "hsl(257.42deg 31.96% 19.02%)",
  
};

const CustomChatBotIcon = () => {
  return <img src={chatbot} height={"150px"} alt="ChatBot" />;
};
const ChatBotHelper = () => {
  const [username , setusername] = useState('')
  const config ={
    width: "400px",
    height: "500px", 
  };
  const chatsteps = [
    {
      id:'q-firstname', 
      message:'What is your name ?', 
      trigger:'firstname',
    },
    {
      id:'firstname', 
      user:true, 
      validator: (value) => {
         if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
           {
            setusername(value)
             return true;
           }
         else
           {
             return'Please input alphabet characters only.';
           }
      },
      
      trigger:'q-email',
     },
   
    {
      id:'q-email', 
      message:` ${username} ! that is a nice name ! 
                                what is your email ? `, 
      trigger:'email',
    },
    {
      id:'email', 
      user:true,
      validator: (value) => {
         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
           {
             return true;
           }
         else
           {
             return'Please enter a valid email .';
           }
      },
      
      
      trigger:'framework'
    }
    ,
    {
      id:'framework', 
      message:'what is your favourite framework ? ', 
      trigger:'choices'
    },
    {
      id:'choices', 
      options:[
      {value:'r', label:'React', trigger:'React-message'},
      {value:'a', label:'Angular', trigger:'Angular-message'},
      {value:'v', label:'Vue', trigger:'Vue-message'},
      ] ,
     
    },

    {
      id:'React-message', 
      message:'why do you prefer reactjs ? ', 
      trigger:'why'
    },
    {
      id:'Angular-message', 
      message:'why do you prefer angularjs ? ', 
      trigger:'why'
    },
    {
      id:'Vue-message', 
      message:'why do you prefer vuejs ? ', 
      trigger:'why'
    },
    {
      id:'why', 
      user:true,
      trigger:'thank'
    },
    {
      id:'thank',
      message:'thank you ',
      // handler: () => {console.log('send email')},
      end:true
    }     
  ]
  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot
          steps={chatsteps}
          floating={true}
          title="Chat with us"
          floatingIcon={<CustomChatBotIcon />}
          // {...config}
        />
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;