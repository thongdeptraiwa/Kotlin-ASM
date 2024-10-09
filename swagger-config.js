const swaggerJSDoc = require('swagger-jsdoc');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Kotlin',
      version: '1.0.0',
      description: "ASM",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
  },
  // Đường dẫn đến các file định nghĩa API
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;

