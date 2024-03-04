import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";
function App() {
  return (
    <div>
      <Navbar />
      <section className="card-section">
        {data.map((item) => {
          return <Card key={item.title} {...item} />;
        })}
        ;
      </section>
    </div>
  );
}

export default App;
