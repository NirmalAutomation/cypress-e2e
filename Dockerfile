FROM cypress/browsers:node16.16.0-chrome107-ff107-edge
RUN mkdir /my-cypress-project
WORKDIR /my-cypress-project
COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npx", "cypress", "run"]
CMD [""]