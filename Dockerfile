# Para instalar NODE con la version de DockerHub
FROM node:16.13-alpine3.15 as builder
# se determina el directorio de trabajo
WORKDIR /build
# Copias solo los archivos que comiencen con package y terminen en json
# . es que lo copia al archivo de trabajo
COPY package*.json .
# instalar las librerías
RUN npm install
# . resto de archivos de docker file todos, pero quiero ignorar
# Para ignorar necesitamos .dockerignore
COPY . .
# Necesito ejecutar el comando
RUN npm run build

#Cuando el contenedor exista se va a ejecutar este comando
#Se ejecuta cuando se crea el contenedor no la imagen 
#node:16.13-alpine3.15
#CMD ["npm", "run", "start"]

FROM node:16.13-alpine3.15

WORKDIR /app
#Copia lo de la izquierda a la derecha
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/dist ./dist
COPY package.json .
COPY env.yaml .

CMD ["npm", "run", "start"]