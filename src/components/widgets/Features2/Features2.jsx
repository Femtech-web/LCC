import React from "react";
import styles from "./Features2.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const actions = useCustomState()[1];

  const servicesList = data
    .map((item, index) => (
      <article key={index} className={styles.wrapper}>
        <div
          className={[styles.card, index === 1 && styles.main].join(" ")}
          style={{ borderColor: THEME.color }}
        >
          <i className={item.icon} />
          <h3 style={{ color: THEME.color }}>{item.title}</h3>
          <p>{item.text}</p>
          {index === 1 && (
            <div className={styles.btn}>
              <Button
                before="&#xf067;"
                round
                type="solid-white-tb"
                hoverType="solid-color-tb"
                click={() =>
                  actions.toogleRequest(
                    "Please call me back, I want to start do business with you!"
                  )
                }
              >
                Contact Us
              </Button>
            </div>
          )}
        </div>
      </article>
    ))
    .slice(0, 3);

  return (
    <Layout
      col="3"
      padding
      style={{
        background: "rgb(240,240,240)",
      }}
    >
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Who we are
        </span>
        <h2>Our company is trustworthy in a global economy.</h2>
        <p className="parargraph">
            We are a full-service general contracting company based in Jeddah, 
            Saudi Arabia. We are a team of seasoned professionals who are passionate 
            about delivering high-quality construction services to our clients.
        </p>
      </div>
      {servicesList}
    </Layout>
  );
};
