# ZMX Films & Studio website

A responsive Next.js website for ZMX Films & Studio, with separate wedding and commercial production pathways, portfolio sections, an inquiry form that prepares a WhatsApp message, and a dark cinematic visual identity.

## Requirements

- Node.js 20.9 or newer
- npm
- Internet connection for Google Fonts and WhatsApp links

## Run locally on Windows PowerShell

Open this folder in VS Code. Make sure this folder contains `package.json` directly, then run:

```powershell
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000.

To run a production build:

```powershell
npm.cmd run build
npm.cmd start
```

## Image setup

All active website photographs are stored locally in `public/images/`. The source archive supplied for this repair contained six Unsplash photographs, one generated hero visual, and the ZMX logo. The available photographs have been optimized into WebP files and the page's image paths have been mapped to those exact files.

The wedding-couple feature temporarily reuses the generated hero image, and the "Our Approach" panel reuses the production-crew photograph. Replace those with distinct ZMX-approved images when available.

See `IMAGE_CREDITS.md` for the photograph sources and license notes. Stock and generated visuals are temporary development imagery and must not be represented as ZMX client work.

## WhatsApp inquiry

The WhatsApp number is configured in `src/app/page.js` using `WHATSAPP_NUMBER`. Verify it before public launch. The inquiry form opens a prefilled WhatsApp message; it does not submit enquiries to a website database.

## Notes

- The image paths use lowercase `/images/` consistently. Keep the folder name and filenames lowercase when deploying to Linux hosting.
- The ZIP intentionally excludes `node_modules/` and `.next/`. Run `npm.cmd install` after extracting it.
