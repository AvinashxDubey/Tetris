import Controls from "./components/Controls/Controls";
import GridBoard from "./components/GridBoard/GridBoard";
import MessagePopup from "./components/MessagePopup/MessagePopup";
import NextBlock from "./components/NextBlock/NextBlock";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <MessagePopup />
    </div>
  );
}

export default App;