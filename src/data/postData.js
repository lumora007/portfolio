// Language-neutral post metadata. Titles, excerpts, article bodies, and image
// alt text live in the locale files and are matched to these entries by array
// index. `slug` becomes the article route: #/posts/<slug>
//
// Entries flagged `placeholder` render as an empty skeleton card and need no
// locale entry. Replacing one means dropping the flag, filling in the fields
// below, and adding its title/excerpt/imageAlt/body at the matching index.
export const postData = [
  {
    id: 'post-zip-code',
    slug: 'same-skills-different-zip-code',
    date: '2025-12-25',
    readingTime: 3,
    tags: ['Career', 'Remote Work', 'Global Teams'],
    imageUrl: '/rasters/zip-code-story.jpg',
  },
  { id: 'post-placeholder-2', placeholder: true },
  { id: 'post-placeholder-3', placeholder: true },
  { id: 'post-placeholder-4', placeholder: true },
  { id: 'post-placeholder-5', placeholder: true },
];
