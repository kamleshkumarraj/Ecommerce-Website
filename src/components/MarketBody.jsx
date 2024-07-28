//imported areas
import MarketCart from "./MarketCart"
import SideMenu from "./SideMenu"
import { useContext} from "react"
import { AppConotext } from "../context/filterDataProvider"
import { RxCross1 } from "react-icons/rx"
import { FaBars } from "react-icons/fa6"
import  {MarketFilter }  from '../context/MarketFilter'
import { Bounce, ToastContainer } from "react-toastify"



function MarketBody() {
  const {categoriesList , allCategoriesProducts , priceRange , filteredData , ratingRange , filteredRatingData } = useContext(MarketFilter)
  const {toggleBar , setToggleBar} = useContext(AppConotext)

   
    
  return (
    <>
    <div id='product-header' className="flex sticky top-[12.4rem] xl:top-[16.9%] z-[10] bg-[#20201f] text-white">
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
    
    <div id="market" className="relative flex overflow-hidden bg-sky-100 py-[2rem]">
        
        <div id="product-nav" className={toggleBar == true ? 'w-[0%] left-[-40%] transition-all  absolute   bg-[white]  md:top-[25%]  max-h-[100vh]' : 'min-w-[20%] bg-[#20201fb4] z-[100000]  xl:top-[25.6%] left-0 lg:h-[75vh] block h-[81vh] overflow-auto px-[2rem] transition-all fixed text-white top-[18.8rem]'}>
          <SideMenu />
        </div> 
            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2rem] w-[100%] px-[4rem]">
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
 
    
    </>
  )
}

export default MarketBody
