FROM nginx

COPY assets /usr/share/nginx/html/assets
COPY index.html /usr/share/nginx/html
COPY healthcheck.json /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
