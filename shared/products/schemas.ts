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

export const ProductListSchema = z.object({
  object: z.literal("list"),
  data: z.array(ProductSchema),
  has_more: z.boolean(),
  url: z.string(),
});

export type ProductList = z.infer<typeof ProductListSchema>;
