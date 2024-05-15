# FROM node:18-alpine AS dev-deps
# WORKDIR /app
# COPY package.json ./
# RUN yarn install
# CMD ["yarn","dev"]

# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY package.json package.json
# RUN yarn install --frozen-lockfile
# COPY . .
# RUN yarn build
# EXPOSE 3000
# CMD [ "yarn","start" ]

FROM node:18-alpine as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:18-alpine as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build


FROM node:18-alpine as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:18-alpine as prod
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "yarn","start" ]
