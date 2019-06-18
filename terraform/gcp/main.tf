terraform {
  backend "gcs" {
    bucket = "alanch-am-infrastructure"
    prefix = "terraform/state"
  }
}

provider "google" {
  version = "~> 2.8"
}

data "google_organization" "alanch-am-organization" {
  domain = "alanch.am"
}

data "google_billing_account" "default-billing-account" {
  billing_account = "014B35-6D408B-620FBA"
}
