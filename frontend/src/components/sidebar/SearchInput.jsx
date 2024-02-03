import { ImSearch } from "react-icons/im";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search.." className="input input-bordered rounded-full" />
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