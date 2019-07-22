#! /bin/sh

set euo pipefail

gcloud app deploy config/dispatch.yaml
