# 💌 CoronaMail

### Spreading love in virus times

This is the repo with the PWA for coronamail.org

### About

CoronaMail is an open-source open-collective project that aids to those suffering from isolation due to the coronavirus crisis. We send anonymous mails to sick people so they can better overcome the virus. We also send mails to health workers so they can read such letters to heavily ill patients.

### Tech stack

- next.js + tailwindcss
- client-first with a few serverless functions
- faundb for serverless database
- paswordless auth with jwt and e2e db tokens
- 100% covered any-free typescript
- optimized with workbox for offline support and purgecss
- editor is the magnific `pell.js`

### Design

- mobile-first with tailwindcss `@screen`
- favour HTML standard fonts, components, etc
- colors are picked from tailwindcss defaults
- images are from https://undraw.co/illustrations

### UX

- 100% user's data anonymization
- accessibility-first design
- protect app under auth to avoid system abuse
- use lang from browser (instead of being a setting) to avoid confusion with the `languages` attribute of the mails and users
- dark mode in editor to reduce eye strain
- notifications by email (owned service) to avoid share personal data with third-parties

### Contribute

This is a living project with 3 main goals. In order:

1. Aid with the coronavirus crisis
2. Showcase the power of serverless client-first tech
3. Proof of concept of serverless db with e2e tokens

We want everyone interested to getting involved. Support the project with either your handwork, testing, features suggestion and/or money donations.

_hand-crafter with ♥ by [sospedra](https://sospedra.me)_
