import { useState } from "react";
import "./App.css";
import InputUsername from "./components/InputUsername/InputUsername";
import InfoTable from "./components/InfoTable/InfoTable";
import GitHubButton from "react-github-btn";
function App() {
  const [onlyFollower, setOnlyFollower] = useState<any[]>([]);
  const [onlyFollowing, setOnlyFollowing] = useState<any>([]);

  return (
    <div className="App">
      <div className="star">
        <GitHubButton
          href="https://github.com/adarsh-sgh/oneWayFollowersReact"
          data-color-scheme="no-preference: dark_dimmed; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star buttons/github-buttons on GitHub"
        >
          Star
        </GitHubButton>
      </div>

      <InputUsername
        setOnlyFollower={setOnlyFollower}
        setOnlyFollowing={setOnlyFollowing}
      />
      <InfoTable onlyFollower={onlyFollower} onlyFollowing={onlyFollowing} />
    </div>
  );
}

export default App;
