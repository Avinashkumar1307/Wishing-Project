import React, { useState } from "react";
import "./app.css";
import AdminLogin from "./Components/AdminLogin";
import Layout from "./Layout";

export function App() {
  const [logged, setLogged] = useState(true);
  return (
    <>
      {logged === true ? <AdminLogin logged={logged} setLogged={setLogged}/> :
        <Layout logged={logged} setLogged={setLogged}/>}
    </>
  );
}
