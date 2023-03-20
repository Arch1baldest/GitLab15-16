import './css/App.css';
import Head from "./components/head/head";
import Section from "./components/main/section/section";
import Article from "./components/main/article/article";
import Aside from "./components/main/aside/aside";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="content">
                    <div className="ghead">
                        <Head />
                    </div>
                    <div className="gsection">
                        <Section />
                    </div>
                    <div className="garticle">
                        <Article />
                    </div>
                    <div className="gaside">
                        <Aside />
                    </div>
                    <div className="gfooter">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
