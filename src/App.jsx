import GridBoard from "./components/GridBoard/GridBoard";
import GridSquare from "./components/GridSquare/GridSquare";
import NextBlock from "./components/NextBlock/NextBlock";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      {/* <GridSquare color="1" /> */}
      <GridBoard />
      <NextBlock />
    </div>
  );
}

export default App;