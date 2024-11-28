import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  @Prop({

  })
  name: string
  lastname: string
  password: string
  email: string
  rol: [string]
}
