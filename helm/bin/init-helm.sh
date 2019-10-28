#! /bin/sh

set -euxo pipefail

printf "\nInstall Tiller to Current Context\n"
printf "\nNote: in-cluster Tiller will be removed in Helm v3\n"

brew install kubernetes-helm

# See: https://helm.sh/docs/using_helm/#role-based-access-control
kubectl apply -f rbac-config.yaml
helm init --service-account tiller --history-max 199
