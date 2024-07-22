// eslint-disable-next-line react/prop-types
function Button({label ,bgColor , color}) {
  return (
    <div id='button' className={`px-[2rem] grid place-content-center py-[1rem] rounded-[1rem] text-[1.8rem] font-[600] hover:cursor-pointer w-[22rem] ${bgColor} ${color}`} >
      <p>{label}</p>
    </div>
  )
}

export default Button
