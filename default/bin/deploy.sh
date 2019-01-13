#!/bin/bash

npm install &&
npm run build &&
gcloud app deploy
