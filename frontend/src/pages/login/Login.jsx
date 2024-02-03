const Login = () => {
  return (
    <div className="flex flex.col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
          <span className="text-yellow-300"> ChatApp</span>
        </h1>

        <form >
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-100">Username</span>
            </label>
            <input type="text" placeholder="Enter username" class="input input-bordered input-warning w-full max-w-xs" />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-100">Password</span>
            </label>
            <input type="password" placeholder="Enter password" class="input input-bordered input-warning w-full max-w-xs"/>
          </div>

          <div>
            <button className="w-full max-w-xs btn btn-sm mt-6 text-white hover:bg-yellow-500 hover:text-black">Login</button>
          </div>

          <a href="#" className="text-sm hover:underline hover:text-yellow-400 mt-2 inline-block">Don't have an account?</a>
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

