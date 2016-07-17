FROM node:6.3.0

RUN mkdir -p /usr/src/app/lib /usr/src/app/test
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY lib /usr/src/app/lib
COPY test /usr/src/app/test

CMD [ "npm", "start" ]