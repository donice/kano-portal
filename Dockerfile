# stage 1 - common
FROM node:20-alpine as base
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
# COPY yarn.lock ./

# stage 2.1 - builder-min
FROM base as builder-min
RUN NODE_ENV=production yarn install --production

# stage 2 .2- builder
FROM base as builder
WORKDIR /app
RUN yarn install
COPY . .
RUN yarn run build

# prod target
FROM node:20-alpine as production
WORKDIR /app

ENV NODE_ENV=production
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder-min --chown=nextjs:nodejs /app/node_modules ./node_modules

USER nextjs
EXPOSE 3000
CMD ["yarn", "start"]

# dev target
FROM base as dev
ENV NODE_ENV=development
RUN yarn install 
COPY . .
CMD ["yarn", "dev"]
