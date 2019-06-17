terraform {
  backend "gcs" {
    bucket = "alanch-am-infrastructure"
    prefix = "terraform/state"
  }
}
