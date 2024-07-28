// import logo from '../../assets/Logo/amazon-logo-trans.png';
import logo from '../assets/Logo/headerlogo.png'
export default function Footer() {
  return (
    <div id="footer" className="w-[100%]">
        <div id="footer-head" className="bg-[#485769] py-[1.5rem]">
            <p className="text-center text-[white] text-[1.35rem] font-[600]">Back to Top</p>
        </div>
        <div id="footer-middle" className="bg-[#232F3E] p-[2rem]">
            <div id="footer-container" className=" text-[1.4rem] text-[#BABABF]  max-w-[100rem] py-[5rem] md:mx-auto md:justify-between font-[500]  gap-[3rem] items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center mx-[4rem]">
                <div id="get-know-more" className="flex flex-col gap-[.5rem]">
                    <h1 className="text-[white] text-[1.6rem] font-[600]">Get To Know Us</h1>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                </div>
                <div id="contact-us" className="flex flex-col gap-[.5rem]">
                    <h1 className="text-[white] text-[1.6rem] font-[600]">Contact With Us</h1>  
                    <p>Facebook</p>
                    <p>Twitter</p> 
                    <p>Instagram</p>             
                </div>
                <div id="make-money" className="flex flex-col gap-[.5rem]">
                    <h1 className="text-[white] text-[1.6rem] font-[600]">Make Money With Us</h1>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an Affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                </div>
                <div id="help-you" className="flex flex-col gap-[.5rem]">
                    <h1 className="text-[white] text-[1.6rem] font-[600]">Let Us Help you</h1> 
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                    <p>Help</p>              
                </div>
            </div>
            
            <p className="border-t-[#2E3948] border-t-[3px]"></p>
            <div id="footer-logo">
                <div id="f-logo" className='max-w-[16rem] mx-auto py-[1.5rem]'>
                    <img className='w-[100%]' src={logo} alt="amazon-logo" />                
                </div>
                

            </div>
        </div>
    </div>
  )
}
