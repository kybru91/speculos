The files in these folder are consumed by the tests to ensure that speculos
works correctly across various devices and apps.

DO NOT use them to test apps or your integrations, as these  binaries are old
and unmantained. Rather, follow the instructions in the app's repository
in order to build the most recent version.

These binaries come from the published releases of the corresponding app
repository (e.g. [app-boilerplate releases](https://github.com/LedgerHQ/app-boilerplate/releases)).

### Naming

Examples:

- `nanox#boil#2.1.0.elf`

If the examples aren't enough, here is the naming convention that should be used:

```text
device model # app name # release version .elf
```

where:

- `device model` is one of the following: `nanox`, `nanosp`, `stax`, `flex`,
  `apex_p` (the speculos model name). Note that release assets name the Nano S+
  `nanos2`, so rename it to `nanosp` here.
- `release version` is the tag of the app release the binary was downloaded from
