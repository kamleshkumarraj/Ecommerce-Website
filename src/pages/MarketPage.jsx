import MarketBody from "../components/MarketBody"
import FilterProvider from "../context/MarketFilter"


function MarketPage() {
  return (
    <FilterProvider>
        <div id="market-body" className="w-[100%] relative ">
          <MarketBody />
        </div>
    </FilterProvider>
  )
}

export default MarketPage
