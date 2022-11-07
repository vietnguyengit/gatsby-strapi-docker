FROM nginx:stable-alpine
# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 82
# Launch NGINX
CMD ["nginx", "-g", "daemon off;"]
