terraform {
  backend "gcs" {
    bucket = "alanch-am-infrastructure"
    prefix = "terraform/init/state"
  }
}

provider "google" {
  version = "~> 2.8"
}