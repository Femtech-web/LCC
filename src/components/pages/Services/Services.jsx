import React, { Fragment } from "react";
import { Header, ListBlock, Services2, Pricing } from "../../widgets";
import { useCustomState } from "../../../state/state";
import image from "../../../assets/images/const-6.jpg";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={image}>Our services</Header>
      <ListBlock data={state.data.choose} />
      <Services2 data={state.data.services} />
    </Fragment>
  );
};
