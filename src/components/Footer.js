import React from 'react'
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''></img>
                    <p>We are a family owned mediterraneran resturant, focused on traditional recipes served with modern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Reservation</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Adress: <br /> 123 towncity, USA</li>
                        <li>Phone: <br /> ++ 0123 456 789</li>
                        <li>Email: <br /> little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer