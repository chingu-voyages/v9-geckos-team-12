import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { styled } from "@material-ui/styles";

const MyTypoGraphy1 = styled(Typography)({
  border: "1px solid red",
  borderRadius: 3,
  fontWeight: "bold",
  padding: "1rem",
  marginBottom: "1rem",
  marginTop: "1rem",
  maxWidth: "50rem;",
  textAlign: "center",
  margin: "auto"
});

const MyTypoGraphyTitle = styled(Typography)({
  fontFamily: "Arial",
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: "bold",
  padding: "1rem",
  marginBottom: "1rem",
  marginTop: "1rem",
  textShadow:
    "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"
});

const MyMainPaper = styled(Paper)({
  paddingBottom: "1rem"
});

const HeaderAboutUs = () => {
  return (
    <MyMainPaper>
      <Box>
        <MyTypoGraphyTitle>Who We ARE </MyTypoGraphyTitle>
        <MyTypoGraphy1>
          Founded In June 2005 and based in New York. Our business is a trusted
          shop for everyone on the Planet. Whether you want shoes, bags, sweters
          .. remember, we always focus on quality for YOUR comfort and
          convenient. <br />
          <br />
          We do have shops on all over planet, in more than 10 000 cities and
          over in 150 countries. Our customer service is always waiting for your
          Questions and concerns. Remember we do deliver You only the best
          quality and in the fastest way on Earth !!!.
        </MyTypoGraphy1>
        <Box />
      </Box>
    </MyMainPaper>
  );
};

export default HeaderAboutUs;
