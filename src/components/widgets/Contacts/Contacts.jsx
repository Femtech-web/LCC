import React from "react";
import styles from "./Contacts.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { ContactForm } from "../../ui";
import { Button } from "../../elements";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Layout
      style={{
        background: "#08314b",
      }}
      mode="dark"
      col="2"
      padding
    >
      <ContactForm />
      <div className={styles.wrapper}>
        <div className={styles.contact_info}>
          <h2>Contact Us</h2>
          <p>
          If you are interested in working with us or 
          would like to learn more about our services,
           please don't hesitate to contact us. You can reach us by email.
          </p>
          <Button
            to="/contacts"
            type="solid-color-tb"
            hoverType="solid-white-tb"
            after="&#xf105;"
          />
        </div>
      </div>
    </Layout>
  );
};
