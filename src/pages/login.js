import React,{useState,useEffect} from 'react'
import login from '../images/login-image.jpg'
import logo from '../images/logoWath.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
   const [nin, setNin] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
   const handleSubmit = async (e) => {
    axios.post("http://localhost:7778/auth/users/authenticate",{
      username:nin,
      password: password,
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem("token",response.data)
      if (response.status === 200){
        navigate('/dashboard')
      }
      
    })
    .catch(error => {
      console.error(error);
    });
  }
  return (
    <div className=' bg-bgLight h-screen'>
      <div className='flex flex-row w-4/6 my-auto  mx-auto'>
        <div className='flex w-1/2 mt-20  md:visible '>
          <img src={login} className=' rounded-l-md shadow-md' />
        </div>
        <div className='flex flex-col w-1/2 mt-20 bg-white rounded-r-md gap-12'>
          <div className='flex flex-col w-full h-36 gap-10'>
            <div className=' flex justify-end m-8'>
              <select className="select flex w-1/6 max-w-xs font-bold">
                <option>English</option>
                <option >Arabic</option>
                <option>Français</option>
              </select>
            </div>
            <img src={logo} className=' mx-auto w-5/12 ' />
          </div>
          <div className='w-3/4 mx-auto'>
              <div className="mb-4">
                <label for="number" className="block mb-2 text-sm font-medium text-gray-700 ">Your National Identification Number </label>
                <input type="text" id="number" onChange={(e)=>{setNin(e.target.value)}} className="bg-gray-50 border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-blue-500 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="9300374698" required />
              </div>
              <div className="mb-4">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-700 ">Your password</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} id="password" className="bg-gray-50 border border-gray-300 text-gray-900  focus:outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
              </div>
              <div className='flex flex-row w-full  justify-between p-1 mb-6 '>
              <button type="submit" className="text-white bg-blue-700 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" onClick={handleSubmit}>Submit</button>
              <a href="#" class="text-sm font-medium text-ver hover:underline my-auto">Forgot password?</a>
              </div>
              <div className='flex w-9/12 mx-auto'>
              <span className='text-sm text-center text-gray-700'>If it is your first use on WATHAEQUI, the password is your birth certificate number, you can change it if you want to .</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
