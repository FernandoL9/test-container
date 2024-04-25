FROM node:16.15.1

WORKDIR /api 

COPY . .

RUN rm -rf node_modules
RUN npm install

CMD ["npm", "start"]
EXPOSE 3333
