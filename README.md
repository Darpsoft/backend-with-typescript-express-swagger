# Backend Timezone

_Backend simple donde se obtendrá la hora UTC según los datos que envíes_


## Demo de la aplicación :tw-1f499:
_Si deseas ver la aplicación, puedes ingresar al siguiente link_

**DEMO** -> [Heroku - Backend Timezone](https://backend-with-typescript-expres.herokuapp.com/doc/)

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software_

```
yarn
nodejs
```

### Instalación 🔧

_Primeo se deberá ingresar al repositorio y luego de esto, ejecutar el siguiente comando que instalará las librerías correspondientes_

```
yarn
```

## Despliegue 📦

_Para trabajar en desarrollo se deberá ejecutar el siguiente script_

```
yarn dev
```
_Para generar la documentación del Swagger se puede utilizar el siguiente script_

```
yarn build
yarn start-gendoc
```

_Por último, si desea **desplegar la aplicación**, puede ejecutar el siguiente script_

```
yarn build
yarn start 
```
ó
```
yarn build
yarn start-gendoc
```

## Ejecutando las pruebas ⚙️

_Para realizar pruebas del funcionamiento, se deberá **desplegar la aplicación**, una vez realizado, se deberá ingresar a la siguiente ruta_
```
http://localhost:3000/doc/
```
_Luego se deberá posicionar en el módelo, Timezone o sencillamenta entrar a la siguiente ruta [Swagger - Timezone](http://localhost:3000/doc/#/Timezone/post_timezone)_
```
http://localhost:3000/doc/#/Timezone/post_timezone
```

Allí se puede realizar las pruebas mediante el botón `Try it out` y `Execute`


## Construido con 🛠️

_Liberías y herramientas utilizadas para la construcción del proyecto_

* [yarn](https://yarnpkg.com/) - Manejador de dependencias
* [Express](https://www.npmjs.com/package/express) - Marco de servidor
* [Joi](https://www.npmjs.com/package/joi) - Para validar los endpoints creados, según el modelo de datos utilizado
* [moment](https://www.npmjs.com/package/moment) - Para trabajar con fechas y horas, formatear y utilizar condicionales
* [morgan](https://www.npmjs.com/package/morgan) - Para escuchar el servidor
* [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) - Documentación de endpoints
* [swagger-autogen](https://www.npmjs.com/package/swagger-autogen) - Para la "autogeneración" de documentación mediante comentarios

## Autores ✒️

_Personas que contribuyeron a la creación del proyecto_

* **Pedro Fuentes** - *Creación del proyecto* - [darpsoft](https://github.com/Darpsoft)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT License) - mira el archivo [MIT License](https://api.github.com/licenses/mit) para detalles


---
⌨️ con ❤️ por [Darpsoft](https://github.com/Darpsof) 😊
