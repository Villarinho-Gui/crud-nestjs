import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule
    .forRoot(
      'mongodb+srv://guivillarinho:DJ!frEvR7cge-Us@clustercrudnestjs.rugcgcs.mongodb.net/test',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
