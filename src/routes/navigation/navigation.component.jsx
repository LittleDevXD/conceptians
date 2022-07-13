import { useContext, Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/user-context/user-context.component';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.css';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const handleSignOut = async () => {
        const res = await signOutUser();
        setCurrentUser(res);
    }

    return (
        <Fragment>
            <div className='nav-container'>
                <div className='flex container'>
                    <div className="left-navbar">
                        <Link to='/'>
                            <img className="logo" src="/assets/images/ConceptiansLogo.png" alt="Conceptians LOGO"/>
                        </Link>
                    </div>
                    <div className="right-navbar flex">
                        <Link className="nav-link" to='/'>Community</Link>
                        <Link className="nav-link" to='/'>Blog</Link>
                        <Link className="nav-link" to='/'>Resources</Link>
                        {
                            currentUser ? (
                                <Link className="nav-link" onClick={handleSignOut} to='/auth'>Sign Out</Link>
                            ) : (
                                <Link className="nav-link" to='/auth'>Sign In</Link>
                            )
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
        
    )
}

export default Navigation;