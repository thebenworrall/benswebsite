import Link from 'next/link'
import { useState} from 'react'


import classes from './MainNavigation.module.css'


const MainNavigation = () => {

const [isActive, setActive] = useState(false)

 const hamburgerHandler = () => {
            setActive(!isActive)
            console.log(isActive)
        }
    
       
return (
    
        <nav className={classes.navbar}>
            <div className={classes.navlogo}>
            <img src="/images/ben_logo_small.png" alt="Ben Worrall Logo" width="55" height="55"></img>
            </div>
            <div className={classes.navmenu_container}>
            <ul className={isActive ?`${classes.navmenu} ${classes.active}` : classes.navmenu}>
                <li className={classes.navlink}><Link href="/"> Home </Link> </li>
                <li className={classes.navlink}><Link href="#about-section"> About </Link> </li>
                {/* <li className={classes.navlink}><Link href="/writing"> Writing </Link></li>
                <li className={classes.navlink}><Link href="/development" > Development </Link></li> */}
                <li className={classes.navlink}><Link href="/newsletter"> Newsletter </Link></li>
            </ul>
            </div>
            <div onClick={hamburgerHandler} className={classes.hamburger}>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
            </div>
        </nav>
    
)
}

export default MainNavigation
