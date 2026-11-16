# getStateFromPath regex repro

```sh
npm install
npm start
```

Matches `/workspaces/1/page-number-445` against 446 screens configured as `workspaces/:id/page-number-<n>`, with `@react-navigation/core` 7.25.0.

On Node 24 (V8), the first call takes about 90 ms and the second about 120 ms, because every config that starts with `workspaces` runs its regex and V8 compiles each one. Later calls take about 1 ms.
