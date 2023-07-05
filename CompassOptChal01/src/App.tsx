import "./App.css";
import DetailsWeater from "./components/DetailsWeater";
import LocalNDay from "./components/LocalNDay";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import UseFetch from "./hooks/UseFetch";

const App = () => {
  return (
    <>
      <div>
        <UseFetch />
        <Navbar />
        <LocalNDay />
        <Weather />
        <DetailsWeater />
      </div>
    </>
  );
};

export default App;
