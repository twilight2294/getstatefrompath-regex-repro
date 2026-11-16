import { getStateFromPath } from '@react-navigation/core';

const screens = {};

for (let i = 0; i < 446; i++) {
  screens[`Page${i}`] = `workspaces/:id/page-number-${i}`;
}

const config = { screens };
const path = '/workspaces/1/page-number-445';

for (const call of ['first', 'second', 'third']) {
  const start = performance.now();
  getStateFromPath(path, config);
  console.log(`${call} call: ${(performance.now() - start).toFixed(1)} ms`);
}
