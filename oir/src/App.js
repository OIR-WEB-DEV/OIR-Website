
import {  Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from 'react';
import { BasicRoutesConfig, rolesConfig } from './Router/Route';
import { connect } from 'react-redux';
import { loginUser } from "./Redux/Actions/AuthActions";
import MainPage from './pages/Main/Main'

function App(props) {
  const { isAuthenticated, userRole, token } = props.AuthLogin;
  // console.log("App", { isAuthenticated, userRole, token })
  const loginToken = sessionStorage.getItem("loginToken") && sessionStorage.getItem("isAuthenticated") && sessionStorage.getItem("userRole")
  const storeDetails = async () => {
    await props.loginUser({
        ...props.AuthLogin,
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
        <Route element={<MainPage />}>
          {BasicRoutesConfig.map((route, key) => {            
            return route ? <Route  key={key} {...route} /> : null;
          })}
          </Route>
          {isAuthenticated || loginToken ? (
            <Route element={<MainPage />}>
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
  loginUser: (Details) => dispact(loginUser(Details)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);


