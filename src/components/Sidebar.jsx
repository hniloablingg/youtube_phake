import React from 'react';

//icon home
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";

//icon you
import { LuHistory } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { PiMonitorPlay } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

//icon explore
import { HiFire } from "react-icons/hi";
import { HiMusicalNote } from "react-icons/hi2";
import { PiGameControllerBold } from "react-icons/pi";
import { PiNewspaperClipping } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";

//icon sections
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";

//icon setting
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";

import { useUtils } from '../context/UtilsContext';

function Sidebar () {

    const {isSidebar, mobileShow, setMobileShow} = useUtils();
    const sidebarItems = [
        {
            groupName:"Home",
            groupItems: [
                {
                    id:1,
                    name:"Home",
                    icon:<IoHomeOutline/>
                },
                {
                    id:2,
                    name:"Shorts",
                    icon:<SiYoutubeshorts/>
                },
                {
                    id:3,
                    name:"Subcriptions",
                    icon:<MdOutlineSubscriptions/>
                }
            ],
        },
        {
            groupName:"You",
            groupItems: [
                {
                    id:1,
                    name:"History",
                    icon:<LuHistory/>
                },
                {
                    id:2,
                    name:"Playlists",
                    icon:<CgPlayList/>
                },
                {
                    id:3,
                    name:"Your Video",
                    icon:<PiMonitorPlay/>
                },
                {
                    id:4,
                    name:"Watch Later",
                    icon:<MdOutlineWatchLater/>
                },
                {
                    id:5,
                    name:"Liked Videos",
                    icon:<BiLike />
                },
            ],
        },
        {
            groupName:"Explore",
            groupItems: [
                {
                    id:1,
                    name:"Trending",
                    icon:<HiFire/>
                },
                {
                    id:2,
                    name:"Music",
                    icon:<HiMusicalNote/>
                },
                {
                    id:3,
                    name:"Game",
                    icon:<PiGameControllerBold/>
                },
                {
                    id:4,
                    name:"News",
                    icon:<PiNewspaperClipping/>
                },
                {
                    id:5,
                    name:"Sport",
                    icon:<GiTrophyCup />
                },
            ],
        },
        {
            groupName:"More From Youtube",
            groupItems: [
                {
                    id:1,
                    name:"Youtube Premium",
                    icon:<FaYoutube/>
                },
                {
                    id:2,
                    name:"Youtube Studio",
                    icon:<SiYoutubestudio/>
                },
                {
                    id:3,
                    name:"Youtube Music",
                    icon:<SiYoutubemusic/>
                },
                {
                    id:4,
                    name:"Youtube Kids",
                    icon:<SiYoutubekids/>
                },
            ],
        },
        {
            groupName:"Setting",
            groupItems: [
                {
                    id:1,
                    name:"Setting",
                    icon:<IoSettingsOutline/>
                },
                {
                    id:2,
                    name:"Report History",
                    icon:<FaRegFlag/>
                },
                {
                    id:3,
                    name:"Help",
                    icon:<IoMdHelpCircleOutline/>
                },
                {
                    id:4,
                    name:"Send Feedback",
                    icon:<MdOutlineFeedback/>
                },
            ],
        }
    ]

    const ModelOverlay = () => {
        return (
            <div className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30" onClick={() => setMobileShow(!mobileShow)}>
            </div>
        )
    }
  return (
    <>
    <div className={`${
        mobileShow 
            ? "fixed top-0 bottom-0 left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]" 
            : "hidden h-[calc(100vh-6.625rem)] w-[35%]"
        } xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidde scrollbar-thin`}>
        {/* Home */}
        <div className="space-y-3 items-center">
            {
                sidebarItems.map((group)=>{
                    return(
                        <div className="mb-5">
                            <h1 className="font-bold">{group.groupName}</h1>
                            {group.groupItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 my-3"
                                >
                                    <div className="text-xm cursor-pointer">{item.icon}</div>
                                    <span className="text-xm cursor-pointer">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    );
                })
            }
        </div>
        <br/>
        <hr/>
        <br/>

        <span className="text-xs text-gray-600 font-semibold">
            About Press Copyright <br /> Contact us Creators <br /> Advertise
            Developers <br />
            <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works{" "}
             <br /> Test new features
        </span>
        <br />
        <p className="text-xs text-gray-500 mt-3">© 2024 Learn Coding</p>  
    </div>

    {mobileShow ? <ModelOverlay/> : null}
    </>
  );
}

export default Sidebar