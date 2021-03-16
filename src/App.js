import "./App.css";
import BabyNameLists from "./BabyNameLists";
import SearchField from "./SearchField";

function App() {
  return (
    <div className="App">
      <SearchField />
      <div className="mt-5">
        <BabyNameLists />
      </div>
    </div>
  );
}

export default App;
