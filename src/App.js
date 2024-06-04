import { Footer } from "./copmonents/footer";
import { HomePage } from "./copmonents/homePage";
import { Navbar } from "./copmonents/navbar";
import { News } from "./copmonents/news";
import { Slider } from "./copmonents/slider";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <HomePage />
        <News />
        <Slider />
      </div>
      <Footer />
    </>
  );
}

export default App;
