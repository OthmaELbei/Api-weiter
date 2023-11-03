import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import Matreial Ui
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

const theme = createTheme({
  typography: {
    fontFamily: ["CEIRO"],
  },
});

function App() {
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
                    سطات
                  </Typography>
                  <Typography style={{ marginRight: "20px" }} variant="h6">
                    03/11/23 الاربعاء
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
                    <div>
                      <Typography style={{ textAlign: "right" }} variant="h1">
                        36
                      </Typography>
                      {/* TOOD/TEMP IMAGE */}
                    </div>
                    {/* == TEMP ==*/}
                    <Typography
                      style={{ textAlign: "right", fontSize: "16px" }}
                      variant="h6"
                    >
                      broken clouds
                    </Typography>
                    {/* MIN & MAX */}
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <h5 style={{ marginLeft: "10px" }}> 34: الصغرة </h5>
                      <h5 style={{ marginLeft: "10px" }}> / </h5>

                      <h5> 44: الكبرة</h5>
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
