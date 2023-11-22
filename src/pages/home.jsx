import Header from "../components/header/Header"
import Banner from "../components/Banner/Banner"
import Gallery from "../components/Gallery/Gallery"
import Main from "../components/Main/Main"
import Footer from "../components/Footer/Footer"

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <Main>
                <Banner />
                <Gallery />
            </Main>
            <Footer />
        </div>
    )
}

    export default Home;