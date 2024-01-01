import React from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Link,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  //navigate
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  //adding all the details of the page in state
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    favouriteDish: "",
  });

  //making object from input fields
  const inputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(`form data is  ${inputData}`);
  };

  //saving data in db
  const saveData = async () => {
    try {
      await axios
        .post("http://127.0.0.1:5000/auth/register", inputData)
        .then((res) => {
          console.log(res);
          // console.log(inputData.username);
          // console.log(inputData.email);
          // console.log(inputData.password);
          // console.log(inputData.age);
          // console.log(inputData.favouriteDish);
        });

      //navigating to login page after registering
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  useEffect(() => {
    //prevent accessing this page is already logged in
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  //on submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <AccountCircleIcon style={{ fontSize: "4rem", margin: "1rem" }} />
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                onChange={inputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                onChange={inputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                onChange={inputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                onChange={inputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Favorite Dish"
                name="favouriteDish"
                onChange={inputChange}
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 3 }}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
