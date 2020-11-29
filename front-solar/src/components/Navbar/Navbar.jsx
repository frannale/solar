import { Link } from "react-router-dom";
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import CurrentWeather from './CurrentWeather';
import SendFileButton from './SendFileButton';
import { Grid, Button, AppBar, Toolbar} from "@material-ui/core";

const styles = theme =>({

  row:{
    flexGrow:1
  },
  grow:{
    flexGrow:1,
  },
  container:{
    width:'90%',
    margin:"auto"
  },
  buttonFontSize:{
    fontSize:"15px",
    color:"#a1a1a1",
    padding: " 10px 30px"
  },

  AppBar:{
    backgroundColor:"#fff",
    backgroundSize:"cover"
  },
  mainLogo:{
    color: "#a1a1a1",
    justifyContent:"left",
    '&:hover':{
      background:"transparent"
    }
  },

  avatar:{
    height:"100%",
    borderRadius:0,
  },
  root:{
    paddingBottom: "30px"
  },

  loginButton:{
    background:"#389393",
    marginLeft: '20px',
    color:"#fff",
    marginTop: "15px",
    borderRadius:"25px",
    padding:"10px 30px",    

    '&:hover':{
      background: '#db6400',
      boxShadow: "0px 2px 10px #888888"
    }
  }

});

@withStyles(styles)

class Navbar extends React.Component{

  render(){

    const {classes} = this.props;

    return(
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.AppBar}>
          <Grid item sm={12} xs={12} className={classes.container}>
            <Toolbar>
              <Grid className={classes.grow}>
                <CurrentWeather/>
              </Grid>
              <Button color="inherit" component={Link} to="/historico" className={classes.buttonFontSize}>Historico</Button>
              <Button color="inherit" component={Link} to="/listado" className={classes.buttonFontSize}>Listado</Button>
              <Button color="inherit" component={Link} to="/grafico" className={classes.buttonFontSize}>Grafico</Button>
              <SendFileButton style={classes.loginButton}/>            
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
      
    )
  }
}

export default Navbar;
