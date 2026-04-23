import SearchAppBar from "../Navbar"
import TabbarTop from "../Home/Tabbartop"
import '../../App.css'
import Photo1 from "../Home/Photo1"
import SelectSmall from "../Home/Selected"
import BasicGridmap from "../Home/productmap"
import { useState } from "react"

function Home() {

  const [filters, setFilters] = useState({
      type: '',
      price: '',
      review: '',
      brand: '',
      connectivity: ''
    });

  return <>
      <TabbarTop></TabbarTop>
      <SearchAppBar></SearchAppBar>
      <Photo1></Photo1>
      <SelectSmall filters={filters} setFilters={setFilters}></SelectSmall>
      <BasicGridmap filters={filters}></BasicGridmap>
  </>
}

export default Home