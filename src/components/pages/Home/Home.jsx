import React, { Fragment } from "react";
import {
  Features,
  Features2,
  Subscribe,
  Services,
  Contacts,
  VideoHeader,
  Reviews,
  Facts,
} from "../../widgets";

import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <VideoHeader />
      <Features2 data={state.data.features2} />
      <Facts data={state.data.facts} />
      <Services data={state.data.services} />
      <Features data={state.data.features} />
      <Subscribe />
      <Reviews data={state.data.reviews} />
      <Contacts />
    </Fragment>
  );
};
