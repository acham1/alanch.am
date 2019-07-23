resource "google_storage_bucket" "static-assets" {
  name = "assets-temp.alanch.am"

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
}