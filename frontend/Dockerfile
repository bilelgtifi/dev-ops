FROM node:17-alpine
WORKDIR /app
COPY /frontend/package.json .
RUN npm install -g npm@9.3.1
COPY . .
EXPOSE 3000
CMD ["nmp", "start"]


