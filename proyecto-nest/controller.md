import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    //return this.appService.getHello();
    return 'En Clases de NestJS';
  }

  @Get('nuevo')
  getProducts(): string {
    return 'Nuevos Productos del Supermercado'
  }

  @Get('categories')
  getCategories(): string {
    return 'Nuevos Categorias del Supermercado'
  }

  //   users/{id}

  /*  @Get('users/:id')
   getUser(@Param() params: any): string {
     return `Es el usuario: ${params.id}`
   } */

  //Recibir un parametro
  @Get('users/:userId')
  getUser(@Param() params: any): string {
    return `Es el usuario: ${params.userId}`
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `Es el producto: ${id}`
  }

  //Recibir dos parametros
  /*  @Get('categories/:id/products/:productId')
   getCategory(@Param() params: any) {
     return `Es la categoria: ${params.id} y el producto: ${params.productId}`;
   } */


  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `Es la categoria: ${id} y el producto: ${productId}`;
  }

}
