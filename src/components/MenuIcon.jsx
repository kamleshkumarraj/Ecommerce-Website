

function MenuIcon({children , id , label}) {
  return (
    <div id={id} className="font-[500] hover:cursor-pointer flex p-[1rem] gap-[2rem] hover:bg-[#0000000a]  hover:rounded-[1.2rem]">
        {children}
        <p>{label}</p>
    </div>
  )
}

export default MenuIcon
