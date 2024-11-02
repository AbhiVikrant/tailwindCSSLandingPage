import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-amber-50 min-h-screen px-8 py-6 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:justify-between">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
