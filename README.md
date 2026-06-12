# Happy Birthday My Love

A production-quality Next.js 15 + TypeScript surprise birthday website with romantic animations, countdown, gallery, love notes, Easter eggs, and a floating music player.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Personalize

- Replace `public/photos/1.svg` through `public/photos/6.svg` with real photos. If you use `1.jpg` through `6.jpg`, update the `galleryImages` paths in `lib/content.ts`.
- Add your song at `public/music/birthday-song.mp3`.
- Update placeholder dates in `lib/content.ts`.
- Edit the message copy in `lib/content.ts` and `components/love-letter.tsx`.

## Vercel Deployment

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.

The app is mobile-first, responsive, dark-mode aware, and ready for Vercel.
