import React from 'react';
import { Card, CardContent, Typography, Grid2, Divider, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ArticuloDetalle = ({ articulo, onCancelar }) => {
  const {
    id,
    descripcion,
    codProve,
    costo,
    desc1,
    desc2,
    estimado,
    fechaAct,
    isActive,
    medida,
    observaciones,
    precio1,
    precio2,
    precio3,
    std,
    sublinea,
    margen,
    marcasComp,
    lineasComp,
    prove,
  } = articulo;

  return (
    <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '20px', borderRadius: '12px', boxShadow: 3, position: 'relative' }}>
      
      {/* Botón de cierre en la esquina superior derecha */}
      <IconButton
        aria-label="close"
        onClick={onCancelar}
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>

      <CardContent>
        {/* Sección de Información General */}
        <Box textAlign="center" marginBottom={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Información General
          </Typography>
        </Box>
        <Divider sx={{ marginBottom: 2 }} />

        <Grid2 container spacing={2}>
          <Grid2 item xs={6}>
            <Typography variant="body1"><strong>ID:</strong> {id}</Typography>
            <Typography variant="body1"><strong>Descripción:</strong> {descripcion}</Typography>
            <Typography variant="body1"><strong>Código Proveedor:</strong> {codProve}</Typography>
            <Typography variant="body1"><strong>Costo:</strong> ${costo}</Typography>
          </Grid2>
          <Grid2 item xs={6}>
            <Typography variant="body1"><strong>Precio 1:</strong> ${precio1}</Typography>
            <Typography variant="body1"><strong>Precio 2:</strong> ${precio2}</Typography>
            <Typography variant="body1"><strong>Precio 3:</strong> ${precio3}</Typography>
            <Typography variant="body1"><strong>Margen:</strong> {margen}%</Typography>
          </Grid2>
        </Grid2>

        <Divider sx={{ marginY: 1 }} />
        <Grid2 container spacing={2} sx={{ width: '100%' }}>
    {/* Sección de Marca */}
    <Grid2
      xs={6}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Marca
      </Typography>
      <Divider sx={{ width: '100%', marginBottom: 1 }} />
      <Box textAlign="left" width="100%">
        <Typography variant="body1"><strong>ID:</strong> {marcasComp.id}</Typography>
        <Typography variant="body1"><strong>Nombre:</strong> {marcasComp.nombre}</Typography>
      </Box>
    </Grid2>
    <Divider orientation="vertical" flexItem />
    {/* Línea Vertical */}
    <Divider orientation="vertical" flexItem sx={{ height: '100%' }} />

    {/* Sección de Línea */}
    <Grid2
      xs={6}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Línea
      </Typography>
      <Divider sx={{ width: '100%', marginBottom: 1 }} />
      <Box textAlign="left" width="100%">
        <Typography variant="body1"><strong>ID:</strong> {lineasComp.id}</Typography>
        <Typography variant="body1"><strong>Nombre:</strong> {lineasComp.nombre}</Typography>
      </Box>
    </Grid2>
  </Grid2>

        <Divider sx={{ marginY: 3 }} />

        {/* Sección de Proveedor */}
        <Box textAlign="center" marginBottom={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Proveedor
          </Typography>
        </Box>
        
        <Grid2 container spacing={2}>
          <Grid2 item xs={6}>
            <Typography variant="body1"><strong>Nombre:</strong> {prove.nombreProveedor}</Typography>
            <Typography variant="body1"><strong>Código:</strong> {prove.codigo}</Typography>
            <Typography variant="body1"><strong>CUIT:</strong> {prove.cuit}</Typography>
            <Typography variant="body1"><strong>Teléfono:</strong> {prove.telefono}</Typography>
          </Grid2>
          <Grid2 item xs={6}>
            <Typography variant="body1"><strong>Dirección:</strong> {prove.direccion}</Typography>
            <Typography variant="body1"><strong>Localidad:</strong> {prove.localidad}</Typography>
            <Typography variant="body1"><strong>Provincia:</strong> {prove.pcia}</Typography>
            <Typography variant="body1"><strong>Observaciones:</strong> {prove.observaciones || 'N/A'}</Typography>
          </Grid2>
        </Grid2>

      </CardContent>
    </Card>
  );
};

export default ArticuloDetalle;
