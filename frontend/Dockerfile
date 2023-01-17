FROM node:16-alpine3.15
WORKDIR /app
COPY /frontend/package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["nmp", "start"]


