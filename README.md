This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## CV uploads to Google Drive

The public Careers page (`/careers`) accepts PDF, DOC, and DOCX files up to 4 MB. Uploads go directly to the configured Google Drive folder; CV files are not written to Prisma.

Set these variables in Vercel (Production, Preview, and Development as needed):

- `GOOGLE_DRIVE_FOLDER_ID`: the destination folder ID (defaults to the folder configured for Molale).
- `GOOGLE_DRIVE_CLIENT_ID`: OAuth client ID for a Google Cloud project with the Google Drive API enabled. The existing `GOOGLE_CLIENT_ID` name is also accepted.
- `GOOGLE_DRIVE_CLIENT_SECRET`: matching OAuth client secret. The existing `GOOGLE_CLIENT_SECRET` name is also accepted.
- `GOOGLE_DRIVE_REFRESH_TOKEN`: offline refresh token authorized for the destination folder with only the `https://www.googleapis.com/auth/drive.file` scope.

The OAuth app must be **In production**. Enable both the Google Drive API and Google Picker API. In the existing OAuth client's authorized redirect URIs, temporarily add `http://localhost:4173/oauth2callback`. The OAuth client must be a Web application client. No OAuth redirect route or Picker UI is added to the public website.

Use the local, temporary Google Picker utility to authorize the folder owner and issue a new refresh token. If this directory is not already linked to the correct Vercel project, link it first with `vercel link`. The setup process uses Vercel Production environment variables without writing them to `.env.local`:

```powershell
vercel env run -e production -- npm run google-drive:setup
```

The utility requires `GOOGLE_DRIVE_CLIENT_ID`, `GOOGLE_DRIVE_CLIENT_SECRET`, and `GOOGLE_DRIVE_FOLDER_ID`. It also accepts the legacy client variable names `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`. Sign in as the Google account that can write to the destination folder and select that folder in Google's hosted Picker. The utility checks that the selected folder ID matches `GOOGLE_DRIVE_FOLDER_ID`, verifies it is a Drive folder accessible to the grant, and requires the granted scope to be exactly `drive.file`. It writes the new refresh token to `.env.google-drive-refresh-token`, a local file matched by the repository's `.env*` ignore rule. It does not print the token or return it to browser code. If Google returns a broader or unexpected grant, setup stops without saving the token.

After setup, add the Production secret by piping the ignored file to the CLI (the token itself stays out of shell history):

```powershell
Get-Content -Raw -LiteralPath '.env.google-drive-refresh-token' | vercel env add GOOGLE_DRIVE_REFRESH_TOKEN production --type secret
```

If `GOOGLE_DRIVE_REFRESH_TOKEN` already exists in Production, update it instead:

```powershell
Get-Content -Raw -LiteralPath '.env.google-drive-refresh-token' | vercel env update GOOGLE_DRIVE_REFRESH_TOKEN production --type secret
```

After confirming the Vercel CLI succeeded, remove the local token file with `Remove-Item -LiteralPath '.env.google-drive-refresh-token'`. Remove the temporary localhost redirect URI from the OAuth client once setup is complete, then redeploy so the updated Production environment is applied. Keep all OAuth values server-side; never use `NEXT_PUBLIC_` names or commit token files. Google describes `drive.file` as a non-sensitive, per-file scope for files created by the app or shared using Google Picker. See [Google's Drive API scopes](https://developers.google.com/workspace/drive/api/guides/api-specific-auth), [Google's hosted Picker flow](https://developers.google.com/workspace/drive/picker/guides/desktop-mobile-picker), and [Vercel environment variable CLI](https://vercel.com/docs/cli/env).

The route has an origin check and a honeypot field. The browser prevents parallel submits, and each accepted upload receives a unique Drive filename, but the route does not have durable cross-device rate limiting or deduplication. Vercel Functions reject request bodies over 4.5 MB, so the CV limit stays at 4 MB to leave room for multipart fields and headers. See [Vercel Function limits](https://vercel.com/docs/functions/limitations).
