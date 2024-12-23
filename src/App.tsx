import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Projects } from "./layout/sections/projects/Projects";
import { About } from "./layout/sections/about/About";
import { Contact } from "./layout/sections/contact/Contact";
// import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Body>
        <Header />
        <Main />
        <Skills />
        <Projects />
        <About />
        <Contact />
        {/* <Footer /> */}
      </Body>
    </div>
  );
}

export default App;

const Body = styled.div``;
