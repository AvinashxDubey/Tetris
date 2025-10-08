import GridSquare from "../GridSquare/GridSquare";
import './NextBlock.css'
import { useSelector } from "react-redux";
import { shapes } from "../../utils";

const NextBlock = () => {
    const nextShape = useSelector((state) => state.game.nextShape);
    const box = shapes[nextShape][0];

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