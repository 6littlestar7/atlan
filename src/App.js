import "./App.css";
import TabBar from "./components/TabBar/TabBar";
import { SideBar } from "./components/SideBar/SideBar";
import { NavBar } from "./components/NavBar/NavBar";
import OutputDetails from "./components/Output/OutputDetails";
import { data1 } from "./dummyData";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {

  const { modal, toggleModalVal } = useContext(AppContext);

  return (
    <div className="App">
      <div className="main-outer">
        <SideBar />
        <div className="right-side">
          <NavBar />
          {modal === true ? (
            <>
              <div className="button" onClick={() => toggleModalVal(false)}>
                Back To Editor
              </div>
              <OutputDetails outputDetails={data1} />
            </>
          ) : (
            <TabBar />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
