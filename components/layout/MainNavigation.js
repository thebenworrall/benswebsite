import Link from 'next/link'
import { useState} from 'react'


import classes from './MainNavigation.module.css'



    // const hamburger = document.querySelector(".hamburger")
    // const navMenu = document.querySelector(".navmenu")

    // hamburger.addEventListener("click", () => {
    // navMenu.classList.toggle("active")
// })



const MainNavigation = () => {

const [isActive, setActive] = useState(false)

 const hamburgerHandler = () => {
            setActive(!isActive)
            console.log(isActive)
        }
    
       
return (
    
        <nav className={classes.navbar}>
            <img className={classes.navlogo} src="/images/ben_logo.png" alt="Ben Worrall Logo" width="50" height="50"></img>
            <ul className={isActive ?`${classes.navmenu} ${classes.active}` : classes.navmenu}>
                <li className={classes.navlink}><Link href="/"> Home </Link> </li>
                <li className={classes.navlink}><Link href="/writing"> Writing </Link></li>
                <li className={classes.navlink}><Link href="/development" > Development </Link></li>
                <li className={classes.navlink}><Link href="/newsletter"> Newsletter </Link></li>
            </ul>
            <div onClick={hamburgerHandler} className={classes.hamburger}>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
            </div>
        </nav>
    
)
}

export default MainNavigation
