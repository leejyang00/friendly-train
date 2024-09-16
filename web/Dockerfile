FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install next@14.2.8

COPY . .
COPY ../shared /app/shared

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
