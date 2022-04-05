# Install dependencies only when needed
FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY . .

RUN npm ci

# RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
