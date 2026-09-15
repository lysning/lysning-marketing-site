import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    /* Eyebrow above the h1. Optional — without it the h1 stands alone, and it must
       never just repeat the title. */
    kicker: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/* Legal documents, one file per published revision, named by its date.
   A revision file is immutable once published: it is the record of what a user
   agreed to on a given date, and the app stores that date as the version it
   accepted (lysning-app#975). Changing a document means adding a dated file, not
   editing one — `/privacy` and `/terms` render whichever is newest, so the
   canonical URLs never change and never need updating by hand. */
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string().optional(),
    description: z.string().optional(),
    doc: z.enum(['privacy', 'terms']),
    /* 'YYYY-MM-DD', matching the file name. These sort as strings, which is the
       only ordering the app does — it compares version identifiers, never parses
       them as dates. */
    version: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    /* Whether the change that produced this revision was material, i.e. whether
       the app should stop and ask existing users to accept again. Set by whoever
       publishes the revision, who is the only one who knows what changed. */
    material: z.boolean(),
    /* Two lines at most. Shown on the app's re-acceptance screen and in the
       version list, so it has to read as an explanation, not a changelog entry. */
    changeSummary: z.string(),
  }),
});

export const collections = { pages, legal };
