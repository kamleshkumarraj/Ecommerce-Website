import { Link } from 'react-router-dom';
import headerlogo from '../assets/Logo/headerlogo.png'
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { getCartLen } from '../store/Slices/AddCart';
import { useContext, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { filterData } from '../context/filterDataProvider';

function Header() {
  const cartlen = useSelector(getCartLen)
  const [searchFocus , setSearchFocus]  = useState(false);
  const [borderStyle , setBorderStyle] = useState(["w-[90%] h-[4rem] flex overflow-hidden "])
  const [,setQuery] = useContext(filterData)
  return (
    
    <div className="sticky top-12 max-w-[138rem] mx-auto my-0 flex px-[2rem] py-[1.5rem] items-center justify-between bg-[#F9F6F0]">
        <div id="logo" className='w-[15rem] hover:cursor-pointer'>
            <img className='w-[100%]' src={headerlogo} alt="Header Logo" />
        </div>
        
        <div id="search-input" className="w-[60rem] border-[1px] border-[#00000054] rounded-[5rem] flex items-center bg-[#00000009] overflow-hidden ">
            <div id="search-box" className={borderStyle.join(' ')} >
                {
                  searchFocus==true ?   <div id="icon-box" className="w-[8%] bg-[white] grid content-center">
                    <CiSearch size={'2.4rem'} style={{margin : '0 auto'}}/>
                </div> : ''
                }
                <div id="input-box" className="w-[100%] h-[100%] " >
                    <input type="text" className="w-[100%] h-[100%] focus:outline-none border-r-[1px] border-r-[#00000048] text-[1.9rem] px-[1rem] " placeholder="Search product by title ...." onFocus={() =>{
                      setSearchFocus(true);
                      setBorderStyle([...borderStyle , "border-[2px] border-[#8DB0DB] rounded-l-[4rem]"])
                    }} onBlur={() =>{
                      setSearchFocus(false)
                      setBorderStyle(["w-[90%] h-[4rem] flex overflow-hidden "])
                    }} onInput={(e) => {
                      
                      setQuery(e.target.value)
                    }}/>
                </div>
            </div>
            
            <div id="search-bar" className="w-[10%] flex justify-center hover:cursor-pointer">
              <CiSearch size={'2.4rem'} style={{margin : '0 auto'}}/>
            </div>
            
        </div>

        <div id="menu" className='font-[500] text-[#000000ac] text-[1.6rem] flex gap-[1.5rem] hover:cursor-pointer'>
            <Link>Home</Link>
            <Link>Details </Link>
            <Link to={'/wishlist-pages'}>Wishlistpage</Link>
            <Link to={'/cart-pages'} >Cartpage</Link>
            <FaCartPlus size={'3rem'}  />
            <Link className='relative top-[-1.2rem] left-[-1.5rem]' id="cartCount">{cartlen}</Link>
        </div>

    </div>
  )
}

export default Header
