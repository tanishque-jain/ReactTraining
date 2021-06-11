import React from "react";
import {Button, 
    FormControlLabel, 
    makeStyles, 
    Switch , 
    Typography, 
    TextField,
    List,
    Divider,
    ListItem,
    AppBar, 
    Toolbar,
    Avatar,
    MobileStepper} from "@material-ui/core";

import ControlCameraOutlinedIcon from '@material-ui/icons/ControlCameraOutlined';
import FiberSmartRecordOutlinedIcon from '@material-ui/icons/FiberSmartRecordOutlined';
import FilterBAndWOutlinedIcon from '@material-ui/icons/FilterBAndWOutlined';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import GpsFixedOutlinedIcon from '@material-ui/icons/GpsFixedOutlined';
import GamepadOutlinedIcon from '@material-ui/icons/GamepadOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import LaptopMacOutlinedIcon from '@material-ui/icons/LaptopMacOutlined';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from '@material-ui/icons/Language';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { green, blue } from "@material-ui/core/colors";
import Country from "./country";
import Table from "./table1"
import Table2 from "./table2"
import FooterList from "./listFooter"
import AboutContent from "./aboutContent";
import Listfooter from "./listFooter";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import RedditIcon from "@material-ui/icons/Reddit";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import AddIcon from '@material-ui/icons/Add';
import Link from '@material-ui/core/Link';


const greenTheme = createMuiTheme({ palette: { primary: green } })
const blueTheme = createMuiTheme({ palette: { primary: blue } })
const inr = [
  {
    label: "AED",
  },
  {
    label: "AEON",
  },
  {
    label: "AFN",
  },
  {
    label: "ALL",
  },
];



const styles = makeStyles({
  addbar:{
      backgroundColor:"white",
      width:"100%",
      height:"80px",
      position:"fixed",
  },

  toolbar:{
    backgorundColor:"white",
    display:"flex",
    justifyContent:"space-between",
  },
  
  switch:{
    fontSize:"0.8rem",
    color:"black",
  },

  button:{
    
    padding:"4px 16px",
    fontSize:"13px",
    fontWeight:"500",
    margin:"0 5px",
  },
  mainWrapper:{
    backgroundColor:"#f0f5f5",
  },
  list:{
    backgroundColor:"#1565c0",
    color:"white",
    height:"100%",
    width:"5%",
    position:"static",
  },

  listContainer:{
    margin:"30px 0 0 0 ",
  },

  drawer:{
    backgroundColor:"#1565c0",
    height:"100vh",
    position:"fixed"
    

  },

  formmain: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  button1: {
    backgroundColor: "#388539",
    color:"white",
    margin: "20px",
  },
  button2: {
    backgroundColor: "#0000cc",
    color:"white",
    margin: "20px",
  },
  form: {
    textAlign: "center",
    margin: "110px 2px 20px 90px",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);",
    padding: "20px 20px",
    backgroundColor: "white",
  },
  amount:{
    width:"300px",
    position:"relative",
    right:"2px",
  },
  form2: {
  
    textAlign: "center",
    margin: "110px 2px 20px 10px",
    boxShadow: "0 0 0 1px rgb(63 63 68 / 5%), 0 1px 3px 0 rgb(63 63 68 / 15%);",
    padding: "20px 20px",
    backgroundColor: "white",
  },

  typography: {
    color: "#424242",
    fontFamily: "Roboto",
  },

  inputContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "15px",
    marginBottom: "10px",
  },
  buttonBuy: {
    backgroundColor: "#1565c0",
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
  },
  buttonSell: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
  },
  search: {
    backgroundColor: "#1565c0",
    fontSize:"12px",
    fontWeight:"600",
    padding:"15px",
  },

  table:{
    width:"97%",
    margin:"20px 0 0 45px"
  },

  news:{
    margin:"100px 0px 0px 20px",
  },
  footer: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
  listmain: {
    display: "flex",
    margin: "20px",
  },
  avatar: { margin: "0 10px" },
  button: { margin: "0 10px", color: "#1565c0", fontWeight: "bold" },
  icons: {
    display: "flex",
    margin: "0 20px",
  },
  icon:{
    margin: "0 8px",
  },  
  
  news: {
    color: "#424242",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "#fff",
    width: "70%",
    margin: "20px auto",
    padding: "30px 40px 0 30px",
  },
  latestnews: {
    display: "flex",
  },
  heading: {
    fontWeight: "600",
    fontSize: "20px",
    margin: "0 10px",
  },
  about: {
    lineHeight: "1.2 !important",
    fontSize: "22px",
  },
  time: {
    fontSize: "12px",
    fontWeight: "500",
  },
  content: {
    fontSize: "14px",
    padding: "20px 0",
  },
  stepper: {
    margin: "20px 0",
  },

  para:{
    fontSize:"26px",
    color:"	 #334d4d",
},
post:{
    margin:"30px 10px 30px 250px"
},
postBtn:{
    border:"1px solid #b3ffb3",
    backgroundColor:"#e6ffe6",
},
buyLink:{
    color:"#00b300",
    textDecoration:"underlined",
},
plus:{
    color:"#00b300",
    position:"relative",
    top:"7px",
    right:"2px",
}
  
 
});

export default function Assignment5() {
  const classes = styles();
  return (
    <div className={classes.mainWrapper}>
    <AppBar position="static" className={classes.addbar}>
      <Toolbar className={classes.toolbar}>
          <div>
            <FormControlLabel
            value="bottom"
            control={
              <Switch
              color="primary"
              size="small"
              checked={true}
              className={classes.switch}
              />
            }
            label="On"
            labelPlacement="bottom"
            />
          </div>
          <div>
          <MuiThemeProvider theme={greenTheme}>
            <Button
            vaiant="contained"
            size="large"
            startIcon={<PersonAddIcon/>}
            className={classes.button1}
            >Sign UP Free</Button>
            </MuiThemeProvider>
            
            <MuiThemeProvider theme={blueTheme}>
            <Button
            vaiant="contained"
            className={classes.button2}
            size="large"
            startIcon={<FingerprintOutlinedIcon/>}
            >Login</Button>
            </MuiThemeProvider>
          </div>  
      </Toolbar>
    </AppBar>

    <div className={classes.drawer}>
      <div className={classes.listContainer}>
      <List className={classes.list}>
        <ListItem button>
        <AddCircleOutlinedIcon fontSize={"large"}/>
        </ListItem>
        <ListItem button>
          <ControlCameraOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FiberSmartRecordOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FilterBAndWOutlinedIcon  fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FingerprintOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <GpsFixedOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <GamepadOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <GroupAddOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <LanguageOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <LaptopMacOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <GpsFixedOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FilterBAndWOutlinedIcon  fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <FiberSmartRecordOutlinedIcon fontSize={"large"}/>

        </ListItem>
        <ListItem button>
          <ControlCameraOutlinedIcon fontSize={"large"}/>

        </ListItem>
      </List>
      </div>
      </div>
      <div className={classes.formmain}>
        <div className={classes.form}>
          <div className={classes.inputContainer}>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonBuy}
                startIcon={<ShoppingCartIcon fontSize={"large"} />}
              >
                Buy
              </Button>
            </div>
            <div>
              <Button
                variant="contained"lab
                className={classes.buttonSell}
                startIcon={<ShoppingCartIcon fontSize={"large"} />}
              >
                sell
              </Button>
            </div>
          </div>
          <div className={classes.inputContainer}>
            <div>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                className={classes.amount}
              />
            </div>
            <div>
              <TextField
                id="outlined-select-currency-native"
                fullWidth={true}
                placeholder={"INR"}
                select
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {inr.map((option) => (
                  <option>{option.label}</option>
                ))}
              </TextField>
            </div>
          </div>
          <div className={classes.inputContainer}>
            <div>
            <Country/>
            </div>
            <div>
              
              <TextField
                id="outlined-select-currency-native"
                fullWidth={true}
                placeholder={" All India Offers"}
                select
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
             <LanguageIcon/>{" All India Offers"}
              </TextField>
            </div>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              className={classes.search}
              startIcon={<SearchIcon />}
              fullWidth={true}
            >
              search
            </Button>
          </div>
        </div>
        <div className={classes.form2}>
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Buy Monero."}
          </Typography>
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Sell Monero."}
          </Typography>{" "}
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Cash or online."}
          </Typography>{" "}
          <Typography variant={"h4"} className={"classes.typography"}>
            {"Anywhere."}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button1}
            size="large"
            startIcon={<PersonAddIcon />}
          >
            Sign up free
          </Button>
        </div>
      </div>
      <div className={classes.table}>
            <div className={classes.table} >
            <Typography variant={"h4"} className={"classes.typography"}>
            {"Buy Monero Online in India"}
          </Typography>
            <Table/>
            </div>
            <div className={classes.table} >
            <Typography variant={"h4"} className={"classes.typography"}>
            {"Sell Monero Online in India"}
          </Typography>
            <Table2/>
            </div>

            <div className={classes.table} >
            <Typography variant={"h4"} className={"classes.typography"}>
            {"Sell Monero For Cash in India"}
          </Typography>
            <Table/>
            </div>
      </div>

      <div>
      <div className={classes.post}>
        <Typography className={classes.para}>You can be the first one to <Button varient="outlined" className={classes.postBtn} startIcon={<AddIcon fontSize={"large"} />}>Post An Ad</Button> in the following categories:</Typography>
        <Typography><AddIcon className={classes.plus}/><Link className={classes.buyLink}>Buy Monero with cash in India</Link></Typography>
      </div>
      </div>
      <div className={classes.about}>
      <div className={classes.about}>
      <Divider className={classes.divider} variant="middle" />
      <AboutContent
        heading={"Protect your right to privacy - buy Monero."}
        content={
          "If you are concerned about the invasion of privacy - the best cryptocurrency to invest in is XMR. Monero is an untraceable coin developed with privacy by design in mind.Where to buy Monero? LocalMonero is the biggest, most trusted and well-established P2P Monero exchange in the XMR community. We have no KYC checks - you can simply buy Monero anonymously without ID verification with PayPal, credit card, gift card, cash by mail or convert bitcoin to Monero - our platform supports any payment method."
        }
      />

      <AboutContent
        heading={
          "Sell Monero to people worldwide or locally - support the community and make money with cryptocurrency."
        }
        content={
          "LocalMonero is the best place to sell XMR - whether it's your mining rewards, Monero price arbitrage, or you simply see the value in servicing the community. The escrow system and our secure Monero wallet provide you with a robust XMR trading experience - so you can convert XMR to USD, EUR, AUD, GBP or any other local currency with peace of mind."
        }
      />
    </div>
      </div>
      <div className={classes.news}>
      <div>
      <Divider variant="middle" />
      <div className={classes.news}>
        <div className={classes.latestnews}>
          <NoteAddIcon color={"primary"} />
          <Typography className={classes.heading} variant={"h6"}>
            {"Latest News"}
          </Typography>
        </div>
        <Typography variant={"h5"} className={classes.about}>
          {
            "LocalMonero/AgoraDesk now allows you to import reputation from LocalBitcoins and/or Paxful!"
          }
        </Typography>
        <Typography variant={"h6"} className={classes.time}>
          {"2020-12-06 12:00 UTC"}
        </Typography>
        <br />
        <Typography variant={"p"} className={classes.content}>
          {
            "If you have an account on LocalBitcoins or Paxful and you'd like to import the reputation you have worked for while trading on these platforms, you can now do so! To do it, simply open your settings page and navigate to the reputation import tab. Your LocalBitcoins/Paxful trades will be added to your total trade count and your other stats will be displayed on your user page."
          }
        </Typography>

        <MobileStepper
          variant="dots"
          steps={8}
          position="static"
          className={classes.stepper}
          nextButton={
            <Button size="small">
              {"Next"}
              <KeyboardArrowRightIcon />
            </Button>
          }
          backButton={
            <Button size="small">
              <KeyboardArrowLeftIcon />
              {" Back"}
            </Button>
          }
        />
      </div>
      <Divider className={classes.divider} variant="middle" />
    </div>
      </div>
      <div className={classes.footerList}>
        <FooterList/>
      </div>
      <div className={classes.footer}>
      <div className={classes.footer}>
      <Typography variant="p">{"© 2021 Blue Sunday Limited"}</Typography>
      <div className={classes.listmain}>
        <Listfooter
          val1={"About us"}
          val2={"Terms of Condition"}
          val3={"Fees"}
          val4={"Contact us"}
        />
        <Listfooter
        val1={"Security bounty"}
        val2={"Affiliate"}
        val3={"Statistics"}
        val4={"API docs"}
          
        />
        <Listfooter
          val1={"LocalBitcoins Alternative"}
          val2={"Monero News"}
          val3={"Knowledge"}
          val4={"Monero Block Explorer"}
        />
        <Listfooter
          val1={"Tor hidden service"}
          val2={"I2P"}
          val3={"B32 I2p"}
          val4={"AgoraDesk"}
        />
      </div>
      <Button className={classes.button}>
        <Avatar
          className={classes.avatar}
          alt={"Flag"}
          src={"./Images/Assignment3/US.png"}
        />
        {"Change language"}
      </Button>
      <div className={classes.icons}>
        <TwitterIcon className={classes.icon} />
        <FacebookIcon className={classes.icon} />
        <RedditIcon className={classes.icon} />
        <TelegramIcon className={classes.icon} />
        <GitHubIcon className={classes.icon} />
      </div>
    </div>
      </div>
      </div>
      
  );
}









