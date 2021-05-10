FROM node:latest

WORKDIR /app

COPY ./package.json ./yarn.lock ./
RUN yarn install

COPY . .
RUN chmod +x ./docker-entry.sh

ENTRYPOINT [ "./docker-entry.sh" ]