
/**
 * @fileOverview Defines the types for the chat flow.
 *
 * - ChatInputSchema - The Zod schema for the chat input.
 * - ChatInput - The TypeScript type for the chat input.
 */

import {z} from 'zod';

const MessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  text: z.string(),
});

export const ChatInputSchema = z.object({
  history: z.array(MessageSchema).optional(),
  message: z.string(),
});

export type ChatInput = z.infer<typeof ChatInputSchema>;
