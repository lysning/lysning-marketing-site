import GithubSlugger from 'github-slugger';

// ¶ permalink on each FAQ question and section, so support replies can link one answer
// (docs/specs/07-faq.md). FAQ only: help pages are read inside the app.
//
// Astro's own heading-ids plugin runs after user plugins, so the id isn't set yet here. We set
// it with the same slugger, which Astro then keeps (it respects an existing id). A factory, so
// the slugger resets per document.
export const headingAnchors = () => {
  const slugger = new GithubSlugger();
  return {
    name: 'heading-anchors',
    element: {
      filter: ['h2', 'h3'],
      visit(node, ctx) {
        if (!ctx.fileURL?.pathname.endsWith('/content/pages/faq.md')) return;
        const slug = slugger.slug(ctx.textContent(node));
        ctx.setProperty(node, 'id', slug);
        ctx.appendChild(node, {
          type: 'raw',
          value: `<a class="anchor" href="#${slug}" aria-label="Link to this">¶</a>`,
        });
      },
    },
  };
};
