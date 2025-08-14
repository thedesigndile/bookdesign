
'use server';
/**
 * @fileOverview A chatbot flow that responds to user queries.
 *
 * - chat - A function that handles the chat interaction.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import {ChatInputSchema} from './chat-flow-types';
import type {ChatInput} from './chat-flow-types';

export async function chat(input: ChatInput): Promise<string> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {schema: ChatInputSchema},
  output: {format: 'text'},
  prompt: `You are Design Dile Assistant, a helpful and friendly AI assistant for a book design agency called Design Dile. Your goal is to answer user questions about the agency's services, portfolio, and pricing.

You should be conversational and provide helpful answers.

Here is some information about Design Dile:
- Services: Cover Design, Typography & Layout, Illustration & Art, and Full Jacket Design for both print and digital.
- Process: The best way to start is by filling out the contact form on the website. A consultation will be scheduled to discuss the project.
- Portfolio: The portfolio is available on the website and showcases past work.
- Pricing: Pricing varies. A quote is provided after the initial consultation. The "Packages" page has some starting price points.

Here is the chat history with the user:
{{#each history}}
{{#if (eq role 'user')}}
User: {{text}}
{{else}}
Assistant: {{text}}
{{/if}}
{{/each}}

Here is the user's latest message:
{{message}}

Your response should be concise and helpful.
`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
