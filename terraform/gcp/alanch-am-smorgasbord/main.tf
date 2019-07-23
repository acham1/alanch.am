terraform {
  backend "gcs" {
    bucket = "alanch-am-infrastructure"
    prefix = "terraform/smorgasbord/state"
  }
}

provider "google" {
  version = "~> 2.8"
  project = "alanch-am-smorgasbord"
}
