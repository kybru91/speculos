# Speculos quickstart example

A minimal, self-contained example that launches Speculos and drives the device
entirely over the REST API — no Ledger-specific dependency, just `requests`.

It is meant to be copied and adapted as the starting point for an automated test
or an agentic workflow. See the docs:
[Driving Speculos from code or an agent](https://ledgerhq.github.io/speculos/user/agent.html).

## Requirements

```shell
pip install speculos requests
```

## Run

From the **root of the Speculos repository** (so the demo `apps/boil.elf` is
available):

```shell
# Terminal 1 — start the emulator (headless + REST API on port 5000)
./examples/quickstart/run.sh

# Terminal 2 — drive it
python3 examples/quickstart/agent.py
```

`run.sh` launches `apps/boil.elf` in headless mode. Point it at your own `.elf`
by passing a path as the first argument:

```shell
./examples/quickstart/run.sh build/flex/bin/app.elf flex
```

To get an app of your own, see
[Get an app to run](https://ledgerhq.github.io/speculos/user/getting_an_app.html).
