"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
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
//# sourceMappingURL=main.js.map