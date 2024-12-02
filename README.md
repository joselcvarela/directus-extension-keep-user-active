# directus-extension-keep-user-active

Directus Embed hook to keep user active by refreshing session every 5 minutes

# Usage

Copy `src` and `package.json` into `directus/extensions/directus-extension-keep-user-active`

# Notes

You may need to set CSP configuration as follows in order to allow the execution of inline code:

```
CONTENT_SECURITY_POLICY_DIRECTIVES__SCRITP_SRC: "array:script-src,'self','unsafe-eval','unsafe-inline'"
```

That's how we can refresh session every 5 minutes.
