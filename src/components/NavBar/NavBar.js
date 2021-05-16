import React, { useEffect, useState } from 'react'
import './NavBar.css'

function NavBar() {
    const [show, setShow] = useState(false);

    const transitionNavBar = () => {
        if (window.pageYOffset > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])

    return (
        <div className={`navBar ${show && 'navBar_black'}`}>
            <div className="nav_content">
                <img className="img_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <img className="img_avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />
            </div>
        </div>
    )
}

export default NavBar
