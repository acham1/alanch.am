terraform {
  backend "gcs" {
    bucket = "alanch-am-infrastructure"
    prefix = "terraform/state"
  }
}

provider "google" {
	version = "~> 2.8"
}
