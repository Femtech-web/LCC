import React, { Fragment } from "react";
import styles from "./Contacts2.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { ContactForm } from "../../ui";
import { AddressBox, Button } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default () => {
  const actions = useCustomState()[1];

  return (
    <Fragment>
      <div className={styles.header}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Send message
        </span>
        <h2>Feel free to contact us.</h2>
        <p>
        If you are interested in working with us or would like to learn more about 
        our services, please don't hesitate to contact us. You can reach us by email.
        </p>
      </div>
      <Layout col="4">
        <AddressBox
          icon="las la-phone"
          title="Call Us"
          text="+987 (077) 456-234"
        />
        <AddressBox
          icon="la la-envelope-open"
          title="Mail Us"
          text="admin@mail.com"
        />
        <AddressBox
          icon="la la-home"
          title="Visit Us"
          text="Otaki, 32 Wilson Street"
        />
        <AddressBox
          icon="las la-comment"
          title="Support"
          text="Live chart 24/7"
        />
        <span className={styles.divider} style={{ borderColor: THEME.color }} />
      </Layout>

      <Layout col="2">
        <div className={styles.wrapper}>
          <ContactForm style={{ border: "1px solid #eee" }} />
        </div>

        <div className={styles.info}>
          <i
            className="las la-long-arrow-alt-right"
            style={{ color: THEME.color }}
          />
          <h2>Ready to start making business with us?</h2>
          <p>
           At LCC, we believe that excellent communication and attention
           to detail are the keys to delivering successful construction projects.
           If you are interested in working with us or would like to learn more about 
           our services, please don't hesitate to contact us. You can reach us by email.
          </p>
          <Button
            click={() =>
              actions.toogleRequest(
                "I'm ready to start making business with you!"
              )
            }
            type="solid-gray-tb"
            hoverType="solid-white-tb"
            after="&#xf107;"
          >
            Send Message
          </Button>
        </div>
      </Layout>
    </Fragment>
  );
};
