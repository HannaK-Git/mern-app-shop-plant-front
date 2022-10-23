import { observer } from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter } from "react-router-dom";
import { check } from "./http/userAPI";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Context} from "./index";
import { Spinner } from "react-bootstrap";
import FooterComp from "./components/Footer";


const App = observer(() => {

  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      user.setUser(data);
      user.setIsAuth(true)}).finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh"}}>
        <NavBar />
        <AppRouter />
      </div>
      <div >
        <FooterComp />
      </div>
    </BrowserRouter>
  );
})

export default App;
