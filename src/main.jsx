import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from './pages/Home.page.jsx';
import Error from './pages/Error.page.jsx';
import ProductDetails from './pages/ProductDetails.page.jsx';
import CartList from './pages/CartList.page.jsx';
import Wishlist from './pages/Wishlist.page.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js'
import './style.css'

const router = createBrowserRouter([{
  path : '/',
  element : <App />,
  errorElement : <Error />,
  children : [
    {
      path : '/',
      element : <Home />,
    },
   {
      path : '/product-details',
      element : <ProductDetails />
   },
   {
      path : '/cart-pages',
      element : <CartList />
   },
   {
      path : '/wishlist-pages',
      element : <Wishlist />
   }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
