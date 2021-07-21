import FormComponent from './FormComponent';
import {useState} from 'react';
import './App.css';
import FormModal from "./FormModal";
import WinnerPanel from "./WinnerPanel";

function App() {
    const [formError,setFormError] = useState({show:false,title:'',subtitle:'',type:'none'});
    const [solvedObjs,setSolvedObjs] = useState(1);
    const [formType,setFormType] = useState('menu');
    const [hintCount,setHintCount] = useState([0,0,0,0,0]);
    return (
        <div className="App">
            {formError.show ? <FormModal setFormError={setFormError} formError={formError} setFormType={setFormType} setSolvedObjs={setSolvedObjs} solvedObjs={solvedObjs} hintCount={hintCount} setHintCount={setHintCount}/> : ''}
            <header className="App-header">
                {solvedObjs > 5 ?
                    <WinnerPanel/>
                    :
                    <FormComponent formError={formError} setFormError={setFormError} solvedObjs={solvedObjs} setSolvedObjs={setSolvedObjs} formType={formType} setFormType={setFormType}/>
                }
            </header>
        </div>
    );
}

export default App;
