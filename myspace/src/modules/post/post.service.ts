import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Postmodel } from "./post-dtos/post";

@Injectable()
export class PostService {
  constructor(@InjectModel('Postinter') private readonly userModel: Model<Postmodel>) {}
  
}