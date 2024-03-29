import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = ()=>
{
return <div className=" border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
    <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
            <Image className=" rounded-full" src="https://avatars.githubusercontent.com/u/152095012?v=4" alt="user-image" width={50} height={50} />
        </div>
        <div className="col-span-11">
            <h5>Mayank Setiya</h5>

            <p>
                cfg  sdhgcfsdh bycsd bvysdcs vgcdyshcb ycfdsycd
                sdhdcvsdjhvc vsdhycgs vsdy yhsdg vsyc vsdhc vysddu b
                hgvdsgh bcvs yhc
            </p>
            <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
                <div >
                <BiMessageRounded/>
                </div>
                <div>
                    <FaRetweet/>
                </div>
                <div>
                    <AiOutlineHeart/>
                </div>
                <div>
                    <BiUpload/>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default FeedCard