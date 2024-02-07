import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton.jsx";
import Message from "./Message.jsx"

const Messages = () => {
  const {messages, loading} = useGetMessages();
  const lastMessageRef = useRef();
  
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 50)
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
        {!loading && messages.length > 0 && messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message}/>
          </div>
        ))}

        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
       
        {!loading && messages.length === 0 && (
          <p className="text-center text-gray-300">Send a message to start the converstaion</p>
        )}
    </div>
  );
};

export default Messages;

// STARTER CODE SNIPPET
// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   )
// }

// export default Messages