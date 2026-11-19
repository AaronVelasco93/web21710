#  Definición de servicios (contenedores) que forman la aplicación
services:

  #  Servicio de base de datos MySQL
  db:
    image: mysql:8.4                 #  Imagen oficial de MySQL versión 8.4
    container_name: crud-db          #  Nombre del contenedor
    restart: unless-stopped          #  Reinicia automáticamente excepto si se detiene manualmente

    #  Variables de entorno para configurar MySQL
    environment:
      MYSQL_ROOT_PASSWORD: 123456    #  Contraseña del usuario root
      MYSQL_DATABASE: crud_db        #  Base de datos que se crea automáticamente

    #  Volúmenes para persistencia de datos
    volumes:
      - mysql-data:/var/lib/mysql    #  Guarda los datos de MySQL fuera del contenedor (persistencia)
      - ./Files/db.sql:/docker-entrypoint-initdb.d/01-db.sql:ro  
      #  Ejecuta automáticamente este script SQL al iniciar por primera vez (solo lectura)

    # 🩺 Healthcheck para verificar si MySQL está listo
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-p123456"]  
      #  Comando que revisa si MySQL responde correctamente
      interval: 10s                 # Intervalo entre cada verificación
      timeout: 5s                   # Tiempo máximo de espera por respuesta
      retries: 10                   # Número de intentos antes de marcar fallo

  #  Servicio de aplicación Node.js (CRUD)
  app:
    build:
      context: .                   #  Usa el contexto actual (donde está el Dockerfile)
      dockerfile: Dockerfile       #  Archivo que define cómo construir la imagen
    container_name: crud-app       #  Nombre del contenedor
    restart: unless-stopped        #  Reinicio automático

    #  Dependencia con la base de datos
    depends_on:
      db:
        condition: service_healthy 
        # ⏳ Espera a que MySQL esté listo antes de iniciar la app

    #  Variables de entorno usadas por Node.js
    environment:
      DB_HOST: db                  #  Host de la base de datos (nombre del servicio Docker)
      DB_USER: root                #  Usuario de MySQL
      DB_PASSWORD: 123456          #  Contraseña
      DB_NAME: crud_db             #  Base de datos
      DB_PORT: 3306                #  Puerto interno de MySQL dentro del contenedor
      PORT: 3000                  #  Puerto donde corre Express

    #  Puertos expuestos
    ports:
      - "3000:3000"               #  Mapea el puerto 3000 del contenedor al 3000 de tu máquina

#  Definición de volumen persistente
volumes:
  mysql-data:                     #  Volumen gestionado por Docker para guardar datos de MySQL