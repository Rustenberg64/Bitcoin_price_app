FROM node:20.3.1
RUN apt-get update -qq
RUN mkdir /home/dev-user && mkdir /home/dev-user/frontend
WORKDIR /home/dev-user/frontend
COPY ./package.json /home/dev-user/frontend/package.json
COPY ./package-lock.json /home/dev-user/frontend/package-lock.json
RUN npm install