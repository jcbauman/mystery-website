import "./App.css";
import React from "react";
import {
  bayFederal,
  foundOnPerson,
  mysterySpot,
  stEamerAd,
  liquorStoreFlyer,
  classefieds,
  delMarTicket,
  hintBeachImage,
} from "./images";
import { getHint } from "./formConfigs";
import { Button } from "./components/Button";

interface FormModalProps {
  formError: {
    show: boolean,
    title: string,
    subtitle: string,
    type: string,
    obj?: number,
  };
  setFormError: any;
  setFormType: any;
  setSolvedObjs: any;
  solvedObjs: any;
  setHintCount: any;
  hintCount: any;
}

export default function FormModal(props: FormModalProps) {
  const {
    formError,
    setFormError,
    setFormType,
    setSolvedObjs,
    solvedObjs,
    hintCount,
    setHintCount,
  } = props;

  const getImages = (obj: number) => {
    if (formError.type === "success") {
      if (obj === 1) {
        return (
          <div className="imageContainer">
            <img
              className="modalImage"
              src={bayFederal}
              alt={"Bank Statement"}
            />
            <img
              className="modalImage"
              src={foundOnPerson}
              alt={"CSI Report"}
            />
          </div>
        );
      } else if (obj === 2) {
        return (
          <div className="imageContainer">
            <img
              className="modalImage"
              src={stEamerAd}
              alt={"St. Eamer Liquors Ad"}
            />
          </div>
        );
      } else if (obj === 3) {
        return (
          <div className="imageContainer">
            <img
              className="modalImage"
              src={liquorStoreFlyer}
              alt={"Holy City Biker Club Meeting Key"}
            />
            <img
              className="modalImage"
              src={classefieds}
              alt={"Holy City Biker Club Meeting Code"}
            />
          </div>
        );
      } else if (obj === 4) {
        return (
          <div className="imageContainer">
            <img
              className="modalImage"
              src={delMarTicket}
              alt={"Del Mar Time Change"}
            />
          </div>
        );
      } else {
        return (
          <img
            className="modalImage"
            src={mysterySpot}
            alt={"mystery spot logo"}
          />
        );
      }
    } else if (formError.type === "hint") {
      return (
        <img
          className="modalImage nonEvidenceImage"
          src={hintBeachImage}
          alt={"mysterious beach"}
        />
      );
    } else {
      return (
        <img
          className="modalImage"
          src={mysterySpot}
          alt={"mystery spot logo"}
        />
      );
    }
  };

  const continueBtnHandler = () => {
    if (formError.type === "success") {
      setSolvedObjs(formError.obj + 1);
      setFormType("menu");
    } else if (formError.type === "tooFast") {
      setSolvedObjs(formError.obj || 1);
      setFormType(formError.obj || 1);
    }
    setFormError({ show: false, title: "", subtitle: "", type: "none" });
  };

  const hintBtnHandler = () => {
    setFormError({
      show: true,
      title: "",
      subtitle: getHint(formError.obj, hintCount[formError.obj - 1]),
      type: "hint",
      obj: formError.obj,
    });
    let helperHintCount = [...hintCount];
    helperHintCount[formError.obj - 1] = helperHintCount[formError.obj - 1] + 1;
    setHintCount(helperHintCount);
  };

  const backButtonHandler = () => {
    setFormError({ show: false, title: "", subtitle: "", type: "none" });
    setFormType("menu");
  };

  return (
    <div className="blur">
      <div className="modalWindow">
        {getImages(formError.obj)}
        <h1>{formError.title}</h1>
        <h3>{formError.subtitle}</h3>
        {formError.type === "tooFast" ? (
          <Button  onClick={() => backButtonHandler()} variant='contained'>
            Back to Safety
          </Button>
        ) : (
          ""
        )}
        {formError.type === "tooFast" ? (
          <Button
            variant='outlined'
            onClick={() => continueBtnHandler()}
          >
            I already solved that one
          </Button>
        ) : (
          ""
        )}
        {formError.type !== "tooFast" ? (
          <Button variant='contained' onClick={() => continueBtnHandler()}>
            {formError.type !== "success" ? "Try Again" : "Continue"}
          </Button>
        ) : (
          ""
        )}
        {formError.type === "failure" ? (
          <Button variant='outlined' onClick={() => hintBtnHandler()}>
            I need a hint
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
