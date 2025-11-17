import GridSquare from "../GridSquare/GridSquare"
import { useSelector } from 'react-redux'
import { shapes } from '../../utils'
import './GridBoard.css'

const GridBoard = () => {
  const game = useSelector((state) => state.game)
  const { grid, shape, rotation, x, y, isRunning, speed } = game
  const block = shapes[shape][rotation]
  const blockColor = shape

  const gridSquares = grid.map((rowArr, row) => {
    return rowArr.map((square, col) => {
      const blockX = col - x
      const blockY = row - y
      let color = square

      if (blockX >= 0 && blockX < block[0].length && blockY >= 0 && blockY < block.length) {
        color = block[blockY][blockX] === 0 ? color : blockColor
      }

      const k = row * grid[0].length + col

      return <GridSquare
        key={k}
        color={color}
      />
    })
  })

  return (

    <div className="grid-board">
      {gridSquares}
    </div>
  )
}

export default GridBoard