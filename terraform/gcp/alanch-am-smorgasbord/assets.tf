resource "google_storage_bucket" "static-assets" {
  name = "assets-temp.alanch.am"

  location = "US-WEST1"

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
}