import React from 'react';
import styles from './Nav.module.css';


function Nav() {
    return (
        <div>
            <header>
            <h2>Shoeper</h2>
                <nav>
                    <ul className={styles.navlinks}>
                    <li>Home</li>
                    <li>Launch</li>
                    </ul>
                </nav>
                <button>Contact</button>
            </header>
        </div>
    )
}

export default Nav;
