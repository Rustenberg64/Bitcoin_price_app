FROM ruby:3.2.2
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev postgresql-client supervisor
RUN groupadd -g 1000 dev-user && useradd -u 1000 -g 1000 -m dev-user
RUN chmod +x /usr/bin/supervisord
RUN mkdir -p /var/log/supervisor
RUN mkdir /home/dev-user/backend
WORKDIR /home/dev-user/backend
COPY ./Gemfile /home/dev-user/backend/Gemfile
COPY ./Gemfile.lock /home/dev-user/backend/Gemfile.lock
RUN bundle install