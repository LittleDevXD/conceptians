import { Fragment } from 'react';

import { Link, Outlet } from 'react-router-dom';

import './navigation.styles.css';

const Navigation = () => {
    return (
        <Fragment>
            <div className='nav-container'>
                <div class="container">
                    <div class="flex navbar">
                        <div class="left navbar">
                            <Link to='/'>
                                <img class="logo" src="/assets/images/ConceptiansLogo.png" alt="Conceptians LOGO"/>
                            </Link>
                        </div>
                        <div class="right navbar">
                            <ul class="flex">
                                <li><a href="">Community</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Resources</a></li>
                                <li><a href=""><Link to='/auth'>Sign In</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
        
    )
}

export default Navigation;