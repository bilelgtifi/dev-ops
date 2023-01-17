FROM node:alpine
 
WORKDIR /app
# install app dependencies
COPY /frontend/package.json .
 
RUN npm install
 
# add app
COPY . .
EXPOSE 3000
 
# start app
CMD ["npm", "start"]
