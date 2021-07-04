import React from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Header from './components/Header'
import DetailPage from './pages/DetailPage'
import HospitalPage from './pages/hospital/HospitalPage'
import TourPage from './pages/TourPage'
import ProductPage from './pages/ProductPage'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      
      <Router>
        <Header/>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/tour">
            <TourPage />
          </Route>

          <Route path="/product">
            <ProductPage />
          </Route>

          <Route path="/detail/:id/title/:title">
            <DetailPage />
          </Route>

          <Route path="/hospital">
            <HospitalPage />
          </Route>
        </Switch>

        <Footer />

      </Router>

    </QueryClientProvider>
  )
}


export default App;
