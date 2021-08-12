import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "./ToggleButton";
import moment from 'moment'



const useStyles = makeStyles((theme) => ({
  root: {
    // width: "50%",
    padding: "20px",
    paddingTop: "40px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    "&>*":{
        margin: "7px 0",
        backgroundColor: "rgba(255, 255,255,.1)"
    },
    backgroundColor: "rgba(0, 0, 0, .8)",
    color: "white",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"

  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function ServerCard({ server }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div>Name: {server.name}</div>
      <div>Hosting Company: {server.company_name}</div>
      <div>Creation: {moment(server.creation_datetime).format('MMM do YYYY, h:mm:ss')}</div>

        <div>
            <ToggleButton server={server} />
        </div>
    </Card>
  );
}
