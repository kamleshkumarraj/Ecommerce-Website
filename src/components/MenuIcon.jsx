

// eslint-disable-next-line react/prop-types
function MenuIcon({children , id , label , icon , categoriesClick , setCategoriesClick , priceClick , setPriceClick , ratingClick , setRatingClick}) {
  
  return (
    <div id={id} className="" >
    <div id="heading" className="flex gap-[1rem] py-[1rem] hover:cursor-pointer" onClick={() => {
      if(id=='category') setCategoriesClick(!categoriesClick)
      if(id == 'price') setPriceClick(!priceClick)
        if(id=='rating') setRatingClick(!ratingClick)
    }}>
      {icon}
      <p className="text-[1.8rem] font-[600]">{label}</p>
    </div>
    <hr />
        <div id="children" className={priceClick == true || categoriesClick == true  || ratingClick==true ? 'font-[500] hover:cursor-pointer flex p-[1rem] gap-[1rem] hover:bg-[#0000000a]  hover:rounded-[1.2rem] flex-col' : 'max-h-[0px] overflow-hidden'}>
          {children}
        </div>
       
    </div>
  )
}

export default MenuIcon
