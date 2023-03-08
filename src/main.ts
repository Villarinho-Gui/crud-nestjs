import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(process.env.PORT ? Number(process.env.PORT) : 3333)
    .then(() => {
      console.log('Servidor funcionando corretamente.');
    })
    .catch((error) => {
      console.error(error);
      throw new Error('Ocorreu algum problema no servidor.');
    });
}
bootstrap();
