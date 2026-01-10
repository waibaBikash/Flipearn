import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import MyListing from './pages/MyListing'
import ListingDetails from './pages/ListingDetails'
import ManageListing from './pages/ManageListing'
import Massages from './pages/Massages'
import MyOrder from './pages/MyOrder'
import Loading from './pages/Loading'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/marketplace' element={<Marketplace/>}/>
         <Route path='/mylisting' element={<MyListing/>}/>
         <Route path='/listing/:listingId' element={<ListingDetails/>}/>
         <Route path='/create-listing' element={<ManageListing/>}/>
         <Route path='/edit-listing/:id' element={<ManageListing/>}/>
         <Route path='/massages' element={<Massages/>}/>
         <Route path='/my-order' element={<MyOrder/>}/>
         <Route path='/loading' element={<Loading/>}/>
      </Routes>
    </div>
  )
}

export default App