import { useDispatch, useSelector } from 'react-redux'
import { pause, restart, resume } from '../../actions'
import './ScoreBoard.css'

const ScoreBoard = () => {
    const dispatch = useDispatch()
    const game = useSelector((state) => state.game)
    const { score, isRunning, gameOver } = game

    return (
        <div className="score-board">
            <p>Score : {score}</p>
            <p>Level : 1</p>
            <button className="scoreboard-btn" onClick={(e) => {
                if (gameOver) { return }
                if (isRunning) { dispatch(pause()) }
                else { dispatch(resume()) }
            }} >{isRunning ? 'Pause' : 'Play'}</button>
            <button className="scoreboard-btn" onClick={(e) => {
                dispatch(restart())
            }} >Restart</button>
        </div>
    )
}

export default ScoreBoard