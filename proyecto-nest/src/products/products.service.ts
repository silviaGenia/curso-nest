import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

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
    return this.products.find((item) => item.id === id)
  }

  //Metodo para crear Productos
  create(payload: any) {
    this.counterId = this.counterId + 1

    const newProduct = {
      id: this.counterId,
      ...payload
    };
    this.products.push(newProduct)
    return newProduct
  }

  //Tarea: Metodos de eliminar y actualizar

}
