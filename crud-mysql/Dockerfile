# Cambio: usar una imagen oficial y ligera de Node.js para ejecutar la logica del CRUD.
FROM node:22-alpine

# Cambio: definir el directorio de trabajo dentro del contenedor de la aplicacion.
WORKDIR /app

# Cambio: copiar primero los archivos de dependencias para aprovechar la cache de Docker.
COPY package*.json ./

# Cambio: instalar dependencias exactas desde package-lock.json para builds reproducibles.
RUN npm ci --omit=dev

# Cambio: copiar el codigo de la aplicacion despues de instalar dependencias.
COPY . .

# Cambio: documentar el puerto interno usado por Express dentro del contenedor.
EXPOSE 3000

# Cambio: arrancar la aplicacion directamente con Node.js.
CMD ["node", "app.js"]
