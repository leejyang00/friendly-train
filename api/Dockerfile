# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
COPY ../shared /app/shared

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

RUN npm install -g nodemon

COPY --from=builder /app /app

EXPOSE 8080

CMD ["nodemon", "server"]

