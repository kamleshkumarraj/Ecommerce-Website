
import { CiFilter} from "react-icons/ci";

import MenuIcon from "./MenuIcon";
import { useContext, useEffect, useState } from "react";
import  {MarketFilter }  from '../context/MarketFilter'
import { AppConotext } from "../context/filterDataProvider";


function SideMenu() {
    const categories =
    ['laptops' ,
    'smartPhones',
    'tablets',
    'womenWatch',
    'womenShoes',
    'womensBags',
    'womensDresses',
    'womenJwellery',
    'mensShirts',
    'mensShoes',
    'mensWatches' ,
    'furniture',
    'groceries',
    'homeDecoration',
    'vechile',
    'moterCycles',
    'sunglasses',
    'mobileAccessories',
    'sportsAccessories',
    'tops']
    const priceList = ['Rs. 99 and below' , 'Rs. 100-199','Rs. 200-399','Rs. 400-699' , 'Rs. 700-999','Rs. 1000 and above']
    const ratingList = ['1 Rating and above' ,'2 Rating and above' ,'3 Rating and above' ,'4 Rating and above' ,'5 Rating']
    const [categoriesClick , setCategoriesClick] = useState(false);
    const [priceClick , setPriceClick] = useState(false);
    const [ratingClick , setRatingClick] = useState(false)
    const [checkMenu , setCheckMenu ] = useState([]);
    const [checkPrice , setCheckPrice] = useState([])
    const [checkRating , setCheckRating] = useState([])
    const {setCategoriesList , setPriceRange , setRatingRange } = useContext(MarketFilter)
    const {toggleBar , setToggleBar} = useContext(AppConotext)
    
    useEffect(( )=> {
        setCategoriesList(checkMenu.length >0 ? checkMenu : categories)
    //
     },[checkMenu])
    
    useEffect(( )=> {
        setPriceRange(checkPrice.length > 0 ? checkPrice : [])
    },[checkPrice])
    useEffect(( )=> {
        setRatingRange(checkRating.length > 0 ? checkRating : [])
    },[checkRating])
  return (
    <div className="w-[100%] max-h-[90vh]  flex flex-col text-[1.5rem] font-[400]">
        <MenuIcon
        id='category'
        label="Filter by categories"
        icon = <CiFilter size={'2.4rem'}/>  
        categoriesClick={categoriesClick}
        setCategoriesClick = {setCategoriesClick}
        >
            {
               categories.length > 0 ? categories.map((category) => {
                return <div key={category} className="flex checkbox-container gap-[.5rem] hover:cursor-pointer">
                <input onClick={(e) => {
                   if(e.target.checked) {setCheckMenu((prev) => [...prev , category])
                    }
                    else{
                        setCheckMenu((prev) => prev.filter((item) => item!=category))
                    }
                    
                    
                }} type="checkbox" id={category} className="checkbox-input hover:cursor-pointer"/>
                <label onClick={() =>{
                    setToggleBar(!toggleBar)
                }}  className="hover:cursor-pointer w-[100%]"  htmlFor={category} >{category}</label>
                 </div>
               }) : ''
            }
        </MenuIcon>

        <MenuIcon
        id='price'
        label="Filter by price"
        icon = <CiFilter size={'2.4rem'}/>  
        priceClick={priceClick}
        setPriceClick = {setPriceClick}
        >
            {
               priceList.length > 0 ? priceList.map((price) => {
                return <div key={price} className="flex checkbox-container gap-[.5rem] hover:cursor-pointer" >
                <input onClick={(e) => {
                    if(e.target.checked) {setCheckPrice((prev) => [...prev , price])
                    
                    }
                    else{
                        setCheckPrice((prev) => prev.filter((item) => item!=price))
                    }
                }} type="checkbox" id={price} className="checkbox-input hover:cursor-pointer"/>
                <label onClick={() =>{
                    setToggleBar(!toggleBar)
                }}  className="hover:cursor-pointer w-[100%]" htmlFor={price} >{price}</label>
                 </div>
               }) : ''
            }
        </MenuIcon>
        
        <MenuIcon
        id='rating'
        label="Filter by rating"
        icon = <CiFilter size={'2.4rem'}/>  
        ratingClick={ratingClick}
        setRatingClick = {setRatingClick}
        >
            {
               ratingList.length > 0 ? ratingList.map((rating) => {
                return <div key={rating} className="flex checkbox-container gap-[.5rem] hover:cursor-pointer" >
                <input onClick={(e) => {
                    if(e.target.checked) {setCheckRating(() => [rating])
                    }
                    
                }} type="radio" name="radio" radioGroup="rating" id={rating} className="checkbox-input hover:cursor-pointer"/>
                <label onClick={() =>{
                    setToggleBar(!toggleBar)
                }}  className="hover:cursor-pointer w-[100%]" htmlFor={rating} >{rating}</label>
                 </div>
               }) : ''
            }
        </MenuIcon>
        


    </div>
  )
}

export default SideMenu
