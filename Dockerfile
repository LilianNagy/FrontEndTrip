FROM node:alpine3.14 as build
RUN mkdir -p /app

WORKDIR /app
COPY package.json /app/
RUN npm install 

COPY . /app/
RUN npm run build --prod


FROM nginx:alpine 
COPY --from=build /app/dist/trip-app /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf