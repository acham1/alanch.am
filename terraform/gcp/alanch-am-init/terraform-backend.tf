resource "google_storage_bucket" "alanch-am-infrastructure" {
  name = "alanch-am-infrastructure"

  location      = "US-WEST2"
  storage_class = "REGIONAL"
}
