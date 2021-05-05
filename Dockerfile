FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
# Uses port which is used by the actual application
#EXPOSE 8080
CMD ["npm","start"]


# copy reactAndNginx.txt from public file for nginx set up
# add docker ignore too at same level

# docker build -t [name of app] . remember the dot
#docker run -p 2001:80 [name of app]git