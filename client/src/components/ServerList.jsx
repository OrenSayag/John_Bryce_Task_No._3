import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ServerCard from "./ServerCard";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    display: 'flex',
    flexDirection: "column",
    "&>*":{
      width: '90%',
    },
    // border: '1px solid pink',
    width: '90%',
    alignItems:"center",


  },

  listContainer: {
    padding: "20px",
    // borderTop: "3px solid gray",
  },
  btnDiv: {
    // border: "1px solid red",
    // height: '200px',
    display: 'flex',
    justifyContent: "center",
    flexDirection: "column",
    "& button":{
      width: "fit-content",
      padding: "15px",
      marginTop: "15px",
      border: "none",
      borderRadius: 3,
      backgroundColor: "rgba(0,0,0,.6)",
      color: "white",
      "&:hover":{
        backgroundColor: "rgba(0,0,0,.9)"
      }
    },
    padding: "15px",
    
  },
  checkbox:{
    color: "white",
    backgroundColor:"rgba(0,0,0,.6)",
    width: "fit-content",
    padding: "10px",

    "&>span":{
      marginLeft: "5px",

    }
  }
}));

export default function ServerList() {
  const getAllServers = async () => {
    try {
      const res = await fetch(`http://localhost:666/api/servers`);
      const data = await res.json();
      console.log(data);
      setAllServers(data.allServers);
    } catch (error) {
      console.log(error);
    }
  };

  const onlineServersOnlyTog = () => {
    if (!onlineServersOnlyTogWatch) {
      setManipulatedServers(allServers.filter((server) => server.active === 1));
      setOnlineServersOnlyTogWatch(!onlineServersOnlyTogWatch);
    } else {
      setManipulatedServers([]);
      setOnlineServersOnlyTogWatch(!onlineServersOnlyTogWatch);
    }
    console.log("running");
    setUpdate(!update);
  };

  const sortByServerCreation = () => {
    setManipulatedServers(
      allServers.sort((a, b) => {
        return (
          new Date(b.creation_datetime).getTime() -
          new Date(a.creation_datetime).getTime()
        );
      })
    );

    setUpdate(!update);
  };

  const classes = useStyles();

  const [allServers, setAllServers] = useState([]);
  const [manipulatedServers, setManipulatedServers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [onlineServersOnlyTogWatch, setOnlineServersOnlyTogWatch] =
    useState(false);
  // const [sortByServerCreationMoment, setSortByServerCreationMoment] = useState(false)

  useEffect(() => {
    getAllServers();
    console.log(manipulatedServers);
  }, [update]);

  return (
    <div
    className={classes.root}
    >
      <div className={classes.btnDiv}>
        <div
        className={classes.checkbox}
        >

        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => onlineServersOnlyTog()}
        />
        <span>Online Only</span>
        </div>
        <button
          onClick={() => {
            sortByServerCreation();
            setOnlineServersOnlyTogWatch(false)
          }}
        >
          Sort By Lastly Created
        </button>
      </div>

      <Grid container spacing={4} className={classes.listContainer}>
        {(manipulatedServers.length === 0 && !onlineServersOnlyTogWatch)
          ? allServers.map((server) => (
              <Grid item xs={12} key={server.id}>
                <ServerCard server={server} />
              </Grid>
            ))
          : manipulatedServers.map((server) => (
              <Grid item xs={12} key={server.id}>
                <ServerCard server={server} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
}
