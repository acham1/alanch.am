resource "google_project" "smorgasbord" {
  name            = "smorgasbord"
  project_id      = "alanch-am-smorgasbord"
  org_id          = data.google_organization.alanch-am-organization.id
  billing_account = data.google_billing_account.default-billing-account.id
}

resource "google_project" "init" {
  name            = "init"
  project_id      = "alanch-am-init"
  org_id          = data.google_organization.alanch-am-organization.id
  billing_account = data.google_billing_account.default-billing-account.id
}
