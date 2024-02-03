const Conversation = () => {
  return <>
    <div className="flex gap-2 items-center hover:bg-yellow-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://i.pravatar.cc/150?u=1" alt="user avatar" />
            </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-300">John Doe</p>
                <span className="text-lg">🎸</span>
            </div>
        </div>
    </div>

    <div className="divider my-0 py-0 h-1"></div>
  </>;
};

export default Conversation

// STARTER CODE SNIPPET
// const Conversation = () => {
//     return <>
//       <div className="flex gap-2 items-center hover:bg-yellow-500 rounded p-2 py-1 cursor-pointer">
//           <div className="avatar online">
//               <div className="w-12 rounded-full">
//                   <img src="https://i.pravatar.cc/150?u=1" alt="user avatar" />
//               </div>
//           </div>
  
//           <div className="flex flex-col flex-1">
//               <div className="flex gap-3 justify-between">
//                   <p className="font-bold text-gray-300">John Doe</p>
//                   <span className="text-lg">🎸</span>
//               </div>
//           </div>
//       </div>
  
//       <div className="divider my-0 py-0 h-1"></div>
//     </>;
//   };
  
//   export default Conversation