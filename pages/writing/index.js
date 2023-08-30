import classes from './writing.module.css'
import AboutMe from '../../components/about_me'
import HeroBanner from '../../components/hero_banner'


const WritingPage = () => {

return (
    <>
    <div className={classes.container}>
    <h1> Writing </h1>
    </div>
    <AboutMe /> 
    <HeroBanner />
    </>
)

}

export default WritingPage