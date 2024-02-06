import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  }

  return (
    <div className="flex flex.col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
          <span className="text-yellow-300"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-100">Username</span>
            </label>
            <input type="text" placeholder="Enter username" class="input input-bordered input-warning w-full max-w-xs"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-100">Password</span>
            </label>
            <input type="password" placeholder="Enter password" class="input input-bordered input-warning w-full max-w-xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="w-full max-w-xs btn btn-sm mt-6 text-white hover:bg-yellow-500 hover:text-black"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
              </button>
          </div>

          <Link to={"/signup"} className="text-sm hover:underline hover:text-yellow-400 mt-2 inline-block">Don't have an account?</Link>
        </form>
      </div>
    </div>
  )
}

export default Login

// STARTER CODE FOR THE LOGIN FILE
// const Login = () => {
//   return (
//     <div className="flex flex.col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">Login
//           <span className="text-yellow-300"> ChatApp</span>
//         </h1>

//         <form action="">
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-100">Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" class="input input-bordered input-warning w-full max-w-xs" />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text text-gray-100">Password</span>
//             </label>
//             <input type="password" placeholder="Enter password" class="input input-bordered input-warning w-full max-w-xs"/>
//           </div>
//           <a href="#" className="text-sm hover:underline hover:text-yellow-400 mt-2 inline-block">Don't have an account?</a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 text-white hover:bg-yellow-500 hover:text-black">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login

