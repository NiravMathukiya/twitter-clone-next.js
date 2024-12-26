import Image from "next/image";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import FeedCard from "@/components/feeds";
import { SlOptions } from "react-icons/sl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Twittersidebar {
  title: string;
  icon: React.ReactNode;
}



const sidebarMenuItems: Twittersidebar[] = [
  { title: "Home", icon: <BiHomeCircle /> },
  { title: "Explore", icon: <BiHash /> },
  { title: "Notification", icon: <BsBell /> },
  { title: "Message", icon: <BsEnvelope /> },
  { title: "Bookmarks", icon: <BsBookmark /> },
  { title: "Profile", icon: <BiUser /> },
  { title: "More Options", icon: <SlOptions /> },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3 justify-start  pt-8 px-4">
          <div className="text-4xl cursor-pointer transition-all h-fit hover:bg-gray-800 p-2 rounded-full w-fit pr-4 ">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-semibold">
            <ul>
              {sidebarMenuItems.map((item, index) => (
                <li
                  className="flex justify-start items-center gap-4 w-fit   hover:bg-gray-800 rounded-full px-4 py-2 cursor-pointer mt-2"
                  key={index}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-blue-500 font-semibold  text-center w-full  text-lg p-4 rounded-full">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] border border-gray-600">
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
