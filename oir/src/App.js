
import {  Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from 'react';
import { BasicRoutesConfig, rolesConfig } from './Router/Route';
import { connect } from 'react-redux';
import { loginUser } from "./Redux/Actions/AuthActions";
import MainPage from './pages/Main/Main'

function App(props) {
  const userDetails = props.AuthLogin;
  console.log(userDetails)
  const { isAuthenticated, userType, token } = userDetails;
  console.log("App", { isAuthenticated, userType, token })
  const loginToken = sessionStorage.getItem("loginToken") && sessionStorage.getItem("isAuthenticated") && sessionStorage.getItem("userType")
  const storeDetails = async () => {
    await props.loginUser({
        ...props.AuthLogin,
        isAuthenticated: sessionStorage.getItem("loginToken"),
        userType: sessionStorage.getItem("userType"),
        token: sessionStorage.getItem("loginToken")
      })
  }
  if (loginToken) {
    storeDetails();
  }

  let routes;
  if (isAuthenticated || sessionStorage.getItem("isAuthenticated")) {
    if (userType === "Student" || sessionStorage.getItem("userType") === "Student") {
      routes = rolesConfig["user"];
    } else if (userType === "Admin" || sessionStorage.getItem("userType") === "Admin") {
      routes = rolesConfig["Admin"];
    }
    else if(userType === "Teacher" || sessionStorage.getItem("userType") === "Teacher"){
      routes = rolesConfig["Teacher"];
    }
  }
  return (
    <>
      <Suspense>
        <Routes>
        <Route element={<MainPage />}>
          {BasicRoutesConfig.map((route, key) => {            
            return route ? <Route  key={key} {...route} /> : null;
          })}
          </Route>
          {isAuthenticated || loginToken ? (
            <Route element={<MainPage />}>
              {routes && routes.routes && routes.routes.map((route, key) => {
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
  loginUser: (Details) => dispact(loginUser(Details)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);


