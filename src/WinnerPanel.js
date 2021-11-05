import './App.css';
import {kzscNewsAudio} from './audio';
import {boardwalkGif} from './images';

export default function WinnerPanel(){

    return(
        <div>
            <h4>You solved the case</h4>
            <img className='winnerImage' src={boardwalkGif} alt={'Santa Cruz Beach at night'}/>
            <h5>Turn on the radio...</h5>
            <audio controls>
                <source src={kzscNewsAudio} type="audio/mp3"/>
                    Sadly, your browser does not support this audio element.
            </audio>
        </div>
)
}
