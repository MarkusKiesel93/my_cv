# base image
FROM node:12.20-alpine as build-stage

# set working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json'
COPY ./package*.json ./

# install project dependencies
RUN npm install

# copy source code
COPY ./ ./

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

WORKDIR /files

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.prod.conf /etc/nginx/conf.d/nginx.conf

COPY ./static/ ./static/

COPY --from=build-stage /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]