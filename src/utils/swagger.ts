import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Application } from "express";


export function useSwagger(app: Application) {
  const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "API 문서",
        version: "1.0.0",
        description: "API 명세서",
      },
      // components: {
      //   securitySchemes: {
      //     bearerAuth: {
      //       type: "http",
      //       scheme: "bearer",
      //       bearerFormat: "JWT",
      //     },
      //   },
      // },
      security: [{ bearerAuth: [] }],
      servers: [{ url: "http://localhost:8000" }],
    },
    apis: ["src/routes/*.ts", "src/models/*.ts", "src/dto/*.ts"], // API 명세를 작성한 파일 경로
  };

  const specs = swaggerJSDoc(options);

  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
}
