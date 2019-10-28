#! /bin/sh

set -euxo pipefail

helm upgrade --install --wait ambassador stable/ambassador
 
