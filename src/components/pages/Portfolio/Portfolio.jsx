import React, { Fragment } from "react";
import { Header, Project, Portfolio2, Subscribe2 } from "../../widgets";
import { useCustomState } from "../../../state/state";
import image from "../../../assets/images/const-8.jpg";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={image}>Our portfolio</Header>
      <Portfolio2 data={state.data.portfolio} />
      <Subscribe2 />
      <Project data={state.data.portfolio} clients={state.data.reviews} />
    </Fragment>
  );
};
