import React, { useEffect, useState } from 'react'
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    right: "20px",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
    

export default function ToggleButton({server}) {

    const classes = useStyles();


    const serverStatusTog = async () => {
        try {
          const res = await fetch(`http://localhost:666/api/server/status/`, {
            method: "POST",
            headers: {
                "content-type":"application/json",
            },
            body:JSON.stringify({
              id: server.id,
                active: tog
            })
          });
          if(res.status===200){
              setTog(!tog)
              console.log(res.status)
              console.log(tog)
              
          }

        } catch (error) {
          console.log(error);
        }
      };

      const [tog, setTog] = useState(!!server.active)
      const [update, setUpdate] = useState(false)

      useEffect(() => {
          
      }, [update])

    return (
        <div
        className={classes.root}
        >
            <Switch
            checked={tog}
            onChange={()=>serverStatusTog()}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
            />


    {/* <input type="checkbox" checked={tog}
            onChange={()=>serverStatusTog()}
    
    /> */}
        </div>
    )
}
