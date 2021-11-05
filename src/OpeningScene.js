import "./App.css";
import "./openingScene.css";
import { useState, useEffect } from "react";
import { openingTheme } from "./audio";
import {
  autopsy,
  boardwalkGif,
  drivingNaturalB,
  drivingNight,
  eyeGun,
  giantDipper,
  montysLog,
  mysterySpotGirl,
  naturalBridges,
  pullingBodyOcean,
  smoking,
  surferDrowing,
  surferDrownsPaper,
  surferNight,
  tides,
  train,
  trees,
} from "./images";

export default function OpeningScene(props) {
  const { setSkipOpeningScene } = props;
  const [startOpening, setStartOpening] = useState(false);

  const itemOrderIds = [
    "openingTitle1",
    "naturalBridges",
    "boardwalkGif",
    "openingTitle2",
    "smoking",
    "trees",
    "openingTitle3",
    "pullingBodyOcean",
    "surferNight",
    "surferDrowing",
    "openingTitle4",
    "eyeGun",
    "giantDipper",
    "openingTitle5",
    "drivingNaturalB",
    "drivingNight",
    "montysLog",
    "openingTitle6",
    "surferDrownsPaper",
    "tides",
    "autopsy",
    "openingTitle7",
    "openingTitle8",
  ];

  useEffect(() => {
    if (startOpening) {
      itemOrderIds.map((itemId, index) => {
        setTimeout(function () {
          if (document.getElementById(itemId)) {
            document.getElementById(itemId).className = "showInit";
          }
          if (index !== 0) {
            if (document.getElementById(itemOrderIds[index - 1])) {
              document.getElementById(itemOrderIds[index - 1]).className =
                "hideInit";
            }
          }
        }, (index + 1) * 3000);
      });
    }
  }, [startOpening]);

  return (
    <div>
      {!startOpening ? (
        <button
          className="menuBox fade-in"
          onClick={() => setStartOpening(true)}
        >
          Turn sound on to continue
        </button>
      ) : (
        ""
      )}
      {startOpening ? (
        <>
          <audio
            autoPlay="autoPlay"
            src={openingTheme}
            type="audio/mpeg"
            controls
            hidden={true}
          />

          <h1 id="openingTitle1" className="hideInit">
            Santa Cruz, CA
          </h1>
          <h3 id="openingTitle2" className="hideInit">
            A new mystery from Rocko Bauman and Amira Wheeler
          </h3>
          <h2 id="openingTitle3" className="hideInit">
            A tragedy has occurred
          </h2>
          <h3 id="openingTitle4" className="hideInit">
            But is there more than meets the eye?
          </h3>
          <h2 id="openingTitle5" className="hideInit">
            That's for you to find out...
          </h2>
          <h2 id="openingTitle6" className="hideInit">
            Examine the evidence closely
          </h2>
          <h2 id="openingTitle7" className="hideInit">
            And use this website to verify your discoveries
          </h2>
          <h2 id="openingTitle8" className="hideInit">
            Best of luck to you, detective
          </h2>
          <img id="eyeGun" className="hideInit" src={eyeGun} alt={"eyeGun"} />
          <img
            id="boardwalkGif"
            className="hideInit"
            src={boardwalkGif}
            alt={"boardwalkGif"}
          />
          <img
            id="drivingNight"
            className="hideInit"
            src={drivingNight}
            alt={"Santa Cruz Beach at night"}
          />
          <img
            id="montysLog"
            className="hideInit"
            src={montysLog}
            alt={"montysLog"}
          />
          <img
            id="surferDrowing"
            className="hideInit"
            src={surferDrowing}
            alt={"surferDrowing"}
          />
          <img
            id="surferNight"
            className="hideInit"
            src={surferNight}
            alt={"surferNight"}
          />
          <img
            id="pullingBodyOcean"
            className="hideInit"
            src={pullingBodyOcean}
            alt={"pullingBodyOcean"}
          />
          <img id="train" className="hideInit" src={train} alt={"train"} />
          <img
            id="trees"
            className="hideInit"
            src={trees}
            alt={"Santa Cruz Beach at night"}
          />
          <img
            id="smoking"
            className="hideInit"
            src={smoking}
            alt={"smoking"}
          />
          <img
            id="giantDipper"
            className="hideInit"
            src={giantDipper}
            alt={"giantDipper"}
          />
          <img
            id="drivingNaturalB"
            className="hideInit"
            src={drivingNaturalB}
            alt={"drivingNaturalB"}
          />
          <img
            id="naturalBridges"
            className="hideInit"
            src={naturalBridges}
            alt={"naturalBridges"}
          />
          <img
            id="tides"
            className="hideInit"
            src={tides}
            alt={"naturalBridges"}
          />
          <img
            id="surferDrownsPaper"
            className="hideInit"
            src={surferDrownsPaper}
            alt={"naturalBridges"}
          />
          <img
            id="autopsy"
            className="hideInit"
            src={autopsy}
            alt={"naturalBridges"}
          />

          <div
            className="skipText fade-in-long"
            id="skipButton"
            onClick={() => setSkipOpeningScene(true)}
          >
            <p>Skip</p>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
