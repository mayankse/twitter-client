import Image from "next/image";
import { BsTwitter,BsBell, BsEnvelope, BsBookmark } from "react-icons/bs";

import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";



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
    title:"Profile",
    icon:<BiUser/>
  }
]
export default function Home() {
  return (
    <div >
   <div className="grid grid-cols-12 h-screen w-screen px-56">
    <div className= "col-span-3  border ml-28 pt-1">
      <div className="text-4xl h-fit w-fit hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all">
      <BsTwitter/>
      </div>
      <div className="mt-4 text-2xl  pr-4">
        <ul>
        {sideBarMenuItems.map((item)=>(
           <li className="flex justify-start w-fit items-center gap-4 hover:bg-gray-600 mt-2 rounded-full cursor-pointer px-5 py-2" key={item.title}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
            </li>))}
        </ul>
        <div className="mt-5 px-3">
        <button className="bg-[#1d9bf0] font-semibold text-lg p-4 rounded-full w-full">Tweet</button>
        </div>
      </div>
    </div>
    <div className="col-span-5 border-r-[1px] border-l-[1px] border border-gray-600">
      <FeedCard/>
      <FeedCard/><FeedCard/><FeedCard/><FeedCard/>
    </div>
    <div className="col-span-3"></div>
   </div>
   </div>
  );
}
