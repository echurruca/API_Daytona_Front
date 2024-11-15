import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, 
  IconButton, Collapse, Button 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importar los componentes específicos
import MarcaArticulo from './Productos/Marca/MarcaArticulo';
import LineaArticulo from './Productos/Linea/LineaArticulo';
import Articulo from './Productos/Articulo/Articulo';
import MarcaArticulosMinimos from './ProductosMinimos/MarcaArticulosMinimos';
import LineaArticulosMinimos from './ProductosMinimos/LineaArticulosMinimos';
import ArticulosMinimos from './ProductosMinimos/ArticulosMinimos';
import Cliente from './Clientes/Cliente'
import ClienteMinimo from './ClientesMinimos/ClienteMinimo';
import Proveedor from './Proveedores/Proveedor'
import Buscador from './Buscador/Buscador';

const NavDrawer = () => {
  //Declaración de los estados de los componentes
  //El manejador del menú desplegable
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  //El manejador del menú Productos
  const [openSubmenuProductos, setopenSubmenuProductos] = useState(false);
  //El manejador del menú Productos Mínimos
  const [openSubmenuProductosMinimos, setopenSubmenuProductosMinimos] = useState(false);
  //El manejador del menú Clientes
  const [openSubmenuClientes, setopenSubmenuClientes] = useState(false);
  //El manejador del menú ClientesMinimo
  const [openSubmenuClientesMinimos, setopenSubmenuClientesMinimos] = useState(false);
  //El manejador del menú Proveedores
  const [openSubmenuProveedores, setopenSubmenuProveedores] = useState(false);
  //El manejador del menú Buscador
  const [openSubmenuBuscador, setopenSubmenuBuscador] = useState(false);


  //El manejador del menú Compras
  // const [openSubmenuCompras, setOpenSubmenuCompras] = useState(false);
  // const [openOrdenCompra, setOpenOrdenCompra] = useState(false);
  
  const [openSubmenuCompras, setOpenSubmenuCompras] = useState(false);
  const [openOrdenCompra, setOpenOrdenCompra] = useState(false);
  const [openProveedor, setOpenProveedor] = useState(false);

  //Declaración de las subcategorías
  //Subcategoría de los Clientes
  const subcategoria_Buscador = [
    { name: 'Buscador', path: '/Buscador' },
  ];
  //Subcategoría de los Productos
  const subcategoria_Productos = [
    { name: 'Marca Artículo', path: '/marca-articulo' },
    { name: 'Línea Artículo', path: '/linea-articulo' },
    { name: 'Artículo', path: '/articulo' },
  ];
  
  //Subcategoría de los Productos Mínimos
  const subcategoria_ProductosMinimos = [
    { name: 'Marca', path: '/productos-minimos/marca' },
    { name: 'Línea', path: '/productos-minimos/linea' },
    { name: 'Artículo', path: '/productos-minimos/articulo' },
  ];
  
  //Subcategoría de los Clientes
  const subcategoria_Clientes = [
    { name: 'Cliente', path: '/Cliente' },
  ];
  //Subcategoría de los ClientesMinimos
  const subcategoria_Clientes_Minimos = [
    { name: 'Cliente Minorista', path: '/ClienteMinorista' },
  ];
   //Subcategoría de los Clientes
   const subcategoria_Proveedores = [
    { name: 'Proveedor', path: '/Proveedor' },
  ];

  //Subcategoría de Compras
  // const subcategoria_Compras = [
  //   { 
  //     name: 'Orden de Compra', 
  //     subcategories: [
  //       { name: 'Débito', path: '/compras/orden/debito' },
  //       { name: 'Efectivo', path: '/compras/orden/efectivo' },
  //     ],
  //   },
  //   { 
  //     name: 'Proveedor', 
  //     subcategories: [{ name: 'Ramo', path: '/compras/proveedor/ramo' }],
  //   },
  // ];

  const ordenSubcategorias = [
    { name: 'Débito', path: '/compras/orden/debito' },
    { name: 'Efectivo', path: '/compras/orden/efectivo' },
  ];

  const proveedorSubcategorias = [
    { name: 'Ramo', path: '/compras/proveedor/ramo' },
  ];


  //Función de orden suerior que espera el evento para abrir el menú
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && event.key === 'Tab' ) {
      return;
    }
    setIsDrawerOpen(open);
  };

 
  return (
    <Router>
      {/* AppBar con el botón para abrir el menú */}
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }} >
            Menú
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer temporal que se puede abrir/cerrar */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List sx={{ width: 250 }}>

            {/* buscador */}
            <ListItem button onClick={() => setopenSubmenuBuscador(!openSubmenuBuscador)}>
           
           <ListItemText primary="Buscador" />
           {openSubmenuBuscador ? <ExpandLess /> : <ExpandMore />}
         </ListItem>
         <Collapse in={openSubmenuBuscador} timeout="auto" unmountOnExit>
           <List component="div" disablePadding>
             {subcategoria_Buscador.map((subcategory, index) => (
               <ListItem 
                 button 
                 key={index} 
                 component={Link} 
                 to={subcategory.path} 
                 sx={{ pl: 4 }}
                 onClick={() => {setopenSubmenuBuscador(!openSubmenuBuscador),setIsDrawerOpen(false)} } // Cerrar Drawer al hacer clic
               >
                 <ListItemText primary={subcategory.name} />
               </ListItem>
             ))}
           </List>
         </Collapse>
          {/* Productos con subcategorías */}
          <ListItem button onClick={()=>setopenSubmenuProductos(!openSubmenuProductos)}>
            <ListItemText primary="Productos" />
            {openSubmenuProductos ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubmenuProductos} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subcategoria_Productos.map((subcategory, index) => (
                <ListItem 
                  button 
                  key={index} 
                  component={Link} 
                  to={subcategory.path} 
                  sx={{ pl: 4 }}
                  onClick={() => {setopenSubmenuProductos(!openSubmenuProductos),setIsDrawerOpen()}}  // Cerrar Drawer al hacer clic
                >
                  <ListItemText primary={subcategory.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* Productos Mínimos con subcategorías */}
          <ListItem button onClick={() => setopenSubmenuProductosMinimos(!openSubmenuProductosMinimos)}>
            <ListItemText primary="Productos Mínimos" />
            {openSubmenuProductosMinimos ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubmenuProductosMinimos} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subcategoria_ProductosMinimos.map((subcategory, index) => (
                <ListItem 
                  button 
                  key={index} 
                  component={Link} 
                  to={subcategory.path} 
                  sx={{ pl: 4 }}
                  onClick={() =>{setopenSubmenuProductosMinimos(!openSubmenuProductosMinimos), setIsDrawerOpen(false)}}  // Cerrar Drawer al hacer clic
                >
                  <ListItemText primary={subcategory.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>

           {/* Clientes subcategorías */}
           <ListItem button onClick={() => setopenSubmenuClientes(!openSubmenuClientes)}>
           
            <ListItemText primary="Clientes" />
            {openSubmenuClientes ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubmenuClientes} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subcategoria_Clientes.map((subcategory, index) => (
                <ListItem 
                  button 
                  key={index} 
                  component={Link} 
                  to={subcategory.path} 
                  sx={{ pl: 4 }}
                  onClick={() => {setopenSubmenuClientes(!openSubmenuClientes),setIsDrawerOpen(false)} } // Cerrar Drawer al hacer clic
                >
                  <ListItemText primary={subcategory.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>

             {/* Clientes minoristas subcategorías */}
             <ListItem button onClick={() => setopenSubmenuClientesMinimos(!openSubmenuClientesMinimos)}>
           
           <ListItemText primary="Clientes Minoristas " />
           {openSubmenuClientesMinimos ? <ExpandLess /> : <ExpandMore />}
         </ListItem>
         <Collapse in={openSubmenuClientesMinimos} timeout="auto" unmountOnExit>
           <List component="div" disablePadding>
             {subcategoria_Clientes_Minimos.map((subcategory, index) => (
               <ListItem 
                 button 
                 key={index} 
                 component={Link} 
                 to={subcategory.path} 
                 sx={{ pl: 4 }}
                 onClick={() => {setopenSubmenuClientesMinimos(!openSubmenuClientesMinimos),setIsDrawerOpen(false)} } // Cerrar Drawer al hacer clic
               >
                 <ListItemText primary={subcategory.name} />
               </ListItem>
             ))}
           </List>
         </Collapse>

           {/* Proveedores subcategorías */}
           <ListItem button onClick={() => setopenSubmenuProveedores(!openSubmenuProveedores)}>
           
            <ListItemText primary="Proveedores" />
            {openSubmenuProveedores ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubmenuProveedores} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subcategoria_Proveedores.map((subcategory, index) => (
                <ListItem 
                  button 
                  key={index} 
                  component={Link} 
                  to={subcategory.path} 
                  sx={{ pl: 4 }}
                  onClick={() => {setopenSubmenuProveedores(!openSubmenuProveedores),setIsDrawerOpen(false)} } // Cerrar Drawer al hacer clic
                >
                  <ListItemText primary={subcategory.name} />
                </ListItem>
              ))}
            </List>
          </Collapse>

            {/* Compras */}
            <ListItem button onClick={() => setOpenSubmenuCompras(!openSubmenuCompras)}>
            <ListItemText primary="Compras" />
            {openSubmenuCompras ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubmenuCompras} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={() => setOpenOrdenCompra(!openOrdenCompra)} sx={{ pl: 4 }}>
                <ListItemText primary="Orden de Compra" />
                {openOrdenCompra ? <ExpandLess /> : <ExpandMore />}
              </ListItem >
              <Collapse in={openOrdenCompra} timeout="auto" unmountOnExit>
                {ordenSubcategorias.map((sub, index) => (
                  <ListItem 
                  key={index} 
                  component={Link} 
                  to={sub.path} 
                  sx={{ pl: 8 }}
                  onClick={() => {setOpenSubmenuCompras(!openSubmenuCompras),setOpenOrdenCompra(!openOrdenCompra),setIsDrawerOpen(false)} }
                  >
                    <ListItemText primary={sub.name} />
                  </ListItem>
                ))}
              </Collapse>

              <ListItem button onClick={() => setOpenProveedor(!openProveedor)} sx={{ pl: 4 }}>
                <ListItemText primary="Proveedor" />
                {openProveedor ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openProveedor} timeout="auto" unmountOnExit>
                {proveedorSubcategorias.map((sub, index) => (
                  <ListItem 
                  key={index} 
                  component={Link} 
                  to={sub.path} 
                  sx={{ pl: 8 }}
                  onClick={() => {setOpenSubmenuCompras(!openSubmenuCompras),setOpenProveedor(!openProveedor),setIsDrawerOpen(false)} }
                  >
                    <ListItemText primary={sub.name} />
                  </ListItem>
                ))}
              </Collapse>
            </List>
          </Collapse>

        </List>
      </Drawer>

      {/* Contenido principal donde se cargan los componentes según la ruta */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/Buscador" element={<Buscador />} />
          <Route path="/marca-articulo" element={<MarcaArticulo />} />
          <Route path="/linea-articulo" element={<LineaArticulo />} />
          <Route path="/articulo" element={<Articulo />} />
          <Route path="/productos-minimos/marca" element={<MarcaArticulosMinimos subcategory="Marca" />} />
          <Route path="/productos-minimos/linea" element={<LineaArticulosMinimos subcategory="Línea" />} />
          <Route path="/productos-minimos/articulo" element={<ArticulosMinimos subcategory="Artículo" />} />
          <Route path="/Cliente" element={<Cliente subcategory="Cliente" />} />
          <Route path="/ClienteMinorista" element={<ClienteMinimo subcategory="ClienteMinimo" />} />
          <Route path="/Proveedor" element={<Proveedor subcategory="Proveedor" />} />
          <Route path="/compras/orden/debito" element={<div>Débito</div>} />
          <Route path="/compras/orden/efectivo" element={<div>Efectivo</div>} />
          <Route path="/compras/proveedor/ramo" element={<div>Ramo</div>} />
        </Routes>
      </main>
    </Router>
  );
};

export default NavDrawer;
