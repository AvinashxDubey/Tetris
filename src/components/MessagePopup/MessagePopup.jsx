import { random } from '../../utils';
import './MessagePopup.css'

const MessagePopup = () => {

    const random_msg = ['wassup foo, tired?', 'yo come on man, why stop?', 'you arent a quitter, are you?'];
    const randomIndex = random(0, random_msg.length - 1);
    const message = random_msg[randomIndex];

  return (
    <div className='message-popup'>
        <h1> Paused </h1>
        <p>{message}</p>
    </div>
  )
}

export default MessagePopup