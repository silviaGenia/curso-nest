import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {

  }

  //ruta principal =>encuentra todo
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // => /products/:id
  //Encuentra uno
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(Number(id));
  }

  //Crear productos
  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  //Actualizar
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload
    }
  }

  //eliminar
  @Delete(':id')
  delete(@Param('id') id: number) {
    return id
  }

}



