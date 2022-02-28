#!/bin/bash
npm i
node scripts/update-version.js
cp CHANGELOG.md playground/public/docs/changelog.md