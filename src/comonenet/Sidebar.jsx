import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdHistory, MdOutlineSubscriptions, MdWatchLater } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { GiLinkedRings } from "react-icons/gi";
import { BiVideo } from "react-icons/bi";
import { useUtils } from "../context/UtilsContext";
function Sidebar() {
  const { isSidebar, mobileShow, setMobileShow } = useUtils();
const sidebarItems = [
    {
      groupName: "Home",
      groupItems: [
        {
          id: 1,
          name: "Home",
          icon: <GoHome />,
        },
        {
          id: 2,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 3,
          name: "Subscriptions",
          icon: <MdOutlineSubscriptions />,
        },
      ],
    },
    {
      groupName: "You",
      groupItems: [
        {
          id: 1,
          name: "Your Channel",
          icon: <GoHome />,
        },
        {
          id: 2,
          name: "History",
          icon: < MdHistory />,
        },
        {
          id: 3,
          name: "Playlists",
          icon: <MdOutlineSubscriptions />,
        },
        {
          id: 4,
          name: "Your Videos",
          icon: <BiVideo />,
        },
        {
          id: 5,
          name: "Watch later",
          icon: <MdWatchLater />,
        },
        {
          id: 6,
          name: "Liked videos",
          icon: <GiLinkedRings />,
        },
      ],
    },
    {
      groupName: "Explore",
      groupItems: [
        {
          id: 1,
          name: "Trending",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <HiOutlineShoppingBag />,
        },
        {
          id: 3,
          name: "Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateLight />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <SiYoutubegaming />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <SiStylelint />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <PiLightbulbLight />,
        },
        {
          id: 11,
          name: "Padcasts",
          icon: <MdPodcasts />,
        },
      ],
    },
    {
      groupName: "More From Youtube",
      groupItems: [
        {
          id: 1,
          name: "Youtube Premium",
          icon: <FaYoutube className="text-red-600" />,
        },
        {
          id: 2,
          name: "Youtube Studio",
          icon: <SiYoutubestudio className="text-red-600"  />,
        },
        {
          id: 3,
          name: "Youtube Music",
          icon: <SiYoutubemusic className="text-red-600"  />,
        },
        {
          id: 4,
          name: "Youtube Kids",
          icon: <SiYoutubekids className="text-red-600"  />,
        },
      ],
    },
  ];
  const Modeloverlay = () => {
    return (
      <div
        className="flex  fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
        onClick={() => setMobileShow(!mobileShow)}
      ></div>
    );
  };
  return (
    <>
      <div className={`${mobileShow
          ? "fixed top-0 bottom-0  left-0 transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%]"
          : "hidden h-[calc(100vh-6.625rem)] w-[35%]"
        } xl:static xl:block px-2  lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin"`}>

        {/* Home Section */}
        <div className=" space-y-3 items-center">
          {
            sidebarItems.map((group) => {
              return (

                <div className="mb-5 ">
                  <h1 className="font-bold">{group.groupName}</h1>
                  {group.groupItems.map((item) => (

                    <div
                      key={item.id}
                      className="flex itens-center  space-x-6 hover:bg-gray-200 duration-300 rounded-xl p-1 my-3">
                      <div className="text-2xl border-none cursor-pointer">{item.icon} </div>
                      <span className="text-gray-800 text-sm cursor-pointer">{item.name}</span>
                    </div>
                  ))
                  }
                </div>
              );
            })
          }
        </div>
        <br />
        <hr />
        <br />
        <span className="text-xs font-semibold text-[#606060]">About Press Copyright <br />Contact us Creators <br />Advertise Developers<br /><br />
          Terms Privacy Policy & Safety <br />How YouTube works <br />Test new features</span>
        <br /><br />
        <p className="text-xs  text-[#606060] mt-1">© 2024 Google LLC</p>
      </div>
      {mobileShow ? <Modeloverlay/> :null}
    </>
  );
}
export default Sidebar;
