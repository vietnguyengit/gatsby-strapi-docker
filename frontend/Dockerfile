# Install dependencies only when needed
FROM node:16-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --production

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app
RUN npm install pm2@latest -g
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD pm2-runtime npm -- start
