import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {

const carddata = data.map((i)=>{
  return <Card
  key={i.id}
  i={i}/>
})


  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <section
      className="card--list">{carddata}</section>
      
    </div>
  );
}


