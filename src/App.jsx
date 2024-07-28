import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import apiCall from "./apicall/apiCall";
import FilterWrapper from "./context/filterDataProvider";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  const productUrl = "https://fakestoreapi.com/products";
  const categoryUrl = "https://dummyjson.com/products/category/";
  const category = [
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiCall(productUrl));
    category.map((list) => {
      dispatch(apiCall(categoryUrl , list))
    })
  }, []);
  return (
    <>
    
      <FilterWrapper>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition: Bounce
          bodyClassName = 'toastBody'
        />
        <Navbar />
       
        <Outlet />
        <Footer />
       
      </FilterWrapper>
    </>
  );
}

export default App;
