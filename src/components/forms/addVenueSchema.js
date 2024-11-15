import { z } from 'zod'

export const addVenueSchema = z.object({
  name: z.string().min(4, 'Name must be at least 4 characters long'),
  description: z
    .string()
    .min(4, 'Description must be at least 4 characters long'),
  media: z
    .array(
      z.object({
        url: z.string().url('Must be a valid URL'),
      })
    )
    .optional(),
  price: z.number().min(1, 'Price must be at least 1$'),
  maxGuests: z.number().min(1, 'Max guests must be at least 1'),
  meta: z
    .object({
      wifi: z.boolean().optional().default(false),
      parking: z.boolean().optional().default(false),
      breakfast: z.boolean().optional().default(false),
      pets: z.boolean().optional().default(false),
    })
    .optional(),
  location: z
    .object({
      city: z.string().optional().nullable(),
      country: z.string().optional().nullable(),
    })
    .optional(),
})
