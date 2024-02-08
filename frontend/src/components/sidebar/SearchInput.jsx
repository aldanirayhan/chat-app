import { useState } from "react";
import { ImSearch } from "react-icons/im";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState();
  const {setSelectedConversation} = useConversation();
  const {conversations}= useGetConversations();;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3) {
      return toast.error('Search tearm must be at least 3 characters long');
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error("No such user found!");
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" placeholder="Search.." className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-circle bg-yellow-500 text-white" type="submit">
        <ImSearch className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default SearchInput

// STARTED CODE SNIPPET
// import { ImSearch } from "react-icons/im";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//         <input type="text" placeholder="Search.." className="input input-bordered rounded-full" />
//         <button className="btn btn-circle bg-yellow-500 text-white" type="submit">
//         <ImSearch className="w-6 h-6 outline-none"/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput