FROM node:17-alpine
WORKDIR /app
COPY /frontend/package.json .
RUN npm uninstall npm
RUN npm install npm@latest
COPY . .
EXPOSE 3000
CMD ["nmp", "start"]


