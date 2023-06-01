import React, { Fragment } from "react";
import { Header, Contacts2 } from "../../widgets";
import { useCustomState } from "../../../state/state";
import image from "../../../assets/images/const-20.jpg"

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={image}>Our contacts</Header>
      <Contacts2 />
    </Fragment>
  );
};
