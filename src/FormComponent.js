import {useState,useEffect} from 'react';
import './App.css';
import FormModal from "./FormModal";
import {allDocuments, getDocuments, getPrompt, getAnswer, getCorrectDocs,suspectList} from './formConfigs';

interface FormComponentProps {
    formError:any,
    setFormError:any,
    setSolvedObjs:any,
    solvedObjs:any,
    setFormType:any;
    formType:any;
}

export default function FormComponent(props:FormComponentProps){
    const {formError,setFormError,setSolvedObjs,solvedObjs,setFormType,formType} = props;
    const titles = [{title:'Objective 1',id:1},{title:'Objective 2',id:2},{title:'Objective 3',id:3},{title:'Objective 4',id:4},{title:'Objective 5',id:5}];

    const [formState,setFormState] = useState(allDocuments.reduce((acc,curr)=> (acc[curr.id] = false, acc),{}));

    const formSubmit = () => {
        let count = 0;
        for(let key in formState){
            if(formState[key] && formState[key] === true){count++;}
        }

        if(count !== getCorrectDocs(formType).length){
            setFormError({show:true,title:`Too ${count > getCorrectDocs(formType).length ? 'many' : 'few'} documents`, subtitle:`You selected ${count} document${count === 1 ? '' : 's'}.  Please select ${getCorrectDocs(formType).length}.`,type:'error'} );
        }else {
            const targetDocs = getCorrectDocs(formType);
            let validation = {correct: true, count: 0};
            targetDocs.map((doc) => {
                    if (formState[doc] === true) {
                        console.log("true",formState[doc],doc);
                        validation.count = validation.count + 1;
                    } else {
                        console.log("false",formState[doc],doc);
                        validation.correct = false;
                    }
                    return 0;
                }
            )

            if (validation.correct === false) {
                setFormError({show:true,title:'\"No\"',subtitle:'Not quite... one or more of your submissions are wrong.',type:'failure',obj:parseInt(formType)})
            } else {
                setFormError({show:true,title:'CORRECT!',subtitle:getAnswer(formType),type:'success',obj:parseInt(formType)});
            }
        }
    };

    useEffect(() => {
        setFormState(allDocuments.reduce((acc,curr)=> (acc[curr]=false,acc),{}));
        setFormError({show:false,title:'',subtitle:'',type:'none'});
    },[formType]);

    const onCheckboxChange = (e) => {
        let newState = {...formState};
        newState[e.target.id] = e.target.checked;
        setFormState(newState);
        setFormError({show:false,title:'',subtitle:'',type:'none'});
    }

    const handleNewObjective = (e) => {
        if(e.target.id > solvedObjs){
            setFormError({show:true,title:'Are you sure?',subtitle:`You should only proceed to this objective once you have confirmed your answer to the Objective ${e.target.id - 1}.`,type:'tooFast',obj:e.target.id});
        } else {
            setFormType(e.target.id);
        }
    };

    const getForm = () => {
        if(formType === 'menu'){
            return (
                <div>
                    <h3>Which objective do you want to verify?</h3>
                    {titles.map((button) =>
                        <button className='menuBox' key={button.id} id={button.id} onClick={(e) => handleNewObjective(e)}>{button.title}</button>
                    )}
                </div>
            );
        } else {
            return (
                <div className='formBox'>
                    <p>{getPrompt(formType)}</p>
                    <form className='col'>
                        {getDocuments(formType).sort((a, b) => (a.title > b.title) ? 1 : -1).map((doc: {title:string,id:string}) => <div ><label className="container" key={doc}>{doc.title}
                                <input type="checkbox" value={doc.id} id={doc.id} name={formType} onChange={(e) => onCheckboxChange(e)}/>
                                <span className="checkmark"/>
                            </label>
                            </div>
                        )}
                        {formType === '5' ? <div>

                            <label for={'killer'}>Finally, who is the killer?</label>
                            <select id={'killer'} required name={'killer'}>
                                <option value=''>Select...</option>
                                {suspectList.sort().map((suspect) => <option value={suspect}>{suspect}</option>)}
                            </select>
                        </div>: ''}
                        <button className='menuBox'  type="button" onClick={() => formSubmit()}>Submit</button>
                        <button className='menuBox' type="button" onClick={() => setFormType('menu')}>Back</button>
                    </form>
                </div>
            );
        }
    };

    return(
        <div>
            {getForm()}
        </div>
    )
}