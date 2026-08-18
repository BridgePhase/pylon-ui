/**
 * Docs settings shared by every story: render the story inline, start with the
 * source panel open, and show the raw source rather than the rendered JSX.
 *
 * Spread into an inline `parameters: { docs: { ... } }` literal rather than
 * assigned straight to `parameters` — Storybook's CSF enricher merges the JSDoc
 * component description into literal `parameters.docs` objects, and appends a
 * second `parameters` key when it finds anything it can't merge into.
 */
export const SHARED_DOCS = {
  story: { inline: true },
  canvas: { sourceState: "shown" },
  source: { type: "code" },
};
