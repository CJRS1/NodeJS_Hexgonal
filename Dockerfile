# Para instalar NODE con la version de DockerHub
FROM node:alpine3.17 as STAGE_BUILD
# se determina el directorio de trabajo
WORKDIR /code
# Copias solo los archivos que comiencen con package y terminen en json
# . es que lo copia al archivo de trabajo
ADD package*.json ./
# instalar las librerías
RUN npm install
# . resto de archivos de docker file todos, pero quiero ignorar
# Para ignorar necesitamos .dockerignore
ADD . .
# Necesito ejecutar el comando
RUN npm run build

#Cuando el contenedor exista se va a ejecutar este comando
#Se ejecuta cuando se crea el contenedor no la imagen 
#node:16.13-alpine3.15
#CMD ["npm", "run", "start"]

FROM node:alpine3.17

WORKDIR /app
#Copia lo de la izquierda a la derecha
COPY --from=STAGE_BUILD /code/node_modules ./node_modules
COPY --from=STAGE_BUILD /code/dist ./dist
COPY --from=STAGE_BUILD /code/package.json .
#COPY env.yaml .

CMD ["npm", "run", "start"]