import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import classes from '../App.module.scss'

const RootLayout = () => {
  return <div className={classes.rootLay}>
    <Sidebar/>
    <main>
        <Outlet/>
    </main>
  </div>;
};

export default RootLayout;
