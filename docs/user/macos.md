# macOS (Apple Silicon)

On Apple Silicon (M1/M2/M3…), the recommended way to run Speculos is the Docker
image. The official image is **multi-arch**, so it runs natively on `arm64` — you
no longer need to edit the `Dockerfile` or pick a special `-aarch64` builder.

> Prefer a native install? `pip install speculos` also works on Apple Silicon;
> see the [Quickstart](quickstart.md). Use Docker if you hit dependency issues.

## Pull the image

```shell
docker pull ghcr.io/ledgerhq/speculos:latest
docker image tag ghcr.io/ledgerhq/speculos:latest speculos
```

## Run an app

Mount your apps folder and publish the API port; then open the web UI at
[http://127.0.0.1:5000](http://127.0.0.1:5000):

```shell
docker run --rm -it \
  -v "$(pwd)"/apps:/speculos/apps \
  -p 5000:5000 \
  speculos --display headless --api-port 5000 apps/boil.elf
```

- The app folder (`$(pwd)/apps/`) is mounted with `-v`.

### Using VNC instead of the web UI

```shell
docker run --rm -it \
  -v "$(pwd)"/apps:/speculos/apps \
  -p 41000:41000 \
  speculos --display headless --vnc-port 41000 apps/boil.elf
```

> macOS Screen Sharing requires a password: add `--vnc-password <pwd>`.

## Build the image from source (optional)

Only needed if you are modifying Speculos itself. The build is the same on all
architectures:

```shell
docker build ./ -t speculos
```

## More

- All `speculos.py` arguments can be passed on the Docker command line; see the
  general [Docker](docker.md) page for `docker-compose`, debugging and the full
  argument list.
- [Troubleshooting](troubleshooting.md) covers common Docker/macOS issues.
