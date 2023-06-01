import React, { useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
// #08314b thick blue
// #2caee3 light blue
// #bee0eb very light blue
// #222A37 blue mixture
import {
  Home,
  About,
  Services,
  Portfolio,
  Contacts,
  Blog,
  PostSingle,
  ServiceSingle,
  MemberCard,
  PortfolioSingle
} from "./components/pages";
import { Header, Sidebar, Footer } from "./components/layouts";
import { ModalForm, ModalVideo, RequestForm } from "./components/ui";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";

export default () => {
  const [state, actions] = useCustomState();

  useEffect(() => {
    actions.fetch();
  }, [actions]);

  let app = state.error ? <p>Can't load page</p> : <Spinner fluid />

  if (state.data) {
    app = (
        <Fragment>
          <Sidebar data={state.data.menu} />
          <ModalForm />
          <ModalVideo />
          <RequestForm />
          <Header data={state.data.menu} />
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route exact path="/home"  element={<Home />} />
            <Route exact path="/about-us"  element={<About/>} />
            <Route exact path="/services"  element={<Services/>} />
            <Route exact path="/portfolio"  element={<Portfolio/>} />
            <Route exact path="/contacts"  element={<Contacts/>} />
            <Route exact path="/blog/:post_id"  element={<PostSingle/>} />
            <Route
              exact path="/services/:service_id"
              
              element={<ServiceSingle/>}
            />
            <Route exact path="/team/:member_id" element={<MemberCard/>} />
            <Route
              exact path="/portfolio/:project_id"
              element={<PortfolioSingle />}
            />

            <Route exact path="/blog/cats/:category" 
            element={<Blog sidebar="left" layout="grid" />}/>

            <Route exact path="/blog/user/:author" 
            element={<Blog sidebar="left" layout="grid" />} 
            />
            
            <Route exact path="/blog/date/:posting_date"
             element={<Blog sidebar="left" layout="grid" />}
              />
              
            <Route path="/blog/search/:query" 
            element={ <Blog sidebar="left" layout="grid" />} 
            />
            
            <Route path="/forum" 
              element={<Blog
                layout="grid"
                title="Forum"
              />}
              />
          </Routes>
          <Footer />
        </Fragment>
    );
  }

  return <>{app}</>;
};
