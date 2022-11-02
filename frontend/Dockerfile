# build environment
FROM node:latest as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/public /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
