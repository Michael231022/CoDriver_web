import React from "react";
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';  
import { Link } from 'react-router-dom';

function Services() {
    return (
        <div className="main_content">
            {/* Top NavBar */}
            <Navbar />

            <div>
                <h1>Our Services</h1>
            </div>

            {/* Bottom Footer */}
            <Footer/>
        </div>
    );
}

export default Services;