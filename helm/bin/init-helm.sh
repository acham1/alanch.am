#! /bin/sh

set -euxo pipefail

brew install kubernetes-helm

# See: https://helm.sh/docs/using_helm/#role-based-access-control
kubectl apply -f rbac-config.yaml
helm init --service-account tiller --history-max 199
