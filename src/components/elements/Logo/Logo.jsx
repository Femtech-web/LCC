import React from "react";
import styles from "./Logo.module.scss";
import logo from '../../../assets/placeholders/lcc-logo.svg';
import THEME from "../../../state/theme";

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
  >
    <span>
      <img src={logo} alt="" />
    </span>
  </figure>
);
