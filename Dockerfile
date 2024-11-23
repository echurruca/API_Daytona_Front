# Etapa 1: Construcción de la aplicación
FROM node:22 as build

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY package*.json ./

# Instala las dependencias
RUN npm install

COPY . . 


# Compila la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación estática
FROM nginx:1.23

# Copia los archivos construidos al directorio que servirá Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Arranca Nginx
CMD ["nginx", "-g", "daemon off;"]
