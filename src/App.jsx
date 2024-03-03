import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";
function App() {
  const card = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="card-section">{card}</section>
    </div>
  );
}

export default App;
