resource "google_folder" "alanch-am-play" {
  display_name = "play"
  parent       = "organizations/1069814000115"
}

resource "google_folder" "alanch-am-init" {
  display_name = "init"
  parent       = "organizations/1069814000115"
}