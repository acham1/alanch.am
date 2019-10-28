#! /bin/sh

set -euxo pipefail

printf "\nInstall Ambassador to Current Kubernetes Context\n"

helm upgrade --install --wait ambassador stable/ambassador
 
