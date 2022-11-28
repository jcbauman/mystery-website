import FormComponent from "./FormComponent";
import "./App.css";
import FormModal from "./FormModal";
import WinnerPanel from "./WinnerPanel";
import OpeningScene from "./OpeningScene";
import { useAppState } from "./hooks/useAppState";

function App() {
  const {
    formError, setFormError, solvedObjs, setSolvedObjs, formType, setFormType,
    hintCount,setHintCount,skipOpening,setSkipOpening
  } = useAppState()

  const getMainComponent = () => {
    if (skipOpening) {
      if (solvedObjs > 5) {
        return <WinnerPanel />;
      } else {
        return (
          <FormComponent
            formError={formError}
            setFormError={setFormError}
            solvedObjs={solvedObjs}
            setSolvedObjs={setSolvedObjs}
            formType={formType}
            setFormType={setFormType}
          />
        );
      }
    } else {
      return <OpeningScene setSkipOpeningScene={setSkipOpening} />;
    }
  };

  return (
    <div className="App">
      {formError.show ? (
        <FormModal
          setFormError={setFormError}
          formError={formError}
          setFormType={setFormType}
          setSolvedObjs={setSolvedObjs}
          solvedObjs={solvedObjs}
          hintCount={hintCount}
          setHintCount={setHintCount}
        />
      ) : (
        ""
      )}
      <header className="App-header">{getMainComponent()}</header>
    </div>
  );
}

export default App;
