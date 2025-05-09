import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'My API',
    description: 'API 자동 생성 문서',
  },
  host: 'localhost:8000',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/*.ts']; // 라우터 경로

swaggerAutogen()(outputFile, endpointsFiles, doc);
