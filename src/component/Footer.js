import { Typography } from "@mui/material";
import React from "react";
import { Container } from "reactstrap";
import * as Icon from "react-icons/md";

export default function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <Container
        fluid
        className="p-2 mx-auto"
        style={{ background: "#3346FF" }}
      >
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          color="white"
          className="text-center"
        >
          <br />
          <Icon.MdCopyright /> {getYear()}
        </Typography>
      </Container>
    </>
  );
}
