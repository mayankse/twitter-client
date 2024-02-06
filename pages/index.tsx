import Image from "next/image";
import { BsTwitter,BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";
import {CredentialResponse, GoogleLogin} from "@react-oauth/google";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";
import { useCallback } from "react";



interface TwitterSidebarButton{
  title:string,
  icon:React.ReactNode
}
const sideBarMenuItems:TwitterSidebarButton[]=[
  {
    title:"Home",
    icon:<BiHomeCircle/>
  },
  {
    title:"Explore",
    icon: <BiHash/>
  },
  {
    title:"Notifications",
    icon:<BsBell/>
  },
  {
    title:"Messages",
    icon:<BsEnvelope/>
  },
  {
    title:"Bookmarks",
    icon:<BsBookmark/>
  },
  {
    title:"Twitter Blue",
    icon:<BiMoney/>
  },
  {
    title:"Profile",
    icon:<BiUser/>
  },
  {
    title:"More",
    icon:<SlOptions />
  }
]
export default function Home() {
    
  const handleLoginWithGoogle=useCallback((cred:CredentialResponse)=>{
    
  },[])

  return (
    <div >
   <div className="grid grid-cols-12 h-screen w-screen px-56">
    <div className= "col-span-3 ml-28 pt-1">
      <div className="text-2xl h-fit w-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all">
      <BsTwitter/>
      </div>
      <div className="mt-2 text-xl pr-4">
        <ul>
        {sideBarMenuItems.map((item)=>(
           <li className="flex justify-start w-fit items-center gap-4 hover:bg-gray-600 mt-2 rounded-full cursor-pointer px-3 py-3" key={item.title}>
            <span className="text-3xl">{item.icon}</span>
            <span>{item.title}</span>
            </li>))}
        </ul>
        <div className="mt-5 px-3">
        <button className="bg-[#1D9BF0] font-semibold text-lg py-2 px-4 rounded-full w-full">Tweet</button>
        </div>
      </div>
    </div>
    <div className="col-span-5 border-r-[1px] h-screen scroll-smooth  overflow-y-scroll border-l-[1px]  border-gray-600">
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
    </div>
    <div className="col-span-3 p-5">
      <div className="p-5 rounded-lg bg-slate-700  text-center">
        <h1 className="my-2">New to Twitter?</h1>
      <GoogleLogin onSuccess={(cred)=>console.log(cred)}/>
      </div>
     </div>  
     </div>
    </div>
  
  );
}
