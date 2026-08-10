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
    imageWidth: 1024,
    imageHeight: 558,
  },
  {
    id: 'post-upwork-top-rated-plus',
    slug: 'zero-reviews-to-top-3-percent',
    date: '2026-01-20',
    readingTime: 4,
    tags: ['Upwork', 'Freelancing', 'Client Strategy'],
    imageUrl: '/rasters/upwork-profile-overview.webp',
    imageWidth: 1200,
    imageHeight: 1903,
    // referenced from the article body by index: { type: 'figure', index: 0 }
    figures: [
      {
        src: '/rasters/upwork-work-history.webp',
        width: 1200,
        height: 1561,
      },
    ],
  },
  { id: 'post-placeholder-3', placeholder: true },
  { id: 'post-placeholder-4', placeholder: true },
  { id: 'post-placeholder-5', placeholder: true },
];
