import React from 'react'
import PropTypes from 'prop-types'
import NavbarPublic from '../Components/NavbarPublic'
import Banner from '../Components/Banner'
import CityIndex from '../Components/CityIndex'
import Delivery from '../Components/Delivery'
import Footer from '../Components/Footer'
import Security from '../Components/Security'
const Home = props => {
    return (
        <div>
            <NavbarPublic />
            <Banner />
            <CityIndex />
            <Delivery />
            <Footer />
            <Security />
        </div>
    )
}

Home.propTypes = {

}

export default Home
