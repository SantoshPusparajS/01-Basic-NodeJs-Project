FROM node:21.2-alpine3.18
WORKDIR /usr/src/app
# COPY package*.json .
COPY package*.json /usr/src/app/
RUN npm ci
COPY . .
CMD [ "npm","run","dev" ]