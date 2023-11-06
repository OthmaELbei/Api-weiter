import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useEffect, useState } from "react";
// axios

// import Matreial Ui
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

import axios from "axios";
import moment from "moment";
import "moment/min/locales";
import { useTranslation } from "react-i18next";
moment.locale("ar");

const theme = createTheme({
  typography: {
    fontFamily: ["CEIRO"],
  },
});

let cancelAxios = null;

function App() {
  const { t, i18n } = useTranslation();

  const [dateAndTimp, setDateAndTimp] = useState("");
  const [temp, setTemp] = useState({
    number: null,
    descraption: "",
    min: null,
    max: null,
    icon: null,
  });
  useEffect(() => {
    i18n.changeLanguage("ar");
  }, []);
  useEffect(() => {
    setDateAndTimp(moment().format("MMMM Do YYYY, h:mm:ss a"));
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-7.6&appid=bc4a45da25486badc3935d5b137c9e81",
        {
          cancelTaken: new axios.CancelToken((c) => {
            cancelAxios = c;
          }),
        }
      )
      .then(function (response) {
        // handle success
        const responsTemp = Math.round(response.data.main.temp - 272.15);
        const min = Math.round(response.data.main.temp_min - 272.15);
        const max = Math.round(response.data.main.temp_max - 272.15);
        const description = response.data.weather[0].description;
        const responseIcon = response.data.weather[0].icon;

        console.log(response);
        setTemp({
          number: responsTemp,
          description: description,
          min: min,
          max: max,
          icon: ` https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    return () => {
      console.log("canceling");
      cancelAxios();
    };
  }, []);

  return (
    <div className="App">
      <typography theme={theme}>
        <Container maxWidth="sm">
          {/* CONTENT CONTAINER */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* Card */}
            <div
              style={{
                background: "#02457A",
                padding: "15px",
                borderRadius: "8px",
                color: "white",
                boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
              }}
            >
              {/* content */}
              <div>
                {/* CITY AND time */}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "end",
                    direction: "rtl",
                  }}
                >
                  <Typography
                    style={{ marginRight: "20px", fontWeight: "900" }}
                    variant="h2"
                  >
                    {t("Settat")}
                  </Typography>
                  <Typography style={{ marginRight: "20px" }} variant="h6">
                    {dateAndTimp}
                  </Typography>
                </div>

                <hr />

                {/* degeree & Descraption */}
                <div
                  style={{
                    display: "flex",
                    direction: "rtl",
                    justifyContent: "space-between",
                  }}
                >
                  {/* TEMP */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography style={{ textAlign: "right" }} variant="h1">
                        {temp.number}
                      </Typography>

                      <img src={temp.icon} />
                    </div>
                    {/* == TEMP ==*/}
                    <Typography
                      style={{ textAlign: "right", fontSize: "16px" }}
                      variant="h6"
                    >
                      {temp.description}
                    </Typography>
                    {/* MIN & MAX */}
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <h5> {temp.min}: الصغرة </h5>
                      <h5 style={{ marginLeft: "10px" }}> / </h5>

                      <h5> {temp.max}: الكبرة</h5>
                    </div>
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <CloudIcon style={{ fontSize: "200px" }} />
                  </div>
                </div>
                {/* degeree & Descraption */}

                {/*== CITY AND time == */}
              </div>
              {/*== content == */}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",

                marginTop: "10px",
                width: "70%",
                direction: "rtl",
              }}
            >
              <Button style={{ color: "white" }} variant="text">
                الانجلزية
              </Button>
            </div>
            {/* == Card ==*/}
          </div>
          {/* == CONTENT CONTAINER ==*/}
        </Container>
      </typography>
    </div>
  );
}

export default App;
