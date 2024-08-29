import { ProductNameTypes } from "../types";

export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    imageURL: string;
    price: string; 
    colors: string[];
    category: {
      name: string;
      imageURL: string;
    };
  }

  export interface IformInput {
    id: string;
    name:ProductNameTypes;
    label:string;
    type:string;
  }

  export interface Icategory {
    id: string;
    name: string;
    imageURL: string;
    } 