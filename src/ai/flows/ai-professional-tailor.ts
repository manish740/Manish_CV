'use server';
/**
 * @fileOverview This file implements an AI tool that refines a personal statement based on a job description.
 *
 * - refinePersonalStatement - A function that refines a personal statement given a job description.
 * - RefinePersonalStatementInput - The input type for the refinePersonalStatement function.
 * - RefinePersonalStatementOutput - The return type for the refinePersonalStatement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefinePersonalStatementInputSchema = z.object({
  jobDescription: z
    .string()
    .describe(
      'The job description for which the personal statement needs to be tailored.'
    ),
  personalStatement: z
    .string()
    .describe(
      'The original personal statement that needs to be refined.'
    ),
});
export type RefinePersonalStatementInput = z.infer<
  typeof RefinePersonalStatementInputSchema
>;

const RefinePersonalStatementOutputSchema = z.object({
  refinedPersonalStatement: z
    .string()
    .describe(
      'The refined personal statement, tailored to highlight skills relevant to the job description.'
    ),
});
export type RefinePersonalStatementOutput = z.infer<
  typeof RefinePersonalStatementOutputSchema
>;

export async function refinePersonalStatement(
  input: RefinePersonalStatementInput
): Promise<RefinePersonalStatementOutput> {
  return refinePersonalStatementFlow(input);
}

const refinePersonalStatementPrompt = ai.definePrompt({
  name: 'refinePersonalStatementPrompt',
  input: {schema: RefinePersonalStatementInputSchema},
  output: {schema: RefinePersonalStatementOutputSchema},
  prompt: `You are an AI professional tailor specialized in refining personal statements for System Engineers.
Your goal is to enhance the provided personal statement to specifically highlight skills and experiences that are most relevant to the given job description.
Ensure the refined statement is concise, impactful, and directly addresses the requirements and preferences outlined in the job description.

Job Description:
{{jobDescription}}

Original Personal Statement:
{{personalStatement}}

Refined Personal Statement (focus on relevant skills and impact):
`,
});

const refinePersonalStatementFlow = ai.defineFlow(
  {
    name: 'refinePersonalStatementFlow',
    inputSchema: RefinePersonalStatementInputSchema,
    outputSchema: RefinePersonalStatementOutputSchema,
  },
  async input => {
    const {output} = await refinePersonalStatementPrompt(input);
    return output!;
  }
);
