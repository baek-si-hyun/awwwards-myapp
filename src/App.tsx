import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Airbnb from "./pages/airbnb/Airbnb";
import Coin from "./pages/coin/Coin";
import Contact from "./pages/contact/Contact";
import Faqs from "./pages/faqs/Faqs";
import Main from "./pages/main/Main";
import Kanban from "./pages/kanban/Kanban";
import Myapp from "./pages/myapp/Myapp";
import Netflix from "./pages/netflix/Netflix";
import ScrollToTop from "./ScrollToTop";

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SctollBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgb(255, 0, 0);
  transform-origin: 0%;
  z-index: 999999999;
`;

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <Wapper>
      <SctollBar style={{ scaleX: scrollYProgress }} />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/awwwards-myapp" element={<Main />} />
          <Route path="/Netflix" element={<Netflix />} />
          <Route path="/Kanban" element={<Kanban />} />
          <Route path="/Coin" element={<Coin />} />
          <Route path="/Myapp" element={<Myapp />} />
          <Route path="/Airbnb" element={<Airbnb />} />
          <Route path="/FAQs" element={<Faqs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Nav />
    </Wapper>
  );
}

export default App;
