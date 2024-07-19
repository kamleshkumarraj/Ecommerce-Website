/* eslint-disable react/prop-types */
import { useContext } from 'react';
import  { homeContext } from '../context/home.context';


import Button from './Button'
import { TiStarFullOutline } from "react-icons/ti";

function HeroCard({id , thumbnail , price , title , description , rating, wishlist , setWishlist , cartlistStatus , setCartlistStatus , data}) {
    let constratinglist = [TiStarFullOutline, TiStarFullOutline, TiStarFullOutline , TiStarFullOutline, TiStarFullOutline];
    

  return (
    <div id="product" className="py-[1rem] shadow-lg px-[2rem] grid grid-cols-2 h-[40rem] bg-[#ffffffc3] overflow-hidden rounded-br-[5rem]" key={id}>
    <div id="img" className='w-[100%] grid place-content-center'>
        <img className="w-[100%]" src={thumbnail} alt="" /> 
    </div>
    <div id="details" className='p-[1rem]'>
        <p className="text-[2rem] front-[500] my-[1rem]">${price}</p>
        <h1 id="title" className="text-[2.4rem] font-[500]">{title} </h1>
        <p className="text-[1.3rem] font-[500] text-[#000002b0]" id="description">{description}</p>
        <div id="rating" className='flex gap-[1rem] my-[1.5rem]'>
            {
                constratinglist.length > 0 ? constratinglist.map((Star , idx) => {
                    if(rating > 0){
                        rating --;
                        return <TiStarFullOutline key={idx} size={'2.4rem'} style={{color : '#db7602'}} />;
                    }
                    else{
                        return <TiStarFullOutline key={idx} size={'2.4rem'} />
                    }
                }) : ''
            }
        </div>
        <div id="button " className='flex mb-[4rem] flex-col gap-[2rem] mt-[1.5rem]'>
            <Button 
                label={`${cartlistStatus == true ? 'Remove to Cartlist' : 'Add to Cartlist'}`}
                bgColor={'bg-[#12030012]'}
                cartlistStatus = {cartlistStatus}
                setCartlistStatus = {setCartlistStatus}
                cartData ={data}
            />
            
            <Button 
                label={`${wishlist == true ? 'Remove to Wishlst' : 'Add to Wishlist'}`}
                bgColor={'bg-[#12030012]'}
                wishlist = {wishlist}
                setWishlist = {setWishlist}
            />
        </div>
    </div>
    </div>
  )
}

export default HeroCard
