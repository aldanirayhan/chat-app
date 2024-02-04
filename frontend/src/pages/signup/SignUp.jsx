import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox.jsx"
import { useState } from "react"
import useSignup from "../../hooks/useSignup.js";
const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
          <span className="text-yellow-300"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
          <label className="label p-2">
              <span className="text-base label-text text-gray-100">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-bordered input-warning w-full max-w-xs" 
            value={inputs.fullName} 
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})} />
          </div>
          
          <div>
          <label className="label p-2">
              <span className="text-base label-text text-gray-100">Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="input input-bordered input-warning w-full max-w-xs" 
            value={inputs.username} 
            onChange={(e) => setInputs({...inputs, username: e.target.value})} />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-100">Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter password" 
              className="input input-bordered input-warning w-full max-w-xs" 
              value={inputs.password} 
              onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
          </div>
          
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-100">Confirm Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Confirm password" 
              className="input input-bordered input-warning w-full max-w-xs" 
              value={inputs.confirmPassword} 
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} />
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />


          <div>
            <button className="w-full max-w-xs btn btn-sm mt-6 text-white hover:bg-yellow-500 hover:text-black" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>

          <Link to={"/login"} className="text-sm hover:underline hover:text-yellow-400 mt-2 inline-block">Already have an account?</Link>
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