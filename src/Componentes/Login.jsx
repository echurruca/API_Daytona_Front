import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Avatar,
  Paper,
  CssBaseline,
  Grid2
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Por favor complete todos los campos.");
      return;
    }
    setError("");

    // Simular llamada al backend o ejecutar función onLogin
    onLogin(formData); // Pasa los datos al padre o realiza una acción
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Accesorios Daytona
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: "100%" }}
        >
          <TextField
            required
            fullWidth
            id="username"
            label="Usuario"
            name="username"
            autoComplete="username"
            autoFocus
            margin="normal"
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Contraseña"
            name="password"
            type="password"
            autoComplete="current-password"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Sesión
          </Button>
          {/*<Grid2 container>
             <Grid2 item xs>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => alert("Recuperar contraseña")}
              >
                ¿Olvidaste tu contraseña?
              </Typography>
            </Grid2>
            <Grid2 item>
              <Typography
                variant="body2"
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => alert("Crear cuenta nueva")}
              >
                ¿No tienes cuenta? Regístrate
              </Typography>
            </Grid2>
          </Grid2> */}
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
