# Set up a docker web server
FROM nginx

COPY serveit.sh /

COPY public /usr/share/nginx/html

CMD ["./serveit.sh"]
