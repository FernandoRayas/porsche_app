# DeliverExpress
Aplicaciones Móviles - React Native

Requisitos previos: 
    - Tener instalado Node.js y npm (Instalar por parte de la página principal de Node) <br>
    - Tener instalado expo (Mirar el apartado de 'Principalmente')  <br>
    - Tener instalado Git (Instalar por parte de la página principal de Git)  <br>r
    - Tener instalado MongoDB (Instalar por parte de la página principal de MongoDB)  <br>
    
## Instrucciones para clonar e iniciar el proyecto en local:
1. Abre una terminal o cmd, dependiendo del sistema operativo que tengas. 
2. Dirígete a la carpeta donde desees guardar el proyecto.
3. Ejecuta el siguiente comando para clonar este repositorio: git clone https://github.com/FernandoRayas/porsche_app/tree/main

### Principalmente:

    - Para poder instalar correctamente las dependencias y node modules necesarios usar: npm install --force

    - Para poder prender el backend realizar lo siguiente:
        - En terminal poner el siguiente comando para iniciar mongoDB: mongod
        - En terminal poner el siguiente comando para cambiar la ip ya que es una bd local: ipconfig
            Esa ip debera ser cambiada en los siguientes archivos:
                screens/RegisterScreen.js: en la linea 66
                screens/LoginScreen.js: en la linea 52
                screens/CuentaScreen.js: en la linea 11
        - A la altura en terminal de nuestro proyecto pondremos el siguiente comando para iniciar el servidor: node server/server.js

    - Para correr la aplicación usar el comando: npx expo start (Necesario tener instalado anteriormente expo y escanear el código qr si se desea abrir en expo go)

        - En caso de no tener el expo instalarlo con el siguiente comando: npm install -g expo-cli exp

    - ¡Listo, disfruta de la vista de la App de Porsche!


A continuación, tendremos algunas capturas de pantalla de la aplicación Porsche funcionando en un dispositivo móvil:
[![Screenshot-2024-02-02-23-29-20-343-host-exp-exponent.jpg](https://i.postimg.cc/3RcSBjhc/Screenshot-2024-02-02-23-29-20-343-host-exp-exponent.jpg)](https://postimg.cc/Hcb9WyVw)
[![Screenshot-2024-02-02-23-29-24-596-host-exp-exponent.jpg](https://i.postimg.cc/KcdFcBTf/Screenshot-2024-02-02-23-29-24-596-host-exp-exponent.jpg)](https://postimg.cc/Hj4FBJB8)

[![Imagen-de-Whats-App-2024-03-22-a-las-17-13-00-1ac99cac.jpg](https://i.postimg.cc/6pLb2b14/Imagen-de-Whats-App-2024-03-22-a-las-17-13-00-1ac99cac.jpg)](https://postimg.cc/cvCBPhWd)
[![Imagen-de-Whats-App-2024-03-22-a-las-17-13-00-3d09a440.jpg](https://i.postimg.cc/DzxC5Jh2/Imagen-de-Whats-App-2024-03-22-a-las-17-13-00-3d09a440.jpg)](https://postimg.cc/R3nQZ0q8)
[![Imagen-de-Whats-App-2024-03-22-a-las-17-13-00-735434e0.jpg](https://i.postimg.cc/mrLXQ30X/Imagen-de-Whats-App-2024-03-22-a-las-17-13-00-735434e0.jpg)](https://postimg.cc/hXY1nm4T)

[![Screenshot-2024-02-02-23-29-35-657-host-exp-exponent.jpg](https://i.postimg.cc/jSTbPTZJ/Screenshot-2024-02-02-23-29-35-657-host-exp-exponent.jpg)](https://postimg.cc/zVx6YsmJ)
[![Screenshot-2024-02-02-23-29-40-482-host-exp-exponent.jpg](https://i.postimg.cc/JzQWQF2Y/Screenshot-2024-02-02-23-29-40-482-host-exp-exponent.jpg)](https://postimg.cc/Snj5Sgqc)
[![Screenshot-2024-02-02-23-29-43-811-host-exp-exponent.jpg](https://i.postimg.cc/CLk0R5Hg/Screenshot-2024-02-02-23-29-43-811-host-exp-exponent.jpg)](https://postimg.cc/0bkF38BW)

[![Captura-de-pantalla-2024-03-22-172931.png](https://i.postimg.cc/mgG6rWVG/Captura-de-pantalla-2024-03-22-172931.png)](https://postimg.cc/2V2xHJPH)
[![Captura-de-pantalla-2024-03-22-173027.png](https://i.postimg.cc/Twhtsd2n/Captura-de-pantalla-2024-03-22-173027.png)](https://postimg.cc/xJDGJSzd)


Alumno: Rayas Alvarado Juan Fernando <br>
Asesor: Vara Chacon Pedro Said
