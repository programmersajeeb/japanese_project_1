import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "../../../assets/css/golobal.css";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const SamplePage = () => {
  return (
    <>
      <Navigation />
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage:
            "url(https://res.cloudinary.com/dshzafyu9/image/upload/v1651117911/luminous/ny_office_bg_ti7pet.jpg?fbclid=IwAR3FrJj6qZhYQdW7LDGhs7XgeGXLo6a3vtM0p23klVYo6twz5KcTIi6Wz_c)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            sx={{ textAlign: "center", fontSize: "45px", color: "white" }}
          >
            Obtained license for worker dispatching and paid employment agency
            business on August 1, 2021
          </Typography>
        </Container>
      </Box>

      {/* content  */}
      <Box sx={{}}>
        <Container>
          <Grid>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ marginTop: "70px", fontSize: "30px", marginBottom: "30px" }}
            >
              Obtained license for worker dispatching and paid employment agency
              business on August 1, 2021
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ marginBottom: "30px" }}
            >
              Luminous Co., Ltd
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ marginBottom: "30px" }}
            >
              Paid Employment Agency Business License Number: 13-U-313433
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ marginBottom: "30px" }}
            >
              Worker dispatch business license number: faction 13-315564
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ marginBottom: "30px" }}
            >
              * We are very sorry for the stakes holders who have contracted
              after obtaining the permit. Now that we have obtained our license,
              we would like to introduce excellent human resources at any time.
              In addition, please feel free to contact us for new transactions
              and contract requests.
            </Typography>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default SamplePage;
