import { z } from 'zod'

export const registerSchema = z.object({
  name: z
    .string()
    .regex(
      /^[\w]+$/,
      'Name must not contain punctuation symbols apart from underscore (_).'
    ),

  email: z
    .string()
    .email('Invalid email address')
    .endsWith('@stud.noroff.no', 'Email must be a stud.noroff.no address'),

  password: z.string().min(8, 'Password must be at least 8 characters long'),
})
