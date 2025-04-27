import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'


const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to='/booking'><button aria-label='On Click'>Reserve Table</button></Link>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt=''></img>
                </div>
            </section>
        </header>
    )
}

export default Header