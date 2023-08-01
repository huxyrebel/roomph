//import "./App.css"
import Header from "./components/header/Header";
import Footer from"./components/footer/footer"
import Inspired from"./components/inspired/inspired"
import Destination from "./components/destinations/destination";

import Responsive from "./components/cities/cities";
import Hero from "./components/hero/hero";
import QuoteCarosuel from "./components/carousel_quote/surprise";
import Main from "./components/main/main";


function App() {
  return(
    <div>
 <Header/>
<Main/>
 <Hero/>
 <Responsive/>
<Destination/>
<QuoteCarosuel/>
 <Inspired/>
 <Footer/>
 </div>
     );
}

export default App;
