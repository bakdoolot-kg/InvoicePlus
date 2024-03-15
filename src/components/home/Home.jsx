import "@/App.css"
import "./home.css"

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container grid">
                <div className="home__content grid home__box">

                    <div className="home__first-block">
                        <div className="inline-block md:flex flex-col space-y-4 md:ml-10">
                            <h2 className="text-lg md:text-3xl md:ml-10">Year-end tax planning guide 23/24</h2>
                            <p className="inline-block text-sm font-medium md:text-lg md:ml-10">Get ahead with your planning, read our Year-end tax
                                planning guide 2023/24, out now.</p>
                            <div className="inline-block">
                                <button
                                    className="inline-block bg-amber-400 hover:bg-amber-600 text-sm text-white font-bold py-2 px-4 rounded md:text-lg md:ml-10">
                                    Узнать больше
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="home__second-block"></div>
                </div>
            </div>
        </section>
    );
};

export default Home;