import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { auth } from '../../firebase/firebase.utils';
import './appheader.styles.scss';

const AppHeader = ({ currUser }) => {
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

                    <div role="button" onClick={handleBurgerClick} className={`${burgerActive ? 'is-active' : ''} navbar-burger burger`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div id="navbarBasicExample" className={`${burgerActive ? 'is-active' : ''} navbar-menu`}>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons" style={{ justifyContent: 'center' }}>
                                <Link className="navbar-item" to="/shop">SHOP</Link>
                                <Link className="navbar-item" to="/shop">CONTACT</Link>
                                <Link className="navbar-item" to="/shop">CART</Link>
                                {
                                    currUser ?
                                        <div style={{ marginBottom: 0 }} className="button is-light" onClick={() => auth.signOut()}>SIGN OUT</div> :
                                        <Link className="button is-light" to="/signin" style={{ marginBottom: 0 }}> SIGN IN</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default AppHeader;