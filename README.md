# directus-extension-keep-user-active

Directus App extension to keep user active by refreshing session every 5 minutes

# Usage

Run:

```sh
npm run build
```

Copy `dist` and `package.json` into `directus/extensions/directus-extension-keep-user-active`

# Notes

Despite this being declared as a Display, it basically is a way to load JS code on client side.
That's how we can refresh session every 5 minutes.
