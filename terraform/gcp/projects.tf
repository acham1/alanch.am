data "google_organization" "alanch-am-organization" {
  domain = "alanch.am"
}

resource "google_project" "smorgasbord" {
  name       = "Smorgasbord"
  project_id = "alanch-am-smorgasbord"
  org_id     = data.google_organization.alanch-am-organization.id
}
