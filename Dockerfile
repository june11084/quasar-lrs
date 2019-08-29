FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /quasar-lrs

# copy both 'package.json' and 'package-lock.json' (if available)
COPY . /

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
# install project dependencies
RUN npm install
RUN npm uninstall -g quasar-cli
RUN npm install -g @quasar/cli

EXPOSE 8888
CMD [ "quasar", "dev", "-m", "pwa" ]
