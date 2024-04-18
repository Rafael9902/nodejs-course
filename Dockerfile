FROM node:20-alpine

WORKDIR /node-course

COPY package.json .

RUN npm i -g pnpm
RUN pnpm i

EXPOSE 3000

CMD ["pnpm", "start"]