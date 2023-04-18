
FROM node:lts-alpine3.17 as build

WORKDIR /app

COPY package*.json /app
COPY yarn.lock /app
COPY .env /app
RUN yarn
COPY . .  
RUN yarn build


ARG VITE_BACKEND_URL
ARG VITE_CLIENT_ID
ARG VITE_CLIENT_SECRET

ENV BASE_URL=$VITE_BACKEND_URL
ENV CLIENT_ID=$VITE_CLIENT_ID
ENV CLIENT_SECRET=$VITE_CLIENT_SECRET


CMD ["yarn", "run", "dev"]








