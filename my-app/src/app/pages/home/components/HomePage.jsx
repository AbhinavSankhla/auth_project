"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

function HomePage() {
  const router = useRouter();

  // const ifuserLoggedIn = () =>{
  //     const ifuser = Cookies.get('user-data');
  //     // console.log(ifadmin);

  //     if(!ifuser){
  //         router.push('/');
  //     }
  // }

  // useEffect(()=>{ifuserLoggedIn()},[])

  
  const handleLogout = () =>{
    Cookies.remove('user-data');
    router.push('/pages/login');
};

  return (
    <div>
      {/* Logout button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <h1 className="text-[80px] text-center font-semibold mt-52">Welcome!</h1>
    </div>
  );
}

export default HomePage;


// import { useNavigate } from 'react-router-dom';

// export default function Header() {

//     const nav = useNavigate();

//     const ifadminLoggedIn = () =>{
//         const ifadmin = Cookies.get('admin');
//         // console.log(ifadmin);

//         if(!ifadmin){
//             nav('/')
//         }
//     }

//     useEffect(()=>{ifadminLoggedIn()},[])

    
//     const logOutAdmin = () =>{
//         Cookies.remove('admin');
//         nav('/');
//     };