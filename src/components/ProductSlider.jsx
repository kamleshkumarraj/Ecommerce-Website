import Slider from "./BannerSlider/Slider"


// eslint-disable-next-line react/prop-types
function ProductSlider({allCategory,label , allCategoryProduct , setImg , categoryType}) {
  return (
    <div id="sports-sports" className="my-[2rem]">
        <h1 className="text-[2.6rem] font-[600] py-[1rem] md:px-[6rem] ">{label}</h1>
        {
            // eslint-disable-next-line react/prop-types
            allCategory.map((category , idx) => {
                if(category == categoryType){
                    return <div className="max-w-[138rem] mx-auto" key={idx}>
                        <Slider key={idx} 
                        data = {allCategoryProduct[category]}
                        setImg = {setImg}
                        category = {category}
                        
                        />
                    </div>
                }
            })
        }
        </div> 
  )
}

export default ProductSlider
