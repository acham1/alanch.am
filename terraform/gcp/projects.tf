resource "google_project" "smorgasbord" {
  name       = "smorgasbord"
  project_id = "alanch-am-smorgasbord"

  billing_account = data.google_billing_account.default-billing-account.id
  folder_id       = google_folder.alanch-am-play.id
  org_id          = data.google_organization.alanch-am-organization.id
}

resource "google_project" "init" {
  name            = "init"
  project_id      = "alanch-am-init"
  org_id          = data.google_organization.alanch-am-organization.id
  billing_account = data.google_billing_account.default-billing-account.id
}
