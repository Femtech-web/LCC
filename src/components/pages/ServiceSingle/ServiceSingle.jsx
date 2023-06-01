import React, { Fragment } from "react";
import styles from "./ServiceSingle.module.scss";
import { Header } from "../../widgets";
import { useParams } from "react-router-dom";
import { useCustomState } from "../../../state/state";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";

export default () => {
  const state = useCustomState()[0];
  const { service_id } = useParams();

  const service = state.data.services.filter(
    (service) => service.id.toString() === service_id
  )[0];

  return (
    <Fragment>
      <Header img={service.img}>{service.title}</Header>
      <Layout col="2" padding>
        <div>
          <figure
            className={styles.photo}
            style={{ background: "url(" + service.img + ") center/cover" }}
          />
        </div>
        <div className={styles.info}>
          <span style={{ color: THEME.color }}>Our service</span>
          <h1>{service.subtitle}</h1>
          <p>{service.full}</p>
        </div>
      </Layout>
    </Fragment>
  );
};
