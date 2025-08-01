# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.25.2] 2025-07-28

### Changed

- Update of fonts for Apex API_LEVEL_25

### Fix

- Avoid defining strlcpy starting from glibc 2.38

## [0.25.1] 2025-07-21

### Fix

- Fix missing check of API level 25 when loading fonts

## [0.25.0] 2025-07-16

### Added

- Add support of API level 25 (Apex)

## [0.24.0] 2025-07-10

### Added

- Automatically try to find an available apdu port
- Stax/Flex navigation with keyboard:
  - Arrow Left / Right keys: Previous / Next actions in bottom right corner
  - Return: Approve button in center
  - Escape: Cancel button (review) in bottom left corner
  - Backspace: Back button in top left corner
  - M: Menu (Setting/Info) in top right corner

### Fix

- Deploy workflow: regex to correctly set the `PUSH_FLAG`

## [0.23.0] 2025-07-02

### Added

- Add support of API level 24 (IO Revamp)
- Add Curve `cv25519` support

### Fix

- Support Rust apps on Nano devices with BAGL

### Changed

- Update Shared lib ELF files for API_LEVEL 23

## [0.22.0] 2025-06-02

### Fix

- Fix nb_fonts check and make OCR working again
- Fix issue with LNX/LNSP Apps using BAGL with API_LEVEL 23
- Fix crash in nano shared lib files

### Changed

- Modular exponentiation with exponent 0 is allowed in BOLOS
- Only load pygame with --sound & suppress pygame message

## [0.21.2] 2025-04-28

### Fix

- Incorrect syscall address for API level < 23

## [0.21.1] 2025-04-25

### Fix

- Incorrect font size/address computed when starting Speculos with libraries

## [0.21.0] 2025-04-23

### Added

- Add `key1_sign_without_code_hash` endorsement syscall.

## [0.20.0] 2025-04-23

### Added

- Add support of API level 23 (Cx -> Shared)
- Implement new endorsement syscalls"
- Implement NBGL adaptations to avoid drawing outside of area/screen
- Add option `-S/--sound` allowing to play the Tunes (including the wav files)

## [0.19.0] 2025-03-31

### Changed

- Ported the code to PyQt6

## [0.18.0] 2025-03-14

### Added

- Do not rely on C_bagl_fonts to check whether an app is BAGL or NBGL

## [0.17.0] 2025-03-14

### Added

- `--save-nvram` and `--load-nvram` parameters that allow NVRAM testing
- destination boundaries verification for `nvm_write()`
- Make BAGL-based applications able to call NBGL-based libraries, or NBGL-based applications able to call BAGL-based libraries

## [0.16.0] 2025-03-05

### Changed

- Allow CORS in order to be used directly from external website (ie: [DMK Playground](https://app.devicesdk.ledger.com/))

### Fixed

- Fixed `prod-pki` option in helper usage in the good group
- Fixed `logger.warn` deprecated API

### Added

- Add `-v/--verbose` to increase verbosity. Default behavior now is to limit _werkzeug_ logs and remove timestamp from logs

## [0.15.0] 2025-02-24

### Added

- Added support for Python versions 3.12 and 3.13

### Fixed

- Fixed prod-pki option

## [0.14.0] 2025-02-06

### Changed

- Increase number of sideloaded applications to 64

## [0.13.1] 2025-01-28

### Fixed

- Re-enable the support for Python 3.9

## [0.13.0] 2025-01-27

### Added

- Add arm64 host builder
- Enable the use of test key or prod key for PKI

### Changed

- Remove support for Python versions 3.8 and 3.9
- LedgerPKI: Allow any `key ID` and `key usage` values

## [0.12.0] 2024-11-25

### Added

- NFC communication available
- Starting Speculos with the `--transport` argument allows to choose U2F, HID or NFC transport
- Flex and Stax OSes emulation always consider NFC to be up (it can't be deactivated for now)

### Changed

- Update Python dependencies (certifi, urllib3, werkzeug, zipp, requests)

## [0.11.0] 2024-11-12

### Added

- Ledger PKI support (S+/X+Stax/Flex)
- API_LEVEL_22 support (S+/X+Stax/Flex)

## [0.10.0] 2024-10-03

### Added

- Enable support for secp521r1

## [0.9.7] 2024-07-31

### Fixed

- CRC computation for API levels >= 18

## [0.9.6] 2024-07-12

### Fixed

- Fix wrong display of some image files when BPP is not properly set in area

## [0.9.5] 2024-07-03

### Added

- cxlib and fonts for Flex on API_LEVEL_21

## [0.9.4] 2024-06-27

### Added

- Add support of API_LEVEL_21 for Stax and Flex

### Fixed

- Fix size of allocated buffer when redrawing VNC framebuffer

## [0.9.3] 2024-06-20

### Fixed

- Remove the vertical alignment assertion on multiples of 4 on Stax
- Fixed the actions versions for `upload-artifact` and `download-artifact` in v4

## [0.9.2] 2024-06-19

### Added

- Add support of API_LEVEL_20 for Stax and Flex

## [0.9.1] 2024-05-14

### Fixed

- `importlib.resources` does not exists on Python 3.8

## [0.9.0] - 2024-05-06

### Added

- Finger swipe capabilities (this feature is currently only available on Flex, using the capability
  will have no effect on other devices)
- Add support of API_LEVEL_19 for Flex

### Fixed

- Replacing deprecated `pkg_resources` usages with `importlib.resources` equivalents

## [0.8.6] - 2024-04-11

### Fixed

- Fix race condition on screenshot generation
- Fix ticker pause not waiting for end of tick processing

## [0.8.5] - 2024-04-11

### Fixed

- Fix race condition on screenshot generation

## [0.8.4] - 2024-04-10

### Fixed

- Removing PyQt5 from Speculos Docker images as it is unused and triggers error on MAC.
- Fix OCR screen content reset mechanism.
- Fix library mode fonts not unloaded at os_lib_end.

## [0.8.3] - 2024-04-08

### Fixed

- Fix library mode fonts not loaded.

## [0.8.2] - 2024-04-05

### Fixed

- Fix NanoX and NanoSP handling when BAGL is used but fonts are not found in the elf.

## [0.8.1] - 2024-04-04

### Fixed

- Fixed logger initialization that lead to root log handler not being propagated to children

## [0.8.0] - 2024-04-03

### Added

- NBGL support for non-Stax devices
- Add Flex support
- Add support of API_LEVEL_18 for NanoX, NanoS+ and Flex

## [0.7.1] - 2024-02-26

### Fixed

- Specific `cache` mechanism for Python3.8 (`functools.cache` does not exists yet)

## [0.7.0] - 2024-02-26

### Changed

- Significative performance improvement on display/snapshot management
- Simplified HTTP API thread management

## [0.6.0] - 2024-02-21

### Added

- Add support for API_LEVEL_15 for Stax

## [0.5.1] - 2024-02-15

### Added

- Add possibility to set up a timeout for APDU exchange with default value to 5min

## [0.5.0] - 2024-01-11

### Added

- Attestation key or user private keys can now be configured with the new `--attestation-key`
  and `--user-private-key` arguments (or `ATTESTATION_PRIVATE_KEY` and `USER_PRIVATE_KEY` through
  environment variables). User certificates are correctly calculated, signed from the user private
  keys and the attestation key.

### Changed

- Seed, RNG, application name and version are now fetched from the environment when Speculos starts
  then stored internally for further use, rather than fetched when needed during runtime. This
  avoids several Speculos instances from messing up with each other's environment variables.

## [0.4.1] - 2023-12-19

### Fixed

- CX: Fix AES implementation on NanoS

## [0.4.0] - 2023-12-04

### Fixed

- bolos/os_bip32.c: Improve syscall emulation

### Added

- API_LEVEL: Add support for API_LEVEL_14 for Ledger Stax

## [0.3.5] - 2023-11-10

### Fixed

- CX: Update AES implementation to be compatible with API levels >= 12

## [0.3.4] - 2023-11-07

### Features

- Implement cx_bn_gf2_n_mul()

### Miscellaneous Tasks

- Add missing `binutils-arm-none-eabi` package

### README

- Update Limitations section

## [0.3.3] - 2023-10-26

### Fixed

- Launcher: Fix missing RAM relocation emulation on NanoX, NanoSP and Stax

## [0.3.2] - 2023-09-28

### Fixed

- API: the API thread is asked to stop when Speculos exits

## [0.3.1] - 2023-09-28

### Fixed

- OCR: Prevent null dereference when expected font is not in ELF file

## [0.3.0] - 2023-09-11

### Added

- API_LEVEL: Add support for API_LEVEL_13 for corresponding device

## [0.2.10] - 2023-09-01

### Changed

- OCR: Apps using unified SDK don't use OCR anymore. Font info is parsed from .elf file.

## [0.2.9] - 2023-08-31

### Fixed

- Seproxyhal: default status_sent value upon app launch is unset.

## [0.2.8] - 2023-07-31

### Changed

- OCR: Change Stax OCR method. Don't use Tesseract anymore.
- CI: Remove CI job dependency to allow deployment if wanted

### Added

- API_LEVEL: Add support for API_LEVEL_12 for corresponding device

## [0.2.7] - 2023-06-30

### Fixed

- Seproxyhal: Fix SeProxyHal emulation

## [0.2.6] - 2023-06-26

### Fixed

- Seproxyhal: Fix SeProxyHal issue when on LNSP / LNX and HAVE_PRINTF is enabled

## [0.2.5] - 2023-06-21

### Added

- API: Add a ticker/ endpoint to allow control of the ticks sent to the app

### Fixed

- OCR: Fix OCR on NanoX and NanoSP based on API_LEVEL_5 and upper
- Seproxyhal: Fix SeProxyHal emulation to match real devices behavior

## [0.2.4] - 2023-06-13

### Changed

- OCR: Lazy evaluation of screenshot content, performance improvement on Stax

### Fixed

- OCR: screenshot publish is no longer desynchronized with event publish

## [0.2.3] - 2023-06-05

### Fixed

- svc: Fixed emulation of os_lib_call for latest SDK API levels

## [0.2.2] - 2023-06-01

### Changed

- docker: Add blst library to the docker image
- launcher: If Speculos is able to determine the location of the SVC_Call and SVC_cx_call symbols in
  the application elf, it will only try to patch `svc 1` inside the functions.

## [0.2.1] - 2023-05-30

### Fixed

- deployment: re-ordering pypi.org package automatic push in order to avoid incomplete deployments

## [0.2.0] - 2023-05-30

### Changed

- package: Version is not longer customly incremented, but inferred from tag then bundled into the
  package thanks to `setuptools_scm`

## [0.1.265] - 2023-05-12

## [0.1.0] - 2021-07-21

- First release of Speculos on PyPi
