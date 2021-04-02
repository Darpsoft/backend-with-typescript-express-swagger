const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "0.0.1",
    title: "Timezone",
    description: "Documentation for timezone with swagger-autogen",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Timezone",
      description: "Get timezone with date and timezone",
    },
  ],
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "api_key",
      in: "header",
    },
    petstore_auth: {
      type: "oauth2",
      authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
      flow: "implicit",
      scopes: {
        read_pets: "read your pets",
        write_pets: "modify pets in your account",
      },
    },
  },
  definitions: {
    "post-timezone": {
      date: "18:31:45",
      timezone: -3,
    },
    "response-timezone": {
      date: "17:31:45",
      timezone: "UTC",
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./dist/routes/index.routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./dist/index.js"); // Your project's root file
});
