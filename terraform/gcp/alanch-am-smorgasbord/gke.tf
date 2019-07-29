resource "google_container_cluster" "smorgasbord-gke-cluster" {
  name     = "smorgasbord-gke-cluster"
  location = "us-west1"

  remove_default_node_pool = true
  initial_node_count       = 1

  description = "Smorgasbord all-purpose cluster."
}

resource "google_container_node_pool" "smorgasbord-gke-cluster-nodepool" {
  name       = "smorgasbord-gke-cluster-nodepool"
  cluster    = google_container_cluster.smorgasbord-gke-cluster.name
  node_count = 1
  location = "us-west1"

  node_config {
    preemptible  = true
    machine_type = "n1-standard-1"
  }
}