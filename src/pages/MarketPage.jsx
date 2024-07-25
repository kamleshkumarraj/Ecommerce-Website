import MarketBody from "../components/MarketBody"
import FilterProvider from "../context/MarketFilter"


function MarketPage() {
  return (
    <FilterProvider>
        <MarketBody />
    </FilterProvider>
  )
}

export default MarketPage
