import Header from "./components/Header";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import WelcomeSection from "./components/WelcomeSection";
import AboutMe from "./components/AboutMe.jsx";
import Statistics from "./components/Statistics.jsx"

const App = () => (
    <div id="top">
            <div style={appStyles}>
                    <Header/>
                    <WelcomeSection/>
                    <AboutMe/>
                    <Projects/>
                    <Statistics/>
                    <ContactForm/>
            </div>
    </div>
);

const appStyles = {maxWidth: "1280px", margin: "0 auto", padding: "20px"};

export default App;
