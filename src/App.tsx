import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Test from "./components/Test/Test";
import Button from "./components/Button/button";
import InputUsername from "./components/InputUsername/InputUsername";
import InfoTable from "./components/InfoTable/InfoTable";

function App() {
  const [onlyFollower, setOnlyFollower] = useState<any[]>([]);
  const [onlyFollowing, setOnlyFollowing] = useState<any>([]);

  return (
    <div className="App">
      <InputUsername
        setOnlyFollower={setOnlyFollower}
        setOnlyFollowing={setOnlyFollowing}
      />
      <InfoTable onlyFollower={onlyFollower} onlyFollowing={onlyFollowing} />
    </div>
  );
}

export default App;
