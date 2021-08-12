import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ServerList from './components/ServerList';

const useStyles = makeStyles((theme) => ({
  serverList:{
    display: "flex",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    justifyContent: "start",
    margin: "50px 0",
    color: "linen",
    fontSize: "100px",
    textShadow: "2px 3px 5px rgba(0,0,0,0.5);"
  },
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "&>*":{
      width: "90%",
    },
    backgroundImage: "url('https://images.pexels.com/photos/2873669/pexels-photo-2873669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    overflow: "scroll",
    overflowX: "hidden"
  }
  }));



export default function App() {

  const classes = useStyles()


    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Dark Servers Of Hell</h1>
          <ServerList className={classes.serverList}/>
        </div>
    )
}
