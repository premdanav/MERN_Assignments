import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { setAuth } from "../slices/authSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //creating state
  const [registeredData, setRegisteredData] = useState({
    email: "",
    password: "",
  });

  //making obj from entered filed
  const inputChange = (e) => {
    setRegisteredData({ ...registeredData, [e.target.name]: e.target.value });
    // console.log(`form data is  ${registeredData}`);
  };

  //get customer from db
  const loginCustomer = async () => {
    try {
      await axios
        .post("http://127.0.0.1:5000/auth/login", registeredData)
        .then((res) => {
          const data = res.data;
          // console.log(`data is ${data}`)
          //creat authObj
          const authObj = {
            token: data.token,
            isAuthenticated: true,
          };
          //dispatch
          dispatch(setAuth(authObj));
          navigate("/home");
        });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginCustomer();
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <LockOutlinedIcon style={{ fontSize: "4rem", margin: "1rem" }} />
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            onChange={inputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={inputChange}
            margin="normal"
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 3 }}
          >
            Log in
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                Don't have an account? Register
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
