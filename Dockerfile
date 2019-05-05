# Stage 1 - the build process
FROM node:8.10 as build-deps
WORKDIR /usr/src/app
COPY ui-adviser/package.json ui-adviser/yarn.lock ./
RUN yarn
COPY ./ui-adviser ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]