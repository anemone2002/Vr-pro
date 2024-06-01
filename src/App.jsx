import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import OrderPage from './components/OrderPage'
import NewsFeed from './components/NewsFeed'
import ContactInformation from './components/ContactInformation'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
            <Header />
            <Home/>
            <ProductPage/>
            <OrderPage/>
            <NewsFeed/>
            <ContactInformation/>
            <Footer/>
            
       

    </>
  )
}

export default App
