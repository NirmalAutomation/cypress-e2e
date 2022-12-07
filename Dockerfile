FROM cypress/browsers:node18.12.0-chrome106-ff106

RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project

COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress

# npm install
RUN npm install

ENTRYPOINT ["npx", "cypress", "run"]
CMD [""]