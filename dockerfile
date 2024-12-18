
FROM node:18 AS build

WORKDIR /app

COPY codesCommanders-test/package.json codesCommanders-test/package-lock.json ./

RUN npm install

COPY codesCommanders-test ./

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /app/dist .

COPY codesCommanders-test/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

