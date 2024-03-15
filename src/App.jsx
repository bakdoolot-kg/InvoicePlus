import './App.css'
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";

const App = () => {

    return (
        <>
            <Header />

            <main className="main">
                <Home />
                {/*<About />*/}
            </main>
        </>
    )
}

export default App
