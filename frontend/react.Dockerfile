FROM node:20.3.1
RUN apt-get update -qq
RUN mkdir /home/dev-user && mkdir /home/dev-user/frontend
WORKDIR /home/dev-user/frontend