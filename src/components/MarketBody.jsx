
import MarketCart from "./MarketCart"
import SideMenu from "./SideMenu"
import { useContext} from "react"
import { AppConotext } from "../context/filterDataProvider"
import { RxCross1 } from "react-icons/rx"
import { FaBars } from "react-icons/fa6"
import  {MarketFilter }  from '../context/MarketFilter'


function MarketBody() {
  const {categoriesList , allCategoriesProducts , priceRange , filteredData , ratingRange , filteredRatingData } = useContext(MarketFilter)
  const {toggleBar , setToggleBar} = useContext(AppConotext)
  console.log(ratingRange)

   
    
  return (
    <>
    <div id='product-header' className="flex sticky top-[17%] z-[100000] bg-[white]">
    <div className="my-[2rem] mx-[4rem] hover:cursor-pointer">
    {
      toggleBar == false ? <RxCross1 size={'2.4rem'} onClick={() => {
        setToggleBar(!toggleBar)
      }}/> : <FaBars size={'2.4rem'} onClick={() =>{
        setToggleBar(!toggleBar)
      }}/>

    }
    </div>
    <h1 className="mx-auto font-[600] text-[3.4rem] text-center ">Buy now</h1>
    </div>
    <div id="market" className="flex bg-sky-100 ">
        
        <div id="product-nav" className={toggleBar == true ? 'w-[0%] left-[-40%] transition-all  bg-[white] sticky top-[25%]  max-h-[90vh]' : 'min-w-[20%] bg-[white] sticky top-[25%] left-0 max-h-[90vh] px-[2rem] transition-all'}>
        <SideMenu />
        </div>
            <div id="body" className="px-[4rem] py-[2rem]">
                <div className=" grid grid-cols-4 gap-[2rem]">
                {
                    
                    categoriesList.map((category) => {
                        if(allCategoriesProducts[category]?.length > 0){ 
                          
                            let items = priceRange.length > 0 ? (ratingRange.length > 0 ? filteredRatingData[category] : filteredData[category] ) :
                            ratingRange.length > 0 ? filteredRatingData[category] : allCategoriesProducts[category] 
                            
                            return items.length != 0 ? items?.map((item , idx) => {
                                return <MarketCart 
                                id={item.id}
                                key = {idx}
                                category={category}
                                price={item.price}
                                title={item.title}
                                image={item?.images[0]}
                                product={item}
                                rating={item.rating}
                                wishlistStatus={item.wishlistStatus}
                                cartlistStatus={item.cartStatus}
                                />
                            }) :''
                            
                        }
                        
                    })
                }
                
                 </div>
               
             </div>
    </div>
    
    </>
  )
}

export default MarketBody
