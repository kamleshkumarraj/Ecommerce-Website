import { MdHomeFilled , 
         MdOutlineVideoLibrary ,
         MdKeyboardArrowRight ,
         MdOutlineWatchLater ,
        } from "react-icons/md";        
import { FiVideo } from "react-icons/fi";
import { HiOutlineScissors } from "react-icons/hi2";
import { AiOutlineLike } from "react-icons/ai";
import { CiVideoOn } from "react-icons/ci";
import { CgPlayList } from "react-icons/cg";
import { BsFire } from "react-icons/bs";
import { RiShoppingBag4Line  } from "react-icons/ri";
import MenuIcon from "./MenuIcon";

function SideMenu() {
    
  return (
    <div className="w-[100%] max-h-[90vh]  overflow-auto flex flex-col text-[1.5rem] font-[400] ">
        <MenuIcon 
            id='home'
            label="Home">
            <MdHomeFilled size={'2.4rem'}/>        
        </MenuIcon>

        <MenuIcon 
            id='short'
            label="Shorts">
            <FiVideo size={'2.4rem'}/>     
        </MenuIcon>
        
        <MenuIcon 
            id='short'
            label="Shorts">
            <MdOutlineVideoLibrary size={'2.4rem'}/>     
        </MenuIcon>
        <hr className="my-[1rem]"/>

        <div id="you" className="flex gap-[1rem] p-[.8rem] hover:bg-[#0000000a]  hover:rounded-[1.2rem] items-center">
            <p className="text-[1.6rem] font-[500]">You</p>
            <MdKeyboardArrowRight size={'2.8rem'} style={{position : 'relative', top :'.15rem'}} />
        </div>

        <MenuIcon 
            id='playlists'
            label="Playlists">
            <CgPlayList  size={'2.4rem'}/>        
        </MenuIcon>

        <MenuIcon 
            id='videos'
            label="Your videos">
            <CiVideoOn size={'2.4rem'}/>        
        </MenuIcon>

        <MenuIcon 
            id='watchLater'
            label="Watch later">
            <MdOutlineWatchLater size={'2.4rem'}/>        
        </MenuIcon>

        <MenuIcon 
            id='liked video'
            label="Liked video">
            <AiOutlineLike size={'2.4rem'}/>        
        </MenuIcon>

        <MenuIcon 
            id='clips'
            label="Clips">
            <HiOutlineScissors size={'2.4rem'}/>        
        </MenuIcon>
        <hr className="my-[1rem]"/>

        <h1 className="p-[1rem] font-[500] text-[1.8rem]">Explore</h1>
        <MenuIcon 
            id='trending'
            label="Trending">
            <BsFire size={'2.4rem'}/>        
        </MenuIcon>

        <MenuIcon 
            id='shopping'
            label="Shopping">
            <RiShoppingBag4Line size={'2.4rem'}/>        
        </MenuIcon>

       
        <hr className="my-[1rem]"/>

        


    </div>
  )
}

export default SideMenu
