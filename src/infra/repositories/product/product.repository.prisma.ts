import { PrismaClient } from "@prisma/client";
import { Product } from "../../../domain/product/entity/product.entity";
import { ProductGateway } from "../../../domain/product/gateway/product.gateway";

export class ProductRepositoryPrisma implements ProductGateway {

  private constructor(private readonly prismaClient: PrismaClient){}

  public static create(prismaClient: PrismaClient){
    return new ProductRepositoryPrisma(prismaClient);
  }

  public async save(product: Product): Promise<void> {
    throw new Error("Não implementado!")
  }
  public async list(): Promise<Product[]> {
    throw new Error("Não implementado!")
  }
}