import './MessagePopup.css'
import { useSelector } from 'react-redux'

const MessagePopup = (props) => {

    // const random_msg = ['wassup foo, tired?', 'yo come on man, why stop?', 'you arent a quitter, are you?'];
    // const randomIndex = random(0, random_msg.length - 1);
    // const message = random_msg[randomIndex];

    const isRunning = useSelector((state) => state.game.isRunning)
    const gameOver = useSelector((state) => state.game.gameOver)

    let message = ''
    let isHidden = 'hidden'

    if(gameOver) {
      message = 'Game Over'
      isHidden = ''
    } else if(!isRunning){
      message = 'Paused'
      isHidden = ''
    }

  return (
    <div className={`message-popup ${isHidden}`}>
        <h1> {message} </h1>
    </div>
  )
}

export default MessagePopup