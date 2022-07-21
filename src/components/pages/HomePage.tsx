import HomeGrid from '../organisms/HomeSectionProducts'
import Slider from '../molecules/Slider'
import Navbar from '../organisms/Navbar'
import CategoryHomeSection from '../molecules/CategoryHomeSection'
import { login } from '../../hooks/postHooks';

const Home = () => {


    return (
        <>
            <Navbar/>
            <Slider/>
            <CategoryHomeSection/>
            <HomeGrid/>
        </>
    )
}

export default Home