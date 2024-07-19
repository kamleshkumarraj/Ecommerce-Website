import { LiaArrowRightSolid } from "react-icons/lia";
import { BsHandbagFill } from "react-icons/bs";
import Header from "./Header";

function Navbar() {
  return (
    <div id="nav-bar" className="w-[100%] bg-[#f9f6f0] sticky top-0 z-[1000000]" >
      <div className='bg-[#28574B] font-[600] text-[1.8rem] mx-auto p-[1.5rem] flex justify-center'>
          <a className="flex gap-[1rem] text-[white] items-center" href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>
              <BsHandbagFill size={'2rem'} style={{color : 'yellow'}}/>
              <p className='font-[500] text-[1.5rem]'>Get a 30% Discount on All Products! <span className="font-[700]"> Shop now</span></p>
              <LiaArrowRightSolid size={'2.4rem'}/>
          </a>
      </div>
      <Header />
    </div>
  )
}

export default Navbar
