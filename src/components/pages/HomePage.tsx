import HomeGrid from '../organisms/HomeSectionProducts'
import Slider from '../molecules/Slider'
import Navbar from '../organisms/Navbar'
import CategoryHomeSection from '../molecules/CategoryHomeSection'

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