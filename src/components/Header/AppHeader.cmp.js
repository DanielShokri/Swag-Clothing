import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import CartDropdown from '../CartDropdown/CartDropdown.cmp'
import Logo from '../../assets/logo.png';
import './appheader.styles.scss';

const AppHeader = ({ currentUser }) => {
    const [burgerActive, setBurgerActive] = useState(false);
    const [userName, setUserName] = useState(null);


    const handleBurgerClick = () => {
        if (!burgerActive) setBurgerActive(true);
        else setBurgerActive(false);
    }

    useEffect(() => {
        if (currentUser) {
            const displayName = currentUser.displayName;
            if (!/^\s*$/.test(displayName)) return setUserName(displayName);

            const newName = displayName.replace(/ .*/, '');
            setUserName(newName);
        }
    }, [currentUser])

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
                                <CartDropdown /> 
                                {
                                    currentUser ?
                                        <div style={{ marginBottom: 0 }} className="button is-light" onClick={() => auth.signOut()}>SIGN OUT, {userName}</div> :
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

const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser
})


export default connect(mapStateToProps)(AppHeader);