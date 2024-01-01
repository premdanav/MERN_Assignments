import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearAuth } from "../slices/authSlice.js";

const LogoutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //clear auth in redux
    dispatch(clearAuth());
    // console.log("cleared");
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Logout Page
      </Typography>

      <Typography variant="body1" gutterBottom>
        You have been logged out successfully.
      </Typography>
      <Typography variant="body1">
        <Link component={RouterLink} to="/login" color="primary">
          Log in again
        </Link>
        {" or "}
        <Link component={RouterLink} to="/register" color="primary">
          create a new account
        </Link>
      </Typography>
    </Container>
  );
};

export default LogoutPage;
