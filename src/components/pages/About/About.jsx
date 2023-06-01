import React, { Fragment } from "react";
import {
  Header,
  TextBlock,
  Process,
  Facts2,
  Portfolio,
} from "../../widgets";
import { useCustomState } from "../../../state/state";
import image from "../../../assets/images/const-5.jpg";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header img={image}>About company</Header>
      <TextBlock />
      <Process data={state.data.process} />
      <Facts2 data={state.data.facts2} />
      <Portfolio data={state.data.portfolio} />
    </Fragment>
  );
};
