---
sort: 2
---

# Get an app to run

Speculos runs a compiled device app: an `.elf` file. This page covers the three
ways to obtain one, from easiest to most involved:

1. **Use a ready-made demo `.elf`** — fastest, no build.
2. **Build a public app with Docker** — the `ledger-app-builder` image, no local
   toolchain.
3. **Build with the VS Code extension** — one-click build *and* run in Speculos.

> **Why not just grab the app from my Ledger?** Production apps shipped on a real
> device are not directly extractable as runnable `.elf` files. To run an app in
> Speculos you either reuse a published demo binary or build it from source.

## 1. Use a ready-made demo `.elf`

The Speculos source tree ships a couple of small demo apps under
[`apps/`](https://github.com/LedgerHQ/speculos/tree/master/apps), e.g.
`apps/boil.elf` ("BOILerplate"). They are perfect to verify your install:

```shell
speculos apps/boil.elf
```

> These binaries are old and exist for Speculos' own tests. **Do not** use them
> to validate a real integration — build the current app instead (below).

Most Ledger device apps are **open source and public** on GitHub, for example:

- [`LedgerHQ/app-boilerplate`](https://github.com/LedgerHQ/app-boilerplate) — minimal template app, ideal to learn the flow
- [`LedgerHQ/app-bitcoin-new`](https://github.com/LedgerHQ/app-bitcoin-new)
- [`LedgerHQ/app-ethereum`](https://github.com/LedgerHQ/app-ethereum)

Their CI often attaches prebuilt `.elf` artifacts to releases/runs. When in
doubt, build from source — it is one Docker command.

## 2. Build a public app with Docker

Ledger publishes [`ledger-app-builder`](https://github.com/LedgerHQ/ledger-app-builder),
a Docker image with the full ARM toolchain and every device SDK preinstalled.
You do **not** need to install anything else locally.

Clone a public app and open a build shell inside the container:

```shell
git clone https://github.com/LedgerHQ/app-boilerplate.git
cd app-boilerplate

docker pull ghcr.io/ledgerhq/ledger-app-builder/ledger-app-builder-lite:latest

docker run --rm -it \
  -v "$(realpath .):/app" \
  ghcr.io/ledgerhq/ledger-app-builder/ledger-app-builder-lite:latest
```

Inside the container, the SDK paths are exposed as environment variables
(`$NANOX_SDK`, `$NANOS2_SDK` for Nano S+, `$FLEX_SDK`, `$STAX_SDK`, …). Build for
the target you want:

```shell
# inside the container
make BOLOS_SDK=$FLEX_SDK
exit
```

The resulting binary lands in `build/<target>/bin/app.elf` on your host. Run it:

```shell
speculos build/flex/bin/app.elf
# or with Docker:
docker run --rm -it -v "$(pwd):/speculos/apps" -p 5000:5000 \
  speculos --display headless --api-port 5000 apps/build/flex/bin/app.elf
```

## 3. Build with the VS Code extension

The [**Ledger Dev Tools**](https://marketplace.visualstudio.com/items?itemName=LedgerHQ.ledger-dev-tools)
extension wraps the `ledger-app-builder` container and adds one-click tasks. It
is the smoothest path if you already use VS Code.

1. Install the extension from the VS Code Marketplace (requires Docker running).
2. Open a Ledger app folder (e.g. a clone of `app-boilerplate`).
3. From the extension sidebar (or the Command Palette → *Ledger*), use:
   - **Select target** — choose Nano X / S+ / Flex / Stax / Apex+
   - **Build** — compiles the app inside the container (output in `build/`)
   - **Run with Speculos** — launches Speculos on the freshly built `.elf`
   - **Open Speculos Web display** — opens the web UI in your browser

The extension manages the container, ports and `.elf` path for you, so it is also
the quickest way to discover the workflow before scripting it yourself.

## What's next

- [Quickstart](quickstart.md) — install and run Speculos
- [Send APDUs to the app](clients.md)
- [Driving Speculos from code or an agent](agent.md)
