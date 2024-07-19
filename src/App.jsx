import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import apiCall from "./apicall/apiCall"
import FilterWrapper from "./context/filterDataProvider"
import Footer from "./components/Footer"


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiCall())
    
  },[])
  return (
    <>
        <FilterWrapper>
          <Navbar />
          <Outlet />
          <Footer />
        </FilterWrapper>
    </>
  )
}

export default App
