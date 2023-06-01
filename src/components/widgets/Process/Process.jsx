import React, { useState } from "react";
import styles from "./Process.module.scss";
import { Layout } from "../../layouts";
import { Button } from "../../elements";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
  const processList = data.map((item, index) => (
    <div key={index} className={styles.wrapper}>
      <Card data={item} index={index} />
    </div>
  ));
  return (
    <Layout col="3" padding mode="dark" style={{ background: "#08314b" }}>
      <div className={"layout-header"}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Workflow
        </span>
        <h2 style={{ color: "#fff" }}>
          Smart, reliable &amp; cost effective‎ working process.
        </h2>
      </div>

      {processList}

      <div className={["layout-footer", styles.footer].join(" ")}></div>
    </Layout>
  );
};

const Card = ({ data, index }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className={styles.step}>
      <span className={styles.number}>{index + 1 + "."}</span>
      <div
        className={styles.info}
        style={{
          opacity: hover ? "0" : "1",
          transitionDelay: hover ? ".1s" : ".6s",
        }}
      >
        <h4>{data.title}</h4>
        <p>{data.text}</p>
      </div>
      <ul
        style={{
          opacity: hover ? "1" : "0",
          transitionDelay: hover ? ".6s" : ".1s",
        }}
        className={styles.list}
      >
        <li>
          <i className="las la-check" style={{ color: THEME.color }} />
          Innovative approach to provide customers with unique
          functional designs.
        </li>
        <li>
          <i className="las la-check" style={{ color: THEME.color }} />
          Integrates resources and services to meet business needs and to deliver PMO\
          business models.
        </li>
        <li>
          <i className="las la-check" style={{ color: THEME.color }} />
          Applies high quality management system for ensuring that all Project
          activities are effective.
        </li>
      </ul>
      <div
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        className={styles.btn}
      >
        <Button hoverType="solid-gray-tb" after="&#xf101;" />
      </div>
    </div>
  );
};
