import { Link, useLocation } from 'react-router-dom';
import headerlogo from '../assets/Logo/headerlogo.png'
import { FaBars, FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { getCartLen } from '../store/Slices/AddCart';
import { useContext, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { AppConotext } from '../context/filterDataProvider';
import { getWishlistLen } from '../store/Slices/WishlistItem';

function Header() {
  const cartlen = useSelector(getCartLen)
  const wishlistLen = useSelector(getWishlistLen);
  const [searchFocus , setSearchFocus]  = useState(false);
  const [borderStyle , setBorderStyle] = useState(["w-[90%] h-[4rem] flex overflow-hidden "])
  const {setQuery , baseUrl , setCartQuery , setWishlistQuery , inputValue , setInputValue } = useContext(AppConotext)
  const inputFiled = useRef();
  const location = useLocation()
  return (
    <div className="sticky top-12 max-w-[138rem] mx-auto my-0 flex px-[4rem] py-[1.5rem] items-center justify-between bg-[#c9bfa9]">
        <div id="logo" className='w-[15rem] hover:cursor-pointer'>
            <img className='w-[100%]' src={headerlogo} alt="Header Logo" />
        </div>
      {  
        location.pathname == '/market-place' || location.pathname== '/cart-pages' || location.pathname== '/wishlist-pages'?
        <div id="search-input" className="w-[60rem] border-[1px] border-[#00000054] rounded-[5rem] flex items-center bg-[#00000009] overflow-hidden ">
            <div id="search-box" className={borderStyle.join(' ')} >
                {
                  searchFocus==true ?   <div id="icon-box" className="w-[8%] bg-[white] grid content-center">
                    <CiSearch size={'2.4rem'} style={{margin : '0 auto'}}/>
                </div> : ''
                }
                <div id="input-box" className="w-[100%] h-[100%] "  ref={inputFiled}>
                    
                    <input type="text" value={inputValue} className="w-[100%] h-[100%] focus:outline-none border-r-[1px] border-r-[#00000048] text-[1.9rem] px-[1rem] " placeholder="Search product by title ...." onFocus={() =>{
                      setSearchFocus(true);
                      setBorderStyle([...borderStyle , "border-[2px] border-[#8DB0DB] rounded-l-[4rem]"])
                    }} onBlur={() =>{
                      setSearchFocus(false)
                      setBorderStyle(["w-[90%] h-[4rem] flex overflow-hidden "])
                    }} onInput={(e) => {
                        setInputValue(e.target.value)
                          if(baseUrl == 'http://localhost:5173/')
                              {
                              setQuery(e.target.value)}
                          else if(baseUrl== 'http://localhost:5173/cart-pages'){
                              setCartQuery(e.target.value)
                          }
                          else if(baseUrl == 'http://localhost:5173/wishlist-pages'){
                            setWishlistQuery(e.target.value);
                          }
                    }}/>
                </div>
            </div>
            
            <div id="search-bar" className="w-[10%] flex justify-center hover:cursor-pointer">
              <CiSearch size={'2.4rem'} style={{margin : '0 auto'}}/>
            </div>
            
        </div> : ''}

        <div id="menu" className='font-[500] text-[#000000ac] text-[1.6rem]  gap-[2.5rem] hover:cursor-pointer hidden md:flex md:visible'>
            <Link to={'/'} >Home</Link>
            <Link to={'/market-place'}>Marketplace </Link>
            <Link to={'/wishlist-pages'} className='flex' onClick={() => 
              {
                setInputValue('')
                setQuery('')
                setCartQuery('')
                setWishlistQuery('')
              }
          }>
                  <span>Wishlistpage</span>
                  <div id="wishlist" className="relative"> 
                  {
                   wishlistLen == 0 ?  <FaRegHeart size={'2.4rem'} /> : <FaHeart size={'2.4rem'} style={{color : 'red'}}/>
                  }
                  <p className="absolute top-[-40%] left-10 text-[1.8rem]">{wishlistLen}</p> 
                  
                  </div> 
            </Link> 
            <Link to={'/cart-pages'} className='flex' onClick={() => 
              {
                setQuery('')
                setCartQuery('')
                setWishlistQuery('')
                setInputValue('')
              }
              }>
                <span>Cartpage</span>
                <div><FaCartPlus size={'3rem'}  /></div>
            </Link>
            <Link className='relative top-[-1.2rem] left-[-2.2rem]' id="cartCount">{cartlen}</Link>
        </div>

        <div id="menu-bar" className='md:hidden'>
          <FaBars size={'2.4rem'}/>
        </div>

    </div>
  )
}

export default Header
