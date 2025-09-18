import GridSquare from "../GridSquare/GridSquare";
import './NextBlock.css'

const NextBlock = () => {
    const box = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    
    const grid = box.map((rowArr, row) => {
        return rowArr.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square} />
        })
    })

    return (
        <div className="next-block">
            {grid}
        </div>
    )
}

export default NextBlock