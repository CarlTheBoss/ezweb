# Usa una imagen base oficial de Nginx con Alpine Linux para un tamaño reducido
FROM nginx:alpine

# Copia todo el contenido de la carpeta 'src' al directorio del servidor
COPY src/ /usr/share/nginx/html/

# Renombra 'src/pages/index.html' a 'index.html' en el servidor para que sea la página por defecto
RUN mv /usr/share/nginx/html/pages/index.html /usr/share/nginx/html/index.html

# Expone el puerto 80 para permitir el tráfico HTTP
EXPOSE 80

# El comando por defecto de la imagen de Nginx ya se encarga de iniciar el servidor.