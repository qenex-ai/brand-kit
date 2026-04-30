# QENEX Brand Kit

Everything needed for any use case — videos, images, documents, presentations.

## Folder map

```
brand-kit/
├─ 01-logo/
│  ├─ svg/        Vector wordmark + monogram (5 variants)
│  └─ png/        Raster exports at 720, 1440, 2880px
├─ 02-favicon/    Favicons (16–1024) + iOS/Android app icons
├─ 03-social/     OG, Twitter header, LinkedIn, Instagram covers
├─ 04-documents/  Business card, A4 letterhead (HTML → print PDF)
├─ 05-presentation/  16:9 slide cover template
├─ 06-video/      Lower-third + endcard (1920×1080 HTML overlays)
├─ styles/        Canonical wordmark.js renderer
└─ brand-guidelines.md
```

## Variants

| Variant   | Use on                            |
|-----------|-----------------------------------|
| primary   | Light or neutral surfaces         |
| cosmos    | Full-bleed brand backgrounds      |
| knockout  | Photography, video, dark imagery  |
| inverse   | Pure white with brand gradient    |
| mono      | Single-color print, ink stamps    |

## Colors

| Token        | Hex      | Use                       |
|--------------|----------|---------------------------|
| Void         | #05060F  | Deep background           |
| Space        | #0A0E27  | Primary background        |
| Indigo-900   | #1E1B4B  | Gradient origin           |
| Violet-600   | #6D28D9  | Brand mid                 |
| Magenta-400  | #D946EF  | Gradient terminus         |
| Cyan-400     | #22D3EE  | Electron accent / signal  |
| Ink-100      | #FFFFFF  | Foreground                |

**Primary gradient**: `linear-gradient(135deg, #1E1B4B 0%, #4C1D95 35%, #7C3AED 70%, #D946EF 100%)`

## Typography

- **Display / UI**: Space Grotesk (400, 500, 600, 700)
- **Body**: Inter (400, 500, 600)
- **Mono / metadata**: JetBrains Mono (400, 500)

## Quick-use snippets

### Web favicon
```html
<link rel="icon" type="image/png" sizes="32x32"  href="/02-favicon/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/02-favicon/favicon-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="/02-favicon/app-icon-192.png">
```

### OG meta
```html
<meta property="og:image" content="/03-social/og-1200x630.png">
<meta name="twitter:image" content="/03-social/og-1200x630.png">
```

### Render the wordmark in any page
```html
<script src="styles/wordmark.js"></script>
<span data-qenex-mark="primary" data-size="80"></span>
```

## Templates

HTML templates in `04-documents`, `05-presentation`, and `06-video` open in any browser. Print to PDF for documents (Cmd/Ctrl-P), screenshot or capture at 1920×1080 for video overlays.

## Clear space

Minimum padding around the wordmark = ½ the height of the Q monogram. Never crop, recolor outside palette, rotate, or stretch.

---
QENEX Systems · v1.0 · April 2026
