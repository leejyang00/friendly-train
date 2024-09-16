import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  object: z.string(),
  active: z.boolean(),
  attributes: z.array(z.string()),
  created: z.number(),
  default_price: z.string().nullable(),
  description: z.string().nullable(),
  images: z.array(z.string()),
  livemode: z.boolean(),
  marketing_features: z.array(z.object({})),
  metadata: z.object({}),
  name: z.string(),
  package_dimensions: z.any().nullable(),
  shippable: z.boolean().nullable(),
  statement_descriptor: z.string().nullable(),
  tax_code: z.string().nullable(),
  type: z.literal("service"),
  unit_label: z.string().nullable(),
  updated: z.number(),
  url: z.string().nullable(),
});

export type Product = z.infer<typeof ProductSchema>;

export const ProductListSchema = z.object({
  object: z.literal("list"),
  data: z.array(ProductSchema),
  has_more: z.boolean(),
  url: z.string(),
});

export type ProductList = z.infer<typeof ProductListSchema>;

export const PriceSchema = z.object({
  id: z.string(),
  object: z.string(),
  active: z.boolean(),
  billing_scheme: z.string(),
  created: z.number(),
  currency: z.string(),
  custom_unit_amount: z.number().nullable(),
  livemode: z.boolean(),
  lookup_key: z.string().nullable(),
  metadata: z.object({}),
  nickname: z.string().nullable(),
  product: z.string(),
  recurring: z.boolean().nullable(),
  tax_behavior: z.string(),
  tiers_mode: z.string().nullable(),
  transform_quantity: z.number().nullable(),
  type: z.string(),
  unit_amount: z.number(),
  unit_amount_decimal: z.string(),
});

export const ProductsPageSchema = z.object({
  price: z.number(),
  productName: z.string(),
  images: z.array(z.string()),
});

export type ProductPage = z.infer<typeof ProductsPageSchema>;
