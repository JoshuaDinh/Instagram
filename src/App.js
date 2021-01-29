import "./App.css";
import { Sidebar } from "./Sidebar/Sidebar";
import { StoryFeed } from "./StoryFeed/Storyfeed";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="app-content">
        <StoryFeed />
      </div>
    </div>
  );
};

export default App;
