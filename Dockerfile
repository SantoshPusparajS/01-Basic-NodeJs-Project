FROM node:23.11.1-alpine3.21
WORKDIR /usr/src/app
# COPY package*.json .
COPY package*.json /usr/src/app/
RUN npm ci
COPY . .
CMD [ "npm","run","dev" ]