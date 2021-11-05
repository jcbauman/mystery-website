import FormComponent from './FormComponent';
import {useState} from 'react';
import './App.css';
import FormModal from "./FormModal";
import WinnerPanel from "./WinnerPanel";
import OpeningScene from './OpeningScene';

function App() {
    const [formError,setFormError] = useState({show:false,title:'',subtitle:'',type:'none'});
    const [solvedObjs,setSolvedObjs] = useState(1);
    const [formType,setFormType] = useState('menu');
    const [hintCount,setHintCount] = useState([0,0,0,0,0]);
    const [skipOpening,setSkipOpening] = useState(false);

    const getMainComponent = () => {
        console.log(skipOpening)
        if(skipOpening){
            if(solvedObjs > 5){
                return <WinnerPanel/>
            } else {
                return <FormComponent formError={formError} setFormError={setFormError} solvedObjs={solvedObjs} setSolvedObjs={setSolvedObjs} formType={formType} setFormType={setFormType}/>
            }
        } else {
            return <OpeningScene setSkipOpeningScene={setSkipOpening}/>
        }
    }

    return (
        <div className="App">
            {formError.show ? <FormModal setFormError={setFormError} formError={formError} setFormType={setFormType} setSolvedObjs={setSolvedObjs} solvedObjs={solvedObjs} hintCount={hintCount} setHintCount={setHintCount}/> : ''}
            <header className="App-header">
                {getMainComponent()}
            </header>
        </div>
    );
}

export default App;
