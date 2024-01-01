FROM node:18-alpine 
WORKDIR /usr/src/jirani
COPY package*.json ./
RUN npm install 
COPY . .

RUN npm run build
CMD ["npm","run","preview"]
EXPOSE 3000