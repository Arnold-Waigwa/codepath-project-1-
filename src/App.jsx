import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  const name = "Mayweather Boxing + Fitness ";
  return (
    <div>
      <Header />
      <Hero clubName={name} />
    </div>
  );
};

export default App;
