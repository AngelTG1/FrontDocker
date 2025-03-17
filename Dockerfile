# Usar una imagen base de Node.js
FROM node:16

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias (incluyendo devDependencies)
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto 5173 (React usa este puerto por defecto en Vite)
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev", "vite"]