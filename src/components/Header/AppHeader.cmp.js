import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './appheader.styles.scss';

const AppHeader = () => {
    const [burgerActive, setBurgerActive] = useState(false);

    const handleBurgerClick = () => {
        if (!burgerActive) setBurgerActive(true);
        else setBurgerActive(false);
        console.log('Setting burger')
    }

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="logo" to="/">
                        <img src={Logo} width="112" height="28" alt="logo" />
                    </Link>

                    <a role="button" onClick={handleBurgerClick} className={`${burgerActive ? 'is-active' : ''} navbar-burger burger`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={`${burgerActive ? 'is-active' : ''} navbar-menu`}>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/shop">
                            <div className="buttons">
                                SHOP
                    </div>
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/shop">
                            CONTACT
      </Link>
                    </div>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/shop">
                            CART
      </Link>
                    </div>


                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">

                                <Link to="/signin" className="button is-light">
                                    Log in
          </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AppHeader;