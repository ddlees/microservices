# Microservices Example w/ [Bazel] and [Skaffold]

### Prerequisites

<ul style="list-style-position: inside;">
<li><a href="https://bazel.build">Bazel</a></li>
<li><a href="https://skaffold.dev">Skaffold</a></li>
<li><a href="https://docker.com/get-started">Docker</a></li>
<li><a href="https://kubernetes.io/docs/reference/kubectl/overview/">Kubectl</a></li>
<li><a href="https://golang.org">Go <em><small>(optional)</small></em></a></li>
<li><a href="https://nodejs.org">NodeJS <em><small>(optional)</small></em></a></li>
<li><a href="https://yarnpkg.com">Yarn <em><small>(optional)</small></em></a></li>
<li style="list-style: none;">
<details>
  <summary>A <a href="kubernetes.io">Kubernetes</a> Cluster</summary>

#### Choose a Development Cluster

-   [Docker Desktop](https://www.docker.com/products/docker-desktop) <small>_(Mac OS and Windows)_</small>
    -   Download and install Docker Desktop for your platform
    -   Go to `Preferences > Kubernetes` and select `Enable Kubernetes`
-   [kind](https://kind.sigs.k8s.io/)
-   [microk8s](https://microk8s.io/)
-   [minikube](https://minikube.sigs.k8s.io/docs/)
-   [k3s](https://k3s.io/)
-   [k3d](https://k3d.io/)
-   [kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/) <small>_(the hard way)_</small>

---

**Note:** All of these options have guides to setup a local cluster; however Skaffold does not prevent you
from  connecting to a remote Kubernetes cluster if you wish to do so. 

</details>
</li>
</ul>

## Local Development

#### Building w/ Bazel

This command will build everything in the project including all the container images and binaries capable of running on
the host system.

``` bash
bazel build //...
```

### Building w/ Skaffold

This command will build and tag only the container images declared in [skaffold.yaml](./skaffold.yaml).

``` bash
skaffold build
```

## Run the API w/ Bazel (no containers)

``` bash
bazel run api
```

The API serves a single endpoint: http://localhost:8080/api/v1/greeting

## Run the UI w/ Bazel (no containers)

``` bash
bazel run ui
```

The UI is served at http://localhost:3000

> Note: The UI has a dependency on the API and will surface a network error

## Run the API and UI on Kubernetes w/ Skaffold

``` bash
skaffold dev
```

The UI is served at http://localhost:3000 and will connect to the API using [Kubernetes Service Discovery](https://github.com/kubernetes/dns/blob/master/docs/specification.md).
