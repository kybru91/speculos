---
sort: 7
---

# Driving Speculos from code or an agent

Speculos is fully controllable over the network, which makes it ideal for
automated test suites, CI, and agentic workflows that need to drive a Ledger app
end-to-end without hardware. Everything a human does in the web UI — sending
commands, pressing buttons, reading the screen, taking screenshots — is
available programmatically.

## The two channels

Start Speculos in headless mode and expose both ports (here with the bundled
demo):

```shell
speculos --display headless --api-port 5000 --apdu-port 9999 apps/boil.elf
```

| Channel             | Default                 | Use it to                                                                                                    |
|---------------------|-------------------------|--------------------------------------------------------------------------------------------------------------|
| **REST API**        | `http://127.0.0.1:5000` | press buttons / touch, read screen text (`/events`), take screenshots, set [automation](automation.md) rules |
| **APDU TCP server** | `127.0.0.1:9999`        | send the app's APDU commands and read responses                                                              |

The REST API also accepts APDUs (`POST /apdu`), so for many agents the REST port
alone is enough. Full spec: [REST API](api.md) and the
[swagger](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/LedgerHQ/speculos/master/speculos/api/static/swagger/swagger.json).

## Minimal example: read the screen and click through

This drives the device using only the REST API and the Python standard library plus `requests`.
No Ledger-specific dependency:

```python
import requests

BASE = "http://127.0.0.1:5000"

# 1. Send an APDU and read the response (status word included)
r = requests.post(f"{BASE}/apdu", json={"data": "e0c0000004"})
print("APDU response:", r.json()["data"])

# 2. Read what is currently displayed on the screen
events = requests.get(f"{BASE}/events", params={"currentscreenonly": "true"}).json()
for e in events["events"]:
    print("screen text:", e["text"])

# 3. Press a button (Nano: "left" / "right" / "both")
requests.post(f"{BASE}/button/right", json={"action": "press-and-release"})

# 4. Touch the screen (Stax / Flex / Apex+), coordinates in pixels
requests.post(f"{BASE}/finger", json={"action": "press-and-release", "x": 200, "y": 300})

# 5. Capture a screenshot
png = requests.get(f"{BASE}/screenshot").content
open("screen.png", "wb").write(png)
```

A typical agent loop is: **send APDU → poll `/events` until the expected text
appears → press the right button/touch → repeat**. Because `/events` returns the
on-screen text, an agent can decide what to click without hard-coding screen
coordinates.

## Hands-off button automation

If you know the screen flow in advance, you can let Speculos press buttons itself
when a given text appears, via [automation rules](automation.md). This avoids
polling from your code entirely — useful for deterministic CI runs.

## Recommended: use Ragger for real test suites

For anything beyond a quick script, use
[**Ragger**](https://ledgerhq.github.io/ragger/), Ledger's official test
framework. It wraps Speculos (the `SpeculosBackend`), gives you a typed APDU
client, screen navigation helpers, and golden-snapshot comparison, and lets the
same tests run against a real device. It is the foundation of most Ledger app
test suites.

```python
from ragger.backend import SpeculosBackend

# Point at your own app built against a released SDK (API level auto-detected).
backend = SpeculosBackend("path/to/app.elf", "flex")
with backend as device:
    response = device.exchange(cla=0xe0, ins=0xc0, p1=0, p2=0, data=b"")
    print(response.data.hex())
```

> To drive the bundled `apps/boil.elf` demo through Ragger, pass the explicit API
> level: `SpeculosBackend("apps/boil.elf", "nanox")`.

## What's next

- [REST API reference](api.md)
- [Send APDUs (clients)](clients.md)
- [Automation rules](automation.md)
- A runnable end-to-end script lives in
  [`examples/quickstart/`](https://github.com/LedgerHQ/speculos/tree/master/examples/quickstart)
