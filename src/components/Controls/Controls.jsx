import './Controls.css'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../../actions'

const Controls = () => {
  const dispatch = useDispatch()
  const isRunning = useSelector((state) => state.isRunning)
  return (
    <div className="controls">
        <button className="control-btn" onClick={(e) => dispatch(moveLeft())}>left</button>
        <button className="control-btn" onClick={(e) => dispatch(moveRight())}>right</button>
        <button className="control-btn" onClick={(e) => dispatch(rotate())}>rotate</button>
        <button className="control-btn" onClick={(e) => dispatch(moveDown())}>down</button>
    </div>
  )
}

export default Controls