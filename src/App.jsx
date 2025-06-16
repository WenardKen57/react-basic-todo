import LeftPanel from "./components/LeftPanel";
import Navigation from "./components/Navigation";
import RightPanel from "./components/RightPanel";

import "./style/App.css";

function App() {
  return (
    <div className="container">
      <Navigation></Navigation>
      <LeftPanel></LeftPanel>
      <RightPanel></RightPanel>
    </div>
  );
}

export default App;
