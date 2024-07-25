import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function MainCard({image1 , image2 , image3 , image4 ,price1,price2,price3,price4, category}) {
  return (
    <Link to={`product-pages?category=${category}`}  className="grid grid-cols-2 max-w-[100%]  border-[1px] border-[#64566611] px-[2rem] py-[1rem] rounded-[2rem] gap-[1rem] min-h-[50rem] shadow-inner items-start hover:cursor-pointer bg-gray-100" state={category}>
        <h1 className="text-[2rem] font-[500] col-start-1 col-end-3 max-h-[3rem] mx-[2rem]">{category}</h1>
        <div id="card-1" className="p-[1rem] rounded-[1rem] border-[.1px] border-[#00000012]">
            <img className="max-w-[100%]" src={image1} alt="" />
            <p className=" text-center text-[1.6rem] font-[500]" id="price">${price1}</p>
        </div>
        <div id="card-2" className="p-[1rem] rounded-[1rem] border-[.1px] border-[#00000012]">
            <img className="max-w-[100%]" src={image2} alt="" />
            <p className=" text-center text-[1.6rem] font-[500]" id="price">${price2}</p>
        </div>
        <div id="card-3" className="p-[1rem] rounded-[1rem] border-[.1px] border-[#00000012]">
            <img className="max-w-[100%]" src={image3} alt="" />
           <p className=" text-center text-[1.6rem] font-[500]" id="price">${price3}</p>
        </div>
        <div id="card-4" className="p-[1rem] rounded-[1rem] border-[.1px] border-[#00000012]">
            <img className="max-w-[100%]" src={image4} alt="" />
            { price4 && <p className=" text-center text-[1.6rem] font-[500]" id="price">${price4}</p>}
        </div>
       
    </Link>
  )
}

export default MainCard
