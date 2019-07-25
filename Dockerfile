FROM node:12.6.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

RUN cnpm install

EXPOSE 3000

# Entry point
ENTRYPOINT ["npm", "run"]
CMD ["start"]