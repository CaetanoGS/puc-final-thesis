FROM node:18.15.0 as backend

WORKDIR /etc/puc-minas/backend

COPY package*.json ./

RUN npm install

COPY . . 
EXPOSE 3000

RUN npx prisma generate


CMD [ "npm", "run", "start" ]
