import React, { useEffect } from "react";
import { Container, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth, clearAuth } from "../slices/authSlice";

const Home = () => {
  //get token
  const token = useSelector((state) => state.auth.token);
  //check authentication
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(`from home page is authnitcated ${isAuthenticated}`);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //logout btn
  const handleLogout = (e) => {
    dispatch(clearAuth());
    navigate("/logout");
  };

  //dispatch authobj to redux
  useEffect(() => {
    dispatch(
      setAuth({
        token,
        isAuthenticated,
      })
    );
  }, [dispatch, token, isAuthenticated]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Home Page
      </Typography>

      {isAuthenticated ? (
        <div>
          <Typography variant="body1">
            Welcome! This is your home page.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your favorite dish: {"logic incomplete"}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Typography variant="body1">
          You need to log in to access this page.
        </Typography>
      )}
    </Container>
  );
};

export default Home;
