import HeroSection from '../components/HeroSection'
import ProductBody from "../components/ProductBody"
import HomeContext from "../context/home.context"
import Footer from '../components/Footer'



function Home() {
  return (
    <HomeContext>
      <div id="hero-section" className='h-[85vh]'>
        <HeroSection />
      </div>
      <div id="product-body">
        <ProductBody />
      </div>
      
    </HomeContext>
         

    
  )
}

export default Home
