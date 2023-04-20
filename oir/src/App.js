
import {  Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import { BasicRoutesConfig, rolesConfig } from './Router/Route';
import { connect } from 'react-redux';


function App(props) {
  const { isAuthenticated, userRole, token } = props.AuthLogin;
  console.log("App", { isAuthenticated, userRole, token })
  const loginToken = sessionStorage.getItem("loginToken") && sessionStorage.getItem("isAuthenticated") && sessionStorage.getItem("userRole")
  const storeDetails = async () => {
    await props.saveAuth({
        isAuthenticated: sessionStorage.getItem("loginToken"),
        userRole: sessionStorage.getItem("userRole"),
        token: sessionStorage.getItem("loginToken")
      })
  }
  if (loginToken) {
    storeDetails();
  }

  let routes;
  if (isAuthenticated || sessionStorage.getItem("isAuthenticated")) {
    if (userRole === "Student" || sessionStorage.getItem("userRole") === "Student") {
      routes = rolesConfig["user"];
    } else if (userRole === "Admin" || sessionStorage.getItem("userRole") === "Admin") {
      routes = rolesConfig["Admin"];
    }
    else if(userRole === "Teacher" || sessionStorage.getItem("userRole") === "Teacher"){
      routes = rolesConfig["Teacher"];
    }
  }
  return (
    <>
      <Suspense>
        <Routes>
          {BasicRoutesConfig.map((route, key) => {
            return route ? <Route key={key} {...route} /> : null;
          })}
          {isAuthenticated || loginToken ? (
            <Route element={loginToken ? <Layout /> : <Home />}>
              {routes.routes.map((route, key) => {
                return route ? <Route key={key} {...route} /> : null;
              })}
            </Route>
          ) : (
            <Route path="/*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </Suspense>
    </>
  );
}

const mapStateToProps = (state) => ({ AuthLogin: state.AuthLogin });
const mapDispatchToProps = (dispact) => ({
  saveAuth: (Details) => dispact(saveAuth(Details)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);


