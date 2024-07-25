import ProductsDetails from "../components/ProductsDetails"
import DetailsPage from "../context/DetailsPageContext"

function ProductDetails() {
  return (
    <DetailsPage>
      <div id="product-details">
        <ProductsDetails />
      </div>
    </DetailsPage>
  )
}

export default ProductDetails
