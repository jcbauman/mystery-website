import React from 'react'

export const useAppState = () => {
  const [formError, setFormError] = React.useState({
    show: false,
    title: "",
    subtitle: "",
    type: "none",
  });
  const [solvedObjs, setSolvedObjs] = React.useState(1);
  const [formType, setFormType] = React.useState("menu");
  const [hintCount, setHintCount] = React.useState([0, 0, 0, 0, 0]);
  const [skipOpening, setSkipOpening] = React.useState(false);
  
  return {
    formError, setFormError, solvedObjs, setSolvedObjs, formType, setFormType,
    hintCount,setHintCount,skipOpening,setSkipOpening
  }
}
