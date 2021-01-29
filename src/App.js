import "./App.css";
import { Sidebar } from "./Sidebar/Sidebar";
import { Stories } from "./StoryFeed/Stories";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="app-content">
        <Stories />
      </div>
    </div>
  );
};

export default App;
