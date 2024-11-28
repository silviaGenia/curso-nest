import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    UsersModule,
    ProductsModule,
    MongooseModule.forRoot('mongodb://genia:Producto12@localhost:27017/supermercadodb') //supermercadodb
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
