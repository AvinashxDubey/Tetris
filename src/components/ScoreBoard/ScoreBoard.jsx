import './ScoreBoard.css'

const ScoreBoard = (props) => {
    return (
        <div className="score-board">
            <p>Score : {props.score}</p>
            <p>Level : 1</p>
            <button className="scoreboard-btn" onClick={(e) => { }} >Play</button>
            <button className="scoreboard-btn" onClick={(e) => { }} >Restart</button>
        </div>
    )
}

export default ScoreBoard