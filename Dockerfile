FROM node:20 as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .

ENV VITE_CHATBOT_API=https://chatbot.andrebezerra.com
ENV VITE_RECOMM_API=https://recommender.andrebezerra.com

RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80