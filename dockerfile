# Usa una versión específica de Node (por ejemplo, 16) compatible con tu aplicación
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de tu proyecto
COPY . .

# Ejecuta el build de la aplicación
RUN npm run build

# Usa un servidor estático para servir la aplicación
RUN npm install -g serve

# Expone el puerto que usará el servidor
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]
