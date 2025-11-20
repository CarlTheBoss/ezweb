# Usa una imagen base oficial de Nginx con Alpine Linux para un tamaño reducido
FROM nginx:alpine

# Copia todo el contenido de la carpeta 'src' al directorio del servidor
COPY src/ /usr/share/nginx/html/

# Expone el puerto 80 para permitir el tráfico HTTP
EXPOSE 80

# El comando por defecto de la imagen de Nginx ya se encarga de iniciar el servidor.