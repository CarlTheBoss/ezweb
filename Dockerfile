# Usa una imagen base oficial de Nginx con Alpine Linux para un tamaño reducido
FROM nginx:alpine

# Copia los archivos del sitio web al directorio por defecto de Nginx
COPY FoodHub.html /usr/share/nginx/html/index.html
COPY index.css /usr/share/nginx/html/
COPY static/ /usr/share/nginx/html/static/

# Expone el puerto 80 para permitir el tráfico HTTP
EXPOSE 80

# El comando por defecto de la imagen de Nginx ya se encarga de iniciar el servidor,
# por lo que no es necesario un CMD o ENTRYPOINT adicional.