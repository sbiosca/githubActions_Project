Documentation:


### Primero de todo descargamos el proyecto con next y creamos nuestro repositorio con el código correspondiente al proyecto, quedando de la siguiente manera:
![image](https://user-images.githubusercontent.com/102309782/213938174-dadda34b-60c2-4416-8056-2baefd8d7403.png)


## Creamos el siguiente workflow que contendrá todas las configuraciones siguientes:
![image](https://user-images.githubusercontent.com/102309782/213938192-605fe1ad-1d6f-4aa6-9066-6dbeacbee8eb.png)


### Configuración Linter_Job:
Archivo workflow:
![image](https://user-images.githubusercontent.com/102309782/213938199-9da8515b-946a-4b46-af72-60955d68c58f.png)

Y subimos los cambios al github pero la ejecución linter sin éxito nos da los siguientes errores:
![image](https://user-images.githubusercontent.com/102309782/213938214-b6ea12af-0846-48cb-a75d-6e70d361eafb.png)
![image](https://user-images.githubusercontent.com/102309782/213938217-9e84a82b-2f34-466c-adae-72e090fbfb36.png)


Por lo que accedemos a los dos archivos js donde nos dice los errores y cambiamos para que este correctamente quedando de la siguiente manera: (cambiamos comillas simples por dobles, orden default y el var con la variable)
![image](https://user-images.githubusercontent.com/102309782/213938223-18e52e20-0dd8-497f-87f8-cdb779e3ad44.png)
![image](https://user-images.githubusercontent.com/102309782/213938229-14412ae2-67e7-421e-be1b-059d708a6ba1.png)

Y ahora al ejecutar la ejecución de eslint ya funciona correctamente:

![image](https://user-images.githubusercontent.com/102309782/213938234-608e705b-fee8-43d1-803e-638c26ff68e8.png)


### Configuración Cypress_job:
Añadimos al workflow la siguiente configuración, primero siempre y cuando funcione correctamente la ejecución de linter-execution. Y añadimos los uses y que ejecute los steps y los añada al result.txt, quedando de la siguiente manera:
![image](https://user-images.githubusercontent.com/102309782/213938246-60a7bc44-25ce-4f58-aa5d-02a28f65b04a.png)


Añadimos los cambios y los subimos a nuestro repositorio ejecutando así la ejecución de Cypress_job correctamente:
![image](https://user-images.githubusercontent.com/102309782/213938254-07a1857d-e1c6-43e6-9a36-b326b8402f11.png)


Y ahora podemos observar que ha creado el artifacts con nombre result y los resultados cypress. Y si pulsamos en result automáticamente nos baja un comprimido que contiene el resultado.txt que hemos configurado con el workflow
![image](https://user-images.githubusercontent.com/102309782/213938257-640c665d-9e19-48f9-8232-08f4c44f4efe.png)


Al parecer la ejecución como workflow es correcta pero en el resultado tenemos failure y el estado como podemos ver es failing, es por el siguiente error en el fichero siguiente:
![image](https://user-images.githubusercontent.com/102309782/213938262-7f85be68-8b8e-4092-9471-e601c7e0d62e.png)


En el switch case Post tenemos POST con un 0, pues debemos quitarlo sinos nos seguirá poniendo como resultado failure:
Quedando el fichero de la siguiente manera y hacemos el commit:
![image](https://user-images.githubusercontent.com/102309782/213938274-b8dae549-6627-46c5-99c3-c35463f19df5.png)


Una vez la ejecución se ha hecho correctamente en este caso podemos comprobar que el estado del resultado de cypres es el exitoso, y si descargamos el fichero resultado.txt tambien:
![image](https://user-images.githubusercontent.com/102309782/213938280-941154d8-2563-44b2-b575-dbdb5a798bda.png)
![image](https://user-images.githubusercontent.com/102309782/213938284-9036b5f8-a9eb-458f-a917-5af08c34e703.png)


### Configuración Add_badge_job:
Añadimos la siguiente configuración en el archivo workflow y luego procederemos a añadir la github action de la siguiente manera:
Ponemos que si no se ejecuta correctamente el cypress no se ejecute el Add_badge, y luego ya hemos configurado diferentes steps y utiliza el directorio entero del githubactions. Insertamos nuestros datos con el correo y el mensaje correspondiente
![image](https://user-images.githubusercontent.com/102309782/213938288-ecfab7d3-1f4c-43d9-8728-4db37f3b2d24.png)


Action Estructura:
![image](https://user-images.githubusercontent.com/102309782/213938291-66ce35fe-6c46-49e9-b539-c57b57a53fe5.png)


Y añadimos la siguiente configuración en el action.yml:
![image](https://user-images.githubusercontent.com/102309782/213938295-44273f29-42f5-4c8e-9cf8-19795a4a825c.png)


Ejecutamos el commit y obtenemos el siguiente resultado, la ejecución no funciona:
![image](https://user-images.githubusercontent.com/102309782/213938298-15992237-1704-45f9-a530-cf0ffb03ff7e.png)


Observamos el error, no tenemos permisos, por lo que hacemos la siguiente configuración desde ajustes actions del repositorio en github:
![image](https://user-images.githubusercontent.com/102309782/213938305-00bf2c48-f81f-4b47-96ff-ea4d85fad445.png)


Debemos darle permisos de la siguiente manera:
![image](https://user-images.githubusercontent.com/102309782/213938312-2e82d591-b9eb-4bf1-aaf5-ba77385a23b2.png)








En el archivo index.js del github/action donde configuramos el hecho de que añada si ha ido bien el succes al readme he añadido una imagen:
![image](https://user-images.githubusercontent.com/102309782/213938317-5cd0755b-fbd3-4192-80a1-747813fded2b.png)


Y ahora con los cambios realizados ejecutamos el commit y obtenemos la ejecución exitosa:
![image](https://user-images.githubusercontent.com/102309782/213938323-cf08f5a1-4831-4918-9507-68879b675ce8.png)


Y podemos comprobar el readme, para ver si hay algún cambio, efectivamente nos añade la imagen añadida al readme:
 ![image](https://user-images.githubusercontent.com/102309782/213938325-8cce409f-e224-4e04-af47-75a175d5773a.png)





### Configuración Deploy_Job:
Primero de todo agregamos la siguiente configuración del workflow quedando de la siguiente manera:
![image](https://user-images.githubusercontent.com/102309782/213938335-3e7b4026-be13-4186-b349-a74b0bd37ed8.png)

Depende de que la ejecución de cypress-run funcione correctamente, y luego hay que tener en cuenta los 3 secrets que añadimos a la configuración, hay que sacarlos anteriormente de la siguiente manera y añadirlos a github quedando asi:

Secrets repositorio:
![image](https://user-images.githubusercontent.com/102309782/213938339-cf95f385-db30-4b8f-80be-29fe6c7cfa29.png)

VERCEL_TOKEN:
Para crear el token de vercel hay que seguir los siguientes pasos:
1.	Accedemos a la siguiente url:
https://vercel.com/
2.	En la pagina de vercel nos creamos una cuenta (en mi caso he vinculado mi cuenta de github).
3.	Una vez creada la cuenta, accedemos a configuración, tokens y creamos nuestro primero token de la siguiente manera:
![image](https://user-images.githubusercontent.com/102309782/213938344-6be924ae-fce5-4414-8aea-6f5d0c38a52a.png)
![image](https://user-images.githubusercontent.com/102309782/213938349-a2b036c0-b980-467a-8d3e-f972fe701ed5.png)


4.	Nombramos el token name TOKEN y lo creamos, con lo que nos genera un secret cuyo secret añadimos al VERCEL_TOKEN en la configuración del repositorio de github.
5.	Una vez creado el token, para poner el secret en el ORG_ID, accedemos a configuración general y copiamos el ID que nos muestra

6.	Y ahora para obtener el secret de PROJECT_ID, debemos crear un proyecto nuevo en nuestra cuenta de vercel:
![image](https://user-images.githubusercontent.com/102309782/213938364-2e14fa7f-fbcc-465f-8e3e-40068c82d776.png)



7.	En mi caso he creado el proyecto actual vinculándolo de github a vercel:
![image](https://user-images.githubusercontent.com/102309782/213938368-954bd549-2f8f-4bb4-8cd7-89e0060c3e76.png)


8.	Accedemos a settings del proyecto creado y obtenemos el sercret PROJECT_ID



Y ahora ya subimos los cambios realizados con el commit y push a nuestro github y obtenemos el siguiente resultado de las ejecuciones:
![image](https://user-images.githubusercontent.com/102309782/213938378-6e1c4547-0472-4eb4-ae2e-60f408b0bfd4.png)






### Configuración Notificacion_Job:

Añadimos la siguiente configuración en la ejecución de notification:
![image](https://user-images.githubusercontent.com/102309782/213938382-3e2e106a-9e89-4f72-8ebf-49ac93e85488.png)


Creamos y compilamos la siguiente action para la notificationEmail quedando de la siguiente manera:
![image](https://user-images.githubusercontent.com/102309782/213938386-f9b4017d-cbce-4bdb-a796-00833ee3f7a3.png)

Y el fichero action quedando de la siguiente manera:
![image](https://user-images.githubusercontent.com/102309782/213938388-6c3f3fde-5015-41f6-95a2-3dcec2d72b3d.png)


Y necesitamos el siguiente archivo encargado de enviar el correo:

![image](https://user-images.githubusercontent.com/102309782/213938389-35d35a88-fa49-453b-87d9-213a3b142395.png)

Configuración Metrics:
Fichero workflow quedando asi:
![image](https://user-images.githubusercontent.com/102309782/213938542-28ffab80-ea45-48ab-b52d-bd73ef3ee6b7.png)


 
Y añadimos lo siguiente a nuestro readme personal:
![Metrics](/github-metrics.svg)





Example of nextjs project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->
![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)

![Cypress.io](https://thumbs.dreamstime.com/b/succes-19684178.jpg)
![Cypress.io](https://thumbs.dreamstime.com/b/succes-19684178.jpg)
