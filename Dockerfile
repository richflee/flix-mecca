FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn --pure-lockfile

RUN yarn build:prod

# Use the port used by our index.js configuration
EXPOSE 3000

# This will run `yarn run:prod` when the docker image is ran
CMD [ "node", "build/index.js" ]
