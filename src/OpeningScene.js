import './App.css';
import './openingScene.css'
import {useState, useEffect} from 'react';
import { openingTheme } from './audio';
import {boardwalkGif, drivingNight, eyeGun, montysLog, mysterySpotGirl, pullingBodyOcean, smoking, surferDrowing, surferNight, train, trees} from './images';

export default function OpeningScene(props){
  const {setSkipOpeningScene} = props;
  const [startOpening, setStartOpening] = useState(false);

  const itemOrderIds = [
    'openingTitle1',
    'trees',
    'boardwalkGif',
    'openingTitle2',
    'smoking',
    'train',
    'openingTitle3',
    'pullingBodyOcean',
    'surferNight',
    'surferDrowing',
    'openingTitle4',
    'eyeGun',
    'montysLog',
    'openingTitle5',
    'drivingNight',

  ];

useEffect(() => {
  if(startOpening){
  itemOrderIds.map((itemId, index) => {
     setTimeout(function(){
        if( document.getElementById(itemId)){
           document.getElementById(itemId).className = 'showInit';
        }
        if(index !== 0 ){
          if(document.getElementById(itemOrderIds[index - 1])){
          document.getElementById(itemOrderIds[index - 1]).className = 'hideInit';
          }
        }
      }, (index + 1 )* 3000);})
  }
},[startOpening]);


    return(
        <div>
          {!startOpening ? <button className='menuBox fade-in' onClick={() => setStartOpening(true)}>Turn sound on to continue</button> : ''}
          {startOpening ? <>
          <audio
            autoPlay="autoPlay"
            src={openingTheme}
            type="audio/mpeg"
            controls
            hidden={true}/>

            <h1 id="openingTitle1" className="hideInit">Santa Cruz, CA</h1>
            <h3 id="openingTitle2" className="hideInit">A new mystery from Rocko Bauman and Amira Wheeler</h3>
            <h2 id="openingTitle3" className="hideInit">A tragedy has occurred</h2>
            <h3 id="openingTitle4" className="hideInit">But is there more than meets the eye?</h3>
             <h2 id="openingTitle5" className="hideInit">That's for you to find out...</h2>
            <img id="eyeGun" className="hideInit" src={eyeGun} alt={'Santa Cruz Beach at night'}/>
            <img id="boardwalkGif" className="hideInit" src={boardwalkGif} alt={'Santa Cruz Beach at night'}/>
            <img id="drivingNight" className="hideInit" src={drivingNight} alt={'Santa Cruz Beach at night'}/>
            <img id="mysterySpotGirl" className="hideInit" src={mysterySpotGirl} alt={'Santa Cruz Beach at night'}/>
            <img id="montysLog" className="hideInit" src={montysLog} alt={'Santa Cruz Beach at night'}/>
            <img id="surferDrowing" className="hideInit"src={surferDrowing} alt={'Santa Cruz Beach at night'}/>
            <img id="surferNight" className="hideInit" src={surferNight} alt={'Santa Cruz Beach at night'}/>
            <img id="pullingBodyOcean" className="hideInit" src={pullingBodyOcean} alt={'Santa Cruz Beach at night'}/>
            <img id="train" className="hideInit" src={train} alt={'Santa Cruz Beach at night'}/>
            <img id="trees" className="hideInit" src={trees} alt={'Santa Cruz Beach at night'}/>
            <img id="smoking" className="hideInit" src={smoking} alt={'Santa Cruz Beach at night'}/>


         <div className="skipText fade-in-long" id="skipButton" onClick={() => setSkipOpeningScene(true)}>
          <p>Skip</p>
          </div>
          </>
   : ''}
        </div>
)
}
