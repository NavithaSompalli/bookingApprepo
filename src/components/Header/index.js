import { Link } from 'react-router-dom';
import './index.css';
import { useState } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <>
            <nav className='nav-bar-container'>
                <Link to='/' className="nav-link"><button>Home</button></Link>
                <Link to='cart' className="nav-link"><button type="button">Cart</button></Link>
                <Link to='checkout' className="nav-link"><button type="button">Checkout</button></Link>
            </nav>
            <nav className={isMenuOpen ? 'nav-bool-view' : 'nav-mobile-view'}>
                {isMenuOpen ?  <button type="button" onClick={toggleMenu} className='close-button'><IoClose  className='icon'/></button>:<button type="button" onClick={toggleMenu} ><IoMenuSharp className='icon'/></button>}
                {isMenuOpen && (
                    <ul className='mobile-menu'>
                        <li><Link to='/' className="nav-link"><button type="button">Home</button></Link></li>
                        <li><Link to='cart' className="nav-link"><button type="button">Cart</button></Link></li>
                        <li><Link to='checkout' className="nav-link"><button type="button">Checkout</button></Link></li>
                    </ul>
                )}
            </nav>
        </>
    );
}

export default Header;
