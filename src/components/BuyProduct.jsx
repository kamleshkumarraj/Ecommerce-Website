

function BuyProduct({ image, quantity, price, id, category, title, rating }) {
    
  return (
      <div id="cart" className="max-w-[34rem] flex flex-col p-[1rem] border-[#00000023] border-[.5px] rounded-[1rem] justify-evenly">
          <div id="img" className="grid place-content-center">
            <img className="w-[20rem] h-[100%]" src={image} alt="" />
          </div>
          <div id="details" className="text-[1.6rem] text-[#00000081] font-[600] flex flex-col gap-[1rem] justify-center">
              <p id="price">Price : ${price}</p>
              <p>Category : {category}</p>
              <p>Title : {title}</p>
              <p>Qty : {quantity}</p>
          </div>
      </div>


  )
}

export default BuyProduct
