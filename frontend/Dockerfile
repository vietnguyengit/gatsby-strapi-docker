# build environment
FROM node:latest as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
# production environment
FROM nginx:stable-alpine
# Remove any existing config files
RUN rm /etc/nginx/conf.d/*
COPY --from=build /app/public /usr/share/nginx/html
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/
