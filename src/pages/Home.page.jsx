
import HeroSection from '../components/HeroSection'
import HomeContext from "../context/home.context"
import MainBody from '../components/MainBody'

function Home() {
  return (
    <HomeContext>
    
      <div id="hero-section" className='lg:h-[85vh] px-[2rem] pb-[4rem]'>
        <HeroSection />
      </div>
      <div id="div" className='bg-blue-50 px-[2rem]'>
      <div id="product-body" className='max-w-[142rem] mx-auto '>
          <h1 className='text-[2.4rem] font-[600] px-[2rem] py-[2rem]'>All categories products</h1>
          <div id="products-body" className="flex x relative w-[100%]" >
          <div id="products-section" className=''>
            <MainBody />
          </div>
          </div>
          </div>
      </div>
      
    </HomeContext>
         

    
  )
}

export default Home
