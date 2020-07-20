FROM node:alpine
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+) and yarn.lock because we are using yarn
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
COPY webpack.config.js /usr/src/app

# Run yarn without generating a yarn.lock file
RUN yarn --pure-lockfile

COPY . /usr/src/app

RUN yarn build:prod

# Use the port used by our index.js configuration
EXPOSE 3002

# This will run `yarn run:prod` when the docker image is ran
CMD [ "yarn", "run:prod" ]
