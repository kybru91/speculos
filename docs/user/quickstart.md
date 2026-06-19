---
sort: 0
---

# Quickstart

This page gets you from *nothing installed* to *an app running in Speculos* in a
few minutes, whatever your operating system. It is the recommended entry point
if you have never used Speculos before.

Speculos emulates Ledger devices (**Nano X**, **Nano S+**, **Flex**, **Stax**,
**Apex+**) on a regular computer, so you can run and drive a device app without
any hardware.

## TL;DR

```shell
# 1. Install (Linux/macOS, inside a virtualenv)
pip install speculos

# 2. Run the demo app shipped with the source tree.
#    boil.elf embeds its API level, which Speculos auto-detects, so no -a needed.
speculos apps/boil.elf

# 3. Open the web interface
#    -> http://127.0.0.1:5000
```

If you don't have an app yet, see [Get an app to run](getting_an_app.md). To
drive the device programmatically (tests, agents, CI), see
[Driving Speculos from code or an agent](agent.md).

## Choose your setup

There are three independent choices to make. Pick one cell per row, then jump to
the matching command below.

| Question | Options |
|----------|---------|
| **How do I install it?** | `pip` (native) · **Docker** (no local toolchain) |
| **What is my OS?** | Linux · macOS (Intel & Apple Silicon) · Windows |
| **How do I want to see the screen?** | **Qt** (native window) · **Web** (browser, port 5000) · **VNC** · headless (no display) |

Rules of thumb:

- **`pip`** is the simplest if you are on Linux or macOS and just want to script
  the device. **Docker** is the most portable (and the only realistic path on
  Windows) because it bundles the ARM toolchain and all dependencies.
- The **Web** display (`--display headless` + the REST API on port 5000) works
  everywhere, including Docker, and needs nothing but a browser. Start with it.
- **Qt** gives a native window but requires `pip` install and a graphical
  session (an X server on Windows/WSL). **VNC** is mostly useful from Docker or
  over a network.

---

## Install with `pip` (Linux & macOS)

Always work inside a virtualenv to avoid needing admin rights:

```shell
python3 -m venv venv
source venv/bin/activate
pip install speculos
```

`pip install speculos` ships a prebuilt launcher, so you do **not** need the ARM
cross-toolchain for this path. If you want to build from source instead (to hack
on Speculos itself), follow [Linux requirements and build](../installation/build.md).

> **macOS note:** the `pip` package works on both Intel and Apple Silicon. If you
> hit a build or dependency wall, use the Docker path below — it is the
> recommended option on macOS.

## Install with Docker (Linux, macOS, Windows)

The official image bundles everything; it is multi-arch (works natively on
Apple Silicon, no Dockerfile edit needed):

```shell
docker pull ghcr.io/ledgerhq/speculos:latest
docker image tag ghcr.io/ledgerhq/speculos:latest speculos
```

See [Docker](docker.md) for build-from-source and `docker-compose` setups.

---

## Run it

In every command below, replace `path/to/app.elf` with your own app (see
[Get an app to run](getting_an_app.md)). The model is auto-detected from recent
apps; override it with `--model {nanox,nanosp,stax,flex,apex_p}` if needed.

> Just want to check your install with no app of your own? Use the bundled demo:
> `speculos apps/boil.elf`.

### Web display (works everywhere — start here)

`pip`:

```shell
speculos --display headless path/to/app.elf
# open http://127.0.0.1:5000
```

Docker (mount your apps folder, publish the API port):

```shell
docker run --rm -it \
  -v "$(pwd)"/apps:/speculos/apps \
  -p 5000:5000 \
  speculos --display headless --api-port 5000 apps/app.elf
# open http://127.0.0.1:5000
```

### Qt native window (`pip` only, needs a graphical session)

```shell
speculos --display qt path/to/app.elf
```

On **Windows/WSL 2**, Qt needs an X server exported from Windows — see
[Windows (WSL 2)](../installation/wsl.md).

### VNC (handy from Docker)

```shell
docker run --rm -it \
  -v "$(pwd)"/apps:/speculos/apps \
  -p 41000:41000 \
  speculos --display headless --vnc-port 41000 apps/app.elf
# connect a VNC client to 127.0.0.1:41000
```

> macOS Screen Sharing requires a password: add `--vnc-password <pwd>`.

### Headless (no display, for CI / agents)

```shell
speculos --display headless --api-port 5000 --apdu-port 9999 path/to/app.elf
```

You then interact entirely through the [REST API](api.md) (port 5000) and the
[APDU TCP server](clients.md) (port 9999). This is the setup most automation and
agentic workflows use — see [Driving Speculos from code or an agent](agent.md).

---

## What's next

- [Get an app to run](getting_an_app.md) — where to find or how to build a `.elf`
- [Send APDUs to the app](clients.md) — talk to the device
- [REST API](api.md) — screenshots, button presses, screen content
- [Driving Speculos from code or an agent](agent.md) — end-to-end automation
- [Troubleshooting](troubleshooting.md) — common errors and fixes
