import React, { useRef, useState } from "react";
import { useCustomState } from "../../../state/state";
import styles from "./VideoHeader.module.scss";
import THEME from "../../../state/theme";
import "animate.css";

export default () => {
  const state = useCustomState()[0];
  // const [isPlay, setPlay] = useState(false);
  // const ref = useRef();

  // const playToogle = () => {
  //   isPlay ? ref.current.pause() : ref.current.play();
  //   setPlay(!isPlay);
  // };

  return (
    <div className={styles.video}>
      <video  src={state.data.video.header} loop autoPlay type="video/mp4" />
      <div className={styles.intro}>
        <h3 className={[styles.header, "animate__animated animate__fadeIn"].join(" ")}>
          <b>Welcome to Leading Contracting Cities (LCC)</b>
        </h3>
        <div className="animate__animated animate__fadeIn">
            <span>Think.</span>
            <span>
              <b>Build.</b>
            </span>
            <span>Work.</span>
        </div>
        <button
          className={styles.play }
          style={{ borderColor: THEME.color }}
        >
          <div className={styles.icon_wrapper}>
            <span
              style={{ background: THEME.color }}
              className={[styles.bar, styles.bar_1].join(" ")}
            />
            <span
              style={{ background: THEME.color }}
              className={[styles.bar, styles.bar_2].join(" ")}
            />
          </div>
        </button>
      </div>
    </div>
  );
};
