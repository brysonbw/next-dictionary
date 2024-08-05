import { z } from 'zod';

// Define the Zod schema for the search input
export const searchSchema = z.object({
  query: z
    .string()
    .min(1, 'Search is required. Please input value')
    .max(45, 'Must be less than 45 characters. \nPlease try again'),
});

// Type for the search schema
export type SearchSchema = z.infer<typeof searchSchema>;
