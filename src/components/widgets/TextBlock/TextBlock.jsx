import React from "react";
import styles from "./TextBlock.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import image from "../../../assets/images/const-5.jpg";
import { useCustomState } from "../../../state/state";

export default () => {
  const [state, actions] = useCustomState();
  return (
    <Layout col="2" padding>
      <article className={styles.wrapper}>
        <div className={styles.info}>
          <span className={styles.subtitle} style={{ color: THEME.color }}>
            Company info
          </span>
          <h2>We create quality  &amp; high standards</h2>
          <p className={styles.paragraph}>
          We take great pride in our work, 
          ensuring that each project is completed to 
          the highest standards of quality and craftsmanship.
          .Our team of experts includes architects, 
           engineers, interior designers, project
           managers, electricians, HVAC technicians, and 
           carpenters who work together to provide an exceptional service. 
          </p>
          <p className={styles.paragraph}>
            <b>
            we believe that excellent 
            communication and attention to detail are 
            the keys to delivering successful construction projects. 
            </b>
          </p>
        </div>
      </article>
      <article className={styles.wrapper}>
        <figure className={styles.image}>
          <div
            className={styles.rectangle}
            style={{ borderColor: THEME.color }}
          />
          <div className={styles.photo}>
            <i
              onClick={() => actions.toogleVideo()}
              className="las la-caret-right"
              style={{ borderColor: THEME.color, color: THEME.color }}
            />
            <span
              style={{
                background:
                  "url(" +
                  image +
                  ") center/cover",
              }}
            />
          </div>
        </figure>
      </article>
    </Layout>
  );
};
