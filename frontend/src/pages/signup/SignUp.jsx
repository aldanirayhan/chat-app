import GenderCheckbox from "./GenderCheckbox.jsx"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
          <span className="text-yellow-300"> ChatApp</span>
        </h1>

        <form >
          <div>
          <label className="label p-2">
              <span className="text-base label-text text-gray-100">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" class="input input-bordered input-warning w-full max-w-xs" />
          </div>
          
          <div>
          <label className="label p-2">
              <span className="text-base label-text text-gray-100">Username</span>
            </label>
            <input type="text" placeholder="johndoe" class="input input-bordered input-warning w-full max-w-xs" />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-100">Password</span>
            </label>
            <input type="password" placeholder="Enter password" class="input input-bordered input-warning w-full max-w-xs"/>
          </div>
          
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-100">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm password" class="input input-bordered input-warning w-full max-w-xs"/>
          </div>

          <GenderCheckbox />


          <div>
            <button className="w-full max-w-xs btn btn-sm mt-6 text-white hover:bg-yellow-500 hover:text-black">Sign Up</button>
          </div>

          <a href="#" className="text-sm hover:underline hover:text-yellow-400 mt-2 inline-block">Already have an account?</a>
        </form>
      </div>
    </div>
  )
}

export default SignUp

// STARTER CODE FOR THE SIGNUP FILE
// import GenderCheckbox from "./GenderCheckbox.jsx"

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
//           <span className="text-yellow-300"> ChatApp</span>
//         </h1>

//         <form >
//           <div>
//           <label className="label p-2">
//               <span className="text-base label-text text-gray-100">Full Name</span>
//             </label>
//             <input type="text" placeholder="John Doe" class="input input-bordered input-warning w-full max-w-xs" />
//           </div>
          
//           <div>
//           <label className="label p-2">
//               <span className="text-base label-text text-gray-100">Username</span>
//             </label>
//             <input type="text" placeholder="johndoe" class="input input-bordered input-warning w-full max-w-xs" />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text text-gray-100">Password</span>
//             </label>
//             <input type="password" placeholder="Enter password" class="input input-bordered input-warning w-full max-w-xs"/>
//           </div>
          
//           <div>
//             <label className="label">
//               <span className="text-base label-text text-gray-100">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Confirm password" class="input input-bordered input-warning w-full max-w-xs"/>
//           </div>

//           <GenderCheckbox />


//           <div>
//             <button className="w-full max-w-xs btn btn-sm mt-6 text-white hover:bg-yellow-500 hover:text-black">Sign Up</button>
//           </div>

//           <a href="#" className="text-sm hover:underline hover:text-yellow-400 mt-2 inline-block">Already have an account?</a>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp