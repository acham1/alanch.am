data "google_project" "alanch-am-smorgasbord" {
  project_id = "alanch-am-smorgasbord"
}

resource "google_app_engine_application" "alanch-am-smorgasbord" {
  project     = data.google_project.alanch-am-smorgasbord.project_id
  location_id = "us-west2"
}