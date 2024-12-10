import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SuppliesModule } from './supplies/supplies.module';
import { CategoriesModule } from './categories/categories.module';
import { ProvidesModule } from './provides/provides.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb://genia:Producto12@localhost:27017/supermercadodb'),
    CommonModule,
    SuppliesModule,
    CategoriesModule,
    ProvidesModule,
    AuthModule //supermercadodb
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
