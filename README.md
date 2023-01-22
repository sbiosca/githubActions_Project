Documentation:


### Primero de todo descargamos el proyecto con next y creamos nuestro repositorio con el código correspondiente al proyecto, quedando de la siguiente manera:

## Creamos el siguiente workflow que contendrá todas las configuraciones siguientes:

### Configuración Linter_Job:
Archivo workflow:

Y subimos los cambios al github pero la ejecución linter sin éxito nos da los siguientes errores:

Por lo que accedemos a los dos archivos js donde nos dice los errores y cambiamos para que este correctamente quedando de la siguiente manera: (cambiamos comillas simples por dobles, orden default y el var con la variable)



Y ahora al ejecutar la ejecución de eslint ya funciona correctamente:



### Configuración Cypress_job:
Añadimos al workflow la siguiente configuración, primero siempre y cuando funcione correctamente la ejecución de linter-execution. Y añadimos los uses y que ejecute los steps y los añada al result.txt, quedando de la siguiente manera:

Añadimos los cambios y los subimos a nuestro repositorio ejecutando así la ejecución de Cypress_job correctamente:

Y ahora podemos observar que ha creado el artifacts con nombre result y los resultados cypress. Y si pulsamos en result automáticamente nos baja un comprimido que contiene el resultado.txt que hemos configurado con el workflow

Al parecer la ejecución como workflow es correcta pero en el resultado tenemos failure y el estado como podemos ver es failing, es por el siguiente error en el fichero siguiente:

En el switch case Post tenemos POST con un 0, pues debemos quitarlo sinos nos seguirá poniendo como resultado failure:
Quedando el fichero de la siguiente manera y hacemos el commit:

Una vez la ejecución se ha hecho correctamente en este caso podemos comprobar que el estado del resultado de cypres es el exitoso, y si descargamos el fichero resultado.txt tambien:


### Configuración Add_badge_job:
Añadimos la siguiente configuración en el archivo workflow y luego procederemos a añadir la github action de la siguiente manera:
Ponemos que si no se ejecuta correctamente el cypress no se ejecute el Add_badge, y luego ya hemos configurado diferentes steps y utiliza el directorio entero del githubactions. Insertamos nuestros datos con el correo y el mensaje correspondiente

Action Estructura:

Y añadimos la siguiente configuración en el action.yml:

Ejecutamos el commit y obtenemos el siguiente resultado, la ejecución no funciona:

Observamos el error, no tenemos permisos, por lo que hacemos la siguiente configuración desde ajustes actions del repositorio en github:

Debemos darle permisos de la siguiente manera:








En el archivo index.js del github/action donde configuramos el hecho de que añada si ha ido bien el succes al readme he añadido una imagen:


Y ahora con los cambios realizados ejecutamos el commit y obtenemos la ejecución exitosa:

Y podemos comprobar el readme, para ver si hay algún cambio, efectivamente nos añade la imagen añadida al readme:
 




### Configuración Deploy_Job:
Primero de todo agregamos la siguiente configuración del workflow quedando de la siguiente manera:
Depende de que la ejecución de cypress-run funcione correctamente, y luego hay que tener en cuenta los 3 secrets que añadimos a la configuración, hay que sacarlos anteriormente de la siguiente manera y añadirlos a github quedando asi:

Secrets repositorio:

VERCEL_TOKEN:
Para crear el token de vercel hay que seguir los siguientes pasos:
1.	Accedemos a la siguiente url:
https://vercel.com/
2.	En la pagina de vercel nos creamos una cuenta (en mi caso he vinculado mi cuenta de github).
3.	Una vez creada la cuenta, accedemos a configuración, tokens y creamos nuestro primero token de la siguiente manera:


4.	Nombramos el token name TOKEN y lo creamos, con lo que nos genera un secret cuyo secret añadimos al VERCEL_TOKEN en la configuración del repositorio de github.
5.	Una vez creado el token, para poner el secret en el ORG_ID, accedemos a configuración general y copiamos el ID que nos muestra:

6.	Y ahora para obtener el secret de PROJECT_ID, debemos crear un proyecto nuevo en nuestra cuenta de vercel:



7.	En mi caso he creado el proyecto actual vinculándolo de github a vercel:

8.	Accedemos a settings del proyecto creado y obtenemos el sercret PROJECT_ID:



Y ahora ya subimos los cambios realizados con el commit y push a nuestro github y obtenemos el siguiente resultado de las ejecuciones:






### Configuración Notificacion_Job:

Añadimos la siguiente configuración en la ejecución de notification:


Creamos y compilamos la siguiente action para la notificationEmail quedando de la siguiente manera:

Y el fichero action quedando de la siguiente manera:


Y necesitamos el siguiente archivo encargado de enviar el correo:







Example of nextjs project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->
![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)

![Cypress.io](https://thumbs.dreamstime.com/b/succes-19684178.jpg)
![Cypress.io](https://thumbs.dreamstime.com/b/succes-19684178.jpg)