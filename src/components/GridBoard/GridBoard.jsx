import GridSquare from "../GridSquare/GridSquare";
import './GridBoard.css'

const GridBoard = () => {

    const grid = [];
    for(let row=0; row<18; row++){
        grid.push([]);
        for(let col=0; col<10; col++){
            grid[row].push(<GridSquare key={`${row}${col}`} color="1" />);
        }
    }

  return (

    <div className="grid-board">
        {grid}
    </div>
  )
}

export default GridBoard