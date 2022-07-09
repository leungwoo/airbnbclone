import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {

const carddata = data.map((i)=>{
  return <Card
  img={i.coverImg}
  title={i.title}
  rating={i.stats.rating}
  reviewCount={i.stats.reviewCount}
  price={i.price}
  location={i.location} />
})


  return (
    <div className="App">
      <Navbar/>
      <Hero />
      {carddata}
    </div>
  );
}


