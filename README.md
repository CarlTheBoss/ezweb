# FoodHub - Tu Tienda Saludable

¡Bienvenido a FoodHub! Este proyecto es una página web estática que presenta una variedad de productos saludables, desde frutas y verduras frescas hasta snacks y comidas preparadas. El objetivo es ofrecer una visión clara y atractiva de los productos disponibles en la tienda.

## 🚀 Cómo ejecutar el proyecto localmente

Para visualizar este sitio web en tu máquina local, necesitarás tener instalados [Docker](https://www.docker.com/get-started) y [Docker Compose](https://docs.docker.com/compose/install/).

Sigue estos sencillos pasos:

### 1. Clona o descarga el repositorio

Asegúrate de tener todos los archivos del proyecto en un directorio en tu computadora.

### 2. Construye y ejecuta el contenedor

Abre una terminal, navega hasta el directorio raíz del proyecto (donde se encuentran los archivos `Dockerfile` y `docker-compose.yml`) y ejecuta el siguiente comando:

```bash
docker-compose up --build
```

Este comando hará lo siguiente:

- **Construirá la imagen de Docker:** Empaquetará la página web con un servidor Nginx.
- **Creará y ejecutará un contenedor:** Pondrá en marcha el servidor web.
- **`--build`**: Asegura que se reconstruya la imagen si has realizado cambios en el código.

### 3. Accede a la página web

Una vez que el comando anterior haya terminado de ejecutarse, abre tu navegador web preferido y visita la siguiente URL:

[**http://localhost:8080**](http://localhost:8080)

¡Y listo! Deberías ver la página de FoodHub funcionando.

### 4. Detener el servicio

Para detener el contenedor, puedes presionar `Ctrl + C` en la terminal donde se está ejecutando, o abrir una nueva terminal en el mismo directorio y ejecutar:

```bash
docker-compose down
```

Este comando detendrá y eliminará el contenedor de forma segura.
