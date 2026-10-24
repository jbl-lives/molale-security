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
- `GOOGLE_DRIVE_REFRESH_TOKEN`: refresh token authorized by the Google account that owns or can write to the destination folder, with the `https://www.googleapis.com/auth/drive` scope.

`GOOGLE_REDIRECT_URI` is not used by this app. There is no application OAuth callback route: use `https://developers.google.com/oauthplayground` as the OAuth client's redirect URI when generating the refresh token. The authorized token must include the `drive` scope; the authorizing account needs write access to the destination folder. Google classifies `drive` as a restricted scope, while the narrower `drive.file` scope only covers files opened or shared with the app, such as through Google Picker. See [Google's Drive API scopes](https://developers.google.com/workspace/drive/api/guides/api-specific-auth).

To obtain the refresh token, open the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/), enable **Use your own OAuth credentials**, and enter the OAuth client ID and secret. Request `https://www.googleapis.com/auth/drive`, authorize with the Google account that can upload to the destination folder, then exchange the authorization code and copy the refresh token into Vercel. The OAuth client must list the Playground URL above as an authorized redirect URI. The app exchanges the refresh token server-side for short-lived access tokens; it does not need an OAuth callback route or the `GOOGLE_REDIRECT_URI` variable.

Keep the client secret and refresh token private. Do not commit them, use `NEXT_PUBLIC_` names, or paste them into chat. OAuth refresh tokens issued while an External consent screen is in Testing expire after seven days. For ongoing production use, move the consent screen to In production and complete any Google verification required for the restricted Drive scope; then issue and save a new refresh token. Google says apps that store or transmit restricted-scope data on their servers must undergo a security assessment. See [Google OAuth refresh token behavior](https://developers.google.com/identity/protocols/oauth2/) and [Google's Drive API file creation guide](https://developers.google.com/workspace/drive/api/guides/create-file).

The route has an origin check and a honeypot field. The browser prevents parallel submits, and each accepted upload receives a unique Drive filename, but the route does not have durable cross-device rate limiting or deduplication. Vercel Functions reject request bodies over 4.5 MB, so the CV limit stays at 4 MB to leave room for multipart fields and headers. See [Vercel Function limits](https://vercel.com/docs/functions/limitations).
