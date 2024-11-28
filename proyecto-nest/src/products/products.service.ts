import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1
  private products: Product[] = [{
    id: 1,
    name: 'Producto 1',
    description: 'Esto es un producto 1',
    price: 12,
    stock: 2
  }]

  //Metodo para buscar todos los productos
  findAll() {
    return this.products
  }

  //Metodo para Buscar por el id
  findOne(id: number) {
    const product = this.products.find((item) => item.id === id)
    if (!product) {
      //throw 'Error aleatorio'
      throw new NotFoundException(`Producto con # ${id} no se encontro`)
    }
    return product
  }

  //Metodo para crear Productos
  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1

    const newProduct = {
      id: this.counterId,
      ...payload
    };
    this.products.push(newProduct)
    return newProduct
  }

  //Tarea: Metodos de eliminar y actualizar

  //Actualizar
  update(id: number, payload: UpdateProductDto) {
    //console.log('Producto encontrado:', id, payload)
    const product = this.findOne(id)
    if (!product) {
      //console.log(`Producto con ID${id} no encontrado`)
      return null
    }
    if (product) {
      const index = this.products.findIndex((item) => item.id === id)
      //console.log('Indece encontrado:', index)
      this.products[index] = {
        ...product,
        ...payload
      }
      //console.log('Producto actualizado:', this.products[index])
      return this.products[index]
    }
    return null
  }

  //Eliminar
  delete(id: number) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id === id)
      this.products.splice(index, 1)
      return this.products
    }
    return null
  }

}
