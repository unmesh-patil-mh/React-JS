import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    {/* Yaha jo jo likha hoga vo dikhega
    Yaha par dirf ek he div return kar sakte hai main ek he div ho sakta hai
    */}
    <Navbar/>
    {/* <main>
      This is the Main Content Present
    </main> */}
    <div className="multicard">
      {/* Tile and desc are our props in React js which are define in Card.jsx */}
    <Cards title="Card 1" desc="Hii card 1"/>
    <Cards title="Card 2" desc="Hii card 2"/>
    <Cards title="Card 3" desc="Hii card 3"/>
    <Cards title="Card 4" desc="Hii card 4"/>
    <Footer/>
    </div> 
    </>
  )
}

export default App
