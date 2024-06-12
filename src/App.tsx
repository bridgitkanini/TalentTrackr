import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Partnerships from "./components/Partnerships.tsx";
import Catalog from "./components/Catalog.tsx";
import Contacts from "./components/Contacts.tsx";

function App() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Partnerships />
        <Catalog />
        <Contacts />
      </div>
    </>
  );
}

export default App;
