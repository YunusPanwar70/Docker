FROM node:18-alpine as nodejs
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9090
CMD [ "npm","start" ]