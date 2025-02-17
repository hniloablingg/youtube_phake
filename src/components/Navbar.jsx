import React, { useEffect, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { TiMicrophone } from "react-icons/ti";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { Avatar } from '@mui/material';
import { IoSearch } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { useNavigate } from 'react-router-dom';
import { useUtils } from '../context/UtilsContext';

function Navbar() {

  const [searchQuery,setSearchQuery]=useState("")
  const {setIsSideBar, isSidebar, mobileShow, setMobileShow} = useUtils();
  const [searchbar, setSearchbar] = useState(false);

  useEffect(() => {
    console.log({isSidebar, mobileShow});
  }, [isSidebar]);

  const navigate=useNavigate()

  const searchQueryHandler=(event)=>{
    if((event?.key==="Enter" || event==="searchButton") && searchQuery?.length>0){
      navigate(`/search/${searchQuery}`)
      setSearchQuery("")
    }
  }

  const handleSidebar = () => {
    if(window.innerWidth <= 1280){
      setIsSideBar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    
    setIsSideBar(!isSidebar);
  }

  if(searchbar){
    return (
      <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center">
        <IoArrowBack 
          className="cursor-pointer"
          size={20}
          onClick={() => setSearchbar(!searchbar)}
        />
        <div className="flex flex-grow items-center mx-4">
          <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
              <input type="text" placeholder="Search" className="outline-none"
                onChange={(e)=>setSearchQuery(e.target.value)}  
                onKeyUp={searchQueryHandler}
                value={searchQuery}
              />
          </div>
          <button className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
            onClick={()=>searchQueryHandler("searchButton")}
          >
              <IoSearchOutline size={"24px"}/>

          </button>
          </div>
          <TiMicrophone 
            size={"42px"} 
            className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
          />
        {/* </div> */}
      </div>
    )
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className=" flex items-center space-x-4">
        <FiMenu 
          className="text-xl cursor-pointer"
          onClick={handleSidebar}
        />
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>
      <div className="hidden md:flex w-[45%] items-center">
        <div className="w-[100%] px-4 py-2 border-[1px] border-gray-400 rounded-l-full">
            <input type="text" placeholder="Search" className="outline-none"
              onChange={(e)=>setSearchQuery(e.target.value)}  
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
        </div>
        <button className="px-4 py-2 border-[1px] border-gray-400 bg-gray-100 rounded-r-full"
          onClick={()=>searchQueryHandler("searchButton")}
        >
            <IoSearchOutline size={"24px"}/>
        </button>
        <TiMicrophone size={"42px"} className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"/>
      </div>
      <div className="flex space-x-5 items-center">
        <IoSearch 
          className="text-2xl cursor-pointer xl:hidden" 
          onClick={() => setSearchbar(!searchbar)}
        />
        <RiVideoAddLine className="text-2xl"/>
        <FiBell className="text-2xl"/>
        <Avatar src={profile} size="32" round="true"/>
      </div>
    </div>
  )
}

export default Navbar
