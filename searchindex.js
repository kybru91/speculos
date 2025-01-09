Search.setIndex({"docnames": ["dev/ci", "dev/getting_started", "dev/index", "dev/internals", "dev/tests", "index", "installation/build", "installation/index", "installation/wsl", "requirements", "user/api", "user/automation", "user/clients", "user/debug", "user/docker", "user/index", "user/macm1", "user/semihosting", "user/usage"], "filenames": ["dev/ci.md", "dev/getting_started.md", "dev/index.rst", "dev/internals.md", "dev/tests.md", "index.rst", "installation/build.md", "installation/index.rst", "installation/wsl.md", "requirements.txt", "user/api.md", "user/automation.md", "user/clients.md", "user/debug.md", "user/docker.md", "user/index.rst", "user/macm1.md", "user/semihosting.md", "user/usage.md"], "titles": ["Continuous Integration", "Getting Started", "Developer documentation", "Internals", "Tests", "Speculos documentation", "Linux", "Installation", "Windows (with WSL 2)", "rtd-theme 2.0.0 needs sphinx&lt;8, but is buggy with sphinx 7, so both are pinned", "REST API", "Automation: press buttons automatically", "Clients: how to send APDUs", "Debug: how to use GDB", "Docker", "User", "Docker - for Mac M1", "Semihosting as an additional debug mechanism", "Usage"], "terms": {"The": [0, 1, 3, 4, 6, 10, 11, 12, 14, 16, 17, 18], "dockerfil": [0, 16], "build": [0, 4, 5, 8, 18], "contain": [0, 14, 16], "all": [0, 4, 14, 16], "requir": [0, 5, 8, 14, 16, 18], "depend": 0, "docker": [0, 5, 15, 18], "f": 0, "t": [0, 1, 3, 13, 14, 16, 18], "ghcr": [0, 14, 16], "io": [0, 10, 14, 16], "ledgerhq": [0, 14, 16], "result": [0, 3], "i": [0, 1, 3, 4, 6, 8, 10, 11, 12, 14, 16, 17, 18], "push": 0, "github": [0, 14], "packag": [0, 6, 14], "ci": [0, 1, 5], "can": [0, 1, 3, 4, 6, 10, 11, 12, 13, 14, 16, 17, 18], "eventu": [0, 3], "us": [0, 1, 4, 5, 6, 8, 10, 11, 12, 15, 18], "itself": [0, 18], "imag": [0, 5, 18], "also": [0, 6, 12, 18], "manual": 0, "appropri": 0, "credenti": 0, "latest": [0, 14, 16], "tag": [0, 14, 16], "git": [0, 6], "rev": 0, "pars": 0, "short": 0, "head": 0, "run": [0, 5, 10, 14, 16], "from": [0, 3, 5, 8, 10, 14, 16, 17], "command": [0, 4, 6, 12, 14, 16, 18], "line": [0, 6, 12, 14, 16, 18], "thi": [0, 4, 6, 8, 10, 11, 12, 18], "should": [0, 4, 11, 16, 18], "done": 0, "which": [0, 4, 6, 10, 12, 14, 16, 17, 18], "publish": [0, 14, 16], "c": [1, 4, 6, 12, 17], "code": [1, 5, 17], "accord": [1, 11], "set": [1, 10, 11, 12, 18], "rule": [1, 10], "heurist": 1, "check": [1, 6], "fail": 1, "some": [1, 3, 6, 11, 13, 17, 18], "isn": [1, 3, 18], "expect": [1, 11], "To": 1, "ensur": 1, "pass": [1, 6, 14, 16, 17, 18], "pleas": [1, 6], "script": [1, 18], "tool": [1, 12, 13, 18], "sh": [1, 13], "path": [1, 11, 12, 18], "specifi": [1, 11, 18], "thank": [1, 3, 5, 10, 12, 13, 14, 16, 18], "clang_format": 1, "environ": [1, 10, 12, 14, 16, 18], "variabl": [1, 11, 12, 14, 16, 18], "11": 1, "get": [2, 12], "start": 2, "test": [2, 5, 10, 11, 12, 18], "intern": [2, 5], "continu": [2, 5], "integr": [2, 5, 6], "emul": [3, 12], "actual": 3, "userland": 3, "applic": [3, 4, 11, 18], "cross": [3, 6], "compil": [3, 6], "arm": [3, 6, 17], "architectur": 3, "It": [3, 6, 11], "open": 3, "target": [3, 12, 17, 18], "app": [3, 4, 8, 11, 12, 13, 14, 15, 16, 17], "elf": [3, 12, 13, 14, 16, 18], "filesystem": 3, "map": 3, "memori": 3, "launch": [3, 4, 8, 18], "qemu": [3, 6, 17], "static": [3, 6], "jump": 3, "entrypoint": [3, 6, 14, 16], "debug": [3, 5, 6, 15], "gdb": [3, 5, 6, 15], "multiarch": [3, 6], "svc": [3, 17], "instruct": 3, "replac": [3, 16], "udf": 3, "undefin": 3, "gener": [3, 4], "sigil": 3, "signal": 3, "upon": 3, "execut": [3, 6, 11], "allow": [3, 11, 18], "catch": 3, "them": 3, "unfortun": 3, "lead": 3, "unexpect": 3, "byte": 3, "being": [3, 6], "patch": 3, "x01": [3, 12], "xdf": 3, "found": [3, 10], "binari": [3, 4], "A": [3, 10, 11, 14, 18], "disassembl": 3, "could": 3, "give": 3, "better": 3, "doesn": [3, 18], "look": 3, "worth": 3, "As": [3, 11], "side": 3, "note": [3, 6, 12], "svc_call": 3, "function": 3, "becaus": [3, 6, 11, 18], "ar": [3, 4, 11, 12, 14, 16, 17, 18], "inlin": 3, "other": [3, 11], "altern": 3, "were": 3, "consid": [3, 11], "instanc": [3, 4, 6, 10, 12, 17, 18], "seccomp": 3, "ptrace": 3, "thei": 3, "seem": [3, 18], "practic": 3, "don": [3, 14, 16], "support": [3, 4, 12, 14, 16, 18], "associ": 3, "place": 4, "everi": [4, 13], "type": 4, "have": [4, 16, 18], "dedic": 4, "file": [4, 11, 18], "like": [4, 8], "python3": [4, 6, 12], "m": [4, 12], "pytest": 4, "": [4, 6, 8, 14, 16, 18], "v": [4, 14, 16], "crypto": 4, "syscal": [4, 13], "follow": [4, 6, 8, 11, 12, 14, 16, 17], "make": [4, 6, 11], "argument": [4, 11, 13, 17, 18], "given": [4, 18], "ctest": 4, "For": [4, 6, 10, 12, 17, 18], "output": 4, "specif": [4, 10, 18], "verbos": 4, "arg": 4, "r": [4, 17, 18], "test_bip32": 4, "In": 4, "order": [4, 11], "instrument": 4, "cmake": [4, 6], "configur": [4, 14, 16], "code_coverag": 4, "macro": 4, "b": [4, 6, 12], "dcode_coverag": 4, "ON": 4, "clean": 4, "when": [4, 6, 8, 10, 11, 14, 16], "gcc": [4, 6], "project": [4, 14, 16], "default": [4, 11, 14, 16, 18], "enabl": 4, "gcov": 4, "creat": [4, 14, 16], "gcno": 4, "lcov": 4, "collect": 4, "html": 4, "report": 4, "d": [4, 10, 11, 13, 14, 16], "zerocount": 4, "captur": 4, "initi": 4, "o": [4, 5, 10], "base": [4, 14], "rng_seed": 4, "0": [4, 8, 10, 12, 14, 16, 17, 18], "rc": 4, "lcov_branch_coverag": 4, "1": [4, 6, 10, 11, 12, 16, 18], "add": [4, 8, 18], "tracefil": 4, "total": 4, "genhtml": 4, "sourc": 5, "linux": [5, 7, 8], "mac": [5, 15], "how": [5, 15], "vnc": [5, 14, 16, 18], "m1": [5, 15], "window": [5, 7, 18], "wsl": [5, 7], "2": [5, 7, 11, 14, 16, 17, 18], "send": [5, 15, 18], "apdu": [5, 14, 15, 16], "more": [5, 18], "autom": [5, 10, 15], "action": [5, 10], "rest": [5, 6, 15], "api": [5, 15, 16], "press": [5, 10, 15], "button": [5, 10, 15, 18], "automat": [5, 15, 18], "semihost": [5, 13, 15], "addit": [5, 13, 15], "mechan": [5, 13, 15], "debian": 6, "version": [6, 11, 12], "10": 6, "buster": 6, "later": 6, "ubuntu": 6, "18": 6, "04": [6, 18], "sudo": 6, "apt": 6, "gnueabihf": 6, "libc6": 6, "dev": 6, "armhf": 6, "pyqt5": 6, "construct": 6, "flask": 6, "jsonschema": 6, "mnemon": 6, "pil": 6, "pyelftool": 6, "request": 6, "user": [6, 10, 18], "libvncserv": 6, "although": 6, "necessari": 6, "python": 6, "see": 6, "below": [6, 8, 11], "easiest": 6, "wai": 6, "pip": [6, 12], "wrap": 6, "around": 6, "includ": 6, "high": 6, "level": 6, "ragger": 6, "framework": 6, "ought": 6, "virtualenv": 6, "els": 6, "admin": 6, "right": [6, 11, 18], "first": [6, 11], "take": [6, 10], "time": 6, "tarbal": 6, "openssl": 6, "download": 6, "befor": [6, 11], "built": [6, 18], "further": [6, 11], "invoc": 6, "skip": 6, "step": [6, 8], "dcmake_build_typ": 6, "with_vnc": 6, "dwith_vnc": 6, "subsystem": 8, "ident": 8, "procedur": 8, "speculo": [8, 10, 11, 12, 13, 14, 16, 18], "displai": [8, 11, 14, 16], "featur": [8, 13], "correctli": 8, "export": 8, "x": [8, 11, 18], "rough": 8, "do": 8, "so": 8, "detail": [8, 18], "avail": [8, 10, 11, 12, 14, 16, 18], "blogpost": 8, "your": [8, 14, 16], "bashrc": 8, "within": 8, "wsl2": 8, "sed": 8, "n": [8, 17], "nameserv": 8, "p": [8, 14, 16, 18], "etc": [8, 10, 18], "resolv": 8, "conf": 8, "instal": [8, 12, 18], "an": [8, 11, 13, 14, 15, 16, 18], "server": [8, 12, 14, 16, 18], "host": [8, 14, 16], "vcxsrv": 8, "disabl": 8, "access": 8, "control": [8, 12], "prompt": 8, "simpli": 8, "prior": 8, "through": [8, 12, 18], "myst": 9, "parser": 9, "sphinxcontrib": 9, "rawfil": 9, "http": [10, 12], "127": [10, 12, 18], "5000": [10, 14, 16], "port": [10, 14, 16, 18], "chang": 10, "url": 10, "swagger": 10, "demo": 10, "websit": 10, "meant": 10, "devic": [10, 12, 18], "screenshot": 10, "updat": 10, "left": [10, 11, 18], "simpl": 10, "curl": 10, "releas": [10, 11, 12, 17], "png": 10, "There": 10, "interfac": 10, "directli": [10, 18], "commun": [10, 12], "appli": 11, "eg": 11, "met": 11, "usual": [11, 12], "text": [11, 18], "screen": [11, 18], "especi": 11, "json": 11, "either": 11, "document": [11, 18], "prefix": 11, "list": 11, "each": [11, 18], "dictionari": 11, "valid": 11, "kei": [11, 18], "string": 11, "regexp": 11, "regular": 11, "express": 11, "match": 11, "coordin": 11, "int": 11, "y": 11, "describ": 11, "option": [11, 18], "4": [11, 18], "num": 11, "true": 11, "fals": 11, "finger": 11, "touch": 11, "setbool": 11, "varnam": 11, "valu": [11, 18], "whose": 11, "name": [11, 16], "boolean": 11, "exit": [11, 18], "onli": 11, "These": [11, 18], "success": [11, 16], "discard": 11, "implement": [11, 17], "tupl": 11, "where": 11, "unset": 11, "equal": 11, "If": [11, 12, 16], "non": 11, "empti": 11, "well": 11, "one": 11, "35": [11, 12], "3": [11, 18], "seen": 11, "default_match": 11, "wa": 11, "never": 11, "second": 11, "number": [11, 17], "ani": 11, "nor": 11, "without": [11, 12], "confirm": 11, "last": [11, 18], "previou": 11, "emb": 12, "tcp": 12, "listen": 12, "9999": [12, 18], "forward": [12, 14, 16], "librari": 12, "pip3": 12, "ledger_proxy_address": [12, 18], "ledger_proxy_port": [12, 18], "tri": 12, "e0": 12, "c4": 12, "00": [12, 18], "bitcoin": [12, 15], "echo": [12, 18], "e0c4000000": 12, "13": 12, "37": 12, "096": 12, "099": 12, "1b3001030e0100039000": 12, "most": 12, "reli": 12, "sinc": 12, "24": 12, "usag": [12, 15, 17], "similar": 12, "py": [12, 13, 14, 16, 18], "btc": [12, 13, 14, 16, 18], "runscript": 12, "1b30010308010003": 12, "9000": 12, "clear": 12, "bytearrai": 12, "x1b0": 12, "x03": 12, "x08": 12, "x00": 12, "real": [12, 18], "pythonpath": 12, "pwd": [12, 14, 16], "testmultisigarmori": 12, "its": 12, "own": 12, "physic": 12, "instead": [12, 18], "transmit": 12, "proxi": 12, "debug_comm_http_proxi": 12, "9998": 12, "getaddress": 12, "49": 12, "derivationmod": 12, "segwit": 12, "trick": 13, "trace": 13, "pull": 14, "And": 14, "few": [14, 16], "root": [14, 16], "rm": [14, 16], "41000": [14, 16], "headless": [14, 16, 18], "folder": [14, 16], "here": [14, 16, 17], "mount": [14, 16], "obvious": [14, 16], "interact": [14, 16], "shell": [14, 16], "bin": [14, 16], "bash": [14, 16], "forget": [14, 16], "1234": [14, 16], "40000": [14, 16], "model": [14, 16, 18], "nano": [14, 16, 18], "sdk": [14, 16, 18], "seed": [14, 16], "secret": [14, 16], "up": [14, 16], "edit": [14, 16], "yml": [14, 16], "fit": [14, 16], "need": [14, 16], "local": 14, "client": [15, 18], "testnet": 15, "perform": 16, "modif": 16, "builder": 16, "AS": 16, "aarch64": [16, 17], "Then": 16, "you": [16, 18], "l": [16, 18], "repositori": 16, "id": 16, "size": 16, "634c66a13457": 16, "15": 16, "minut": 16, "ago": 16, "593mb": 16, "5001": 16, "oper": 17, "trigger": 17, "messag": 17, "print": 17, "stderr": 17, "void": 17, "debug_writ": 17, "char": 17, "buf": 17, "asm": 17, "volatil": 17, "mov": 17, "r0": 17, "0x04": 17, "r1": 17, "0xab": 17, "must": 17, "defin": [17, 18], "r2": 17, "r3": 17, "magic": 17, "aarch32": 17, "semi": 17, "after": 18, "page": 18, "With": 18, "recent": 18, "detect": 18, "otherwis": 18, "flex": 18, "stax": 18, "blue": 18, "nanox": 18, "1c8db8da": 18, "nanosp": 18, "17bf7619": 18, "5": 18, "00000000": 18, "select": 18, "howev": 18, "against": 18, "k": 18, "src": 18, "h": 18, "main": 18, "choos": 18, "6": 18, "help": 18, "flag": 18, "arrow": 18, "down": 18, "conveni": 18, "shortcut": 18, "q": 18, "sever": 18, "paramet": 18, "qt": 18, "noth": 18, "ui": 18, "consol": 18, "handi": 18, "along": 18, "spawn": 18, "maco": 18, "password": 18, "unauthent": 18, "session": 18, "issu": 18, "34": 18, "record": 18, "save": 18, "gif": 18, "On": 18, "icon": 18, "deriv": 18, "dure": 18, "inform": 18, "embed": 18, "thu": 18, "cannot": 18, "retriev": 18, "respect": 18, "33": 18, "7": 18, "speculos_appnam": 18, "blah": 18, "b0": 18, "01": 18, "ledgerctl": 18, "xxd": 18, "hd": 18, "62": 18, "6c": 18, "61": 18, "68": 18, "07": 18, "31": 18, "2e": 18, "32": 18, "00000010": 18, "90": 18, "00000012": 18, "charact": 18, "recognit": 18}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"continu": 0, "integr": 0, "speculo": [0, 5, 6], "builder": 0, "get": 1, "start": 1, "clang": 1, "format": 1, "develop": [2, 5], "document": [2, 5], "intern": 3, "syscal": 3, "hook": 3, "test": 4, "how": [4, 12, 13, 14, 16], "run": 4, "code": 4, "coverag": 4, "user": [5, 15], "instal": [5, 6, 7], "basic": 5, "usag": [5, 10, 18], "interact": 5, "an": [5, 17], "app": [5, 18], "For": 5, "advanc": 5, "linux": 6, "requir": 6, "build": [6, 14, 16], "launcher": 6, "onli": 6, "vnc": 6, "support": 6, "option": 6, "window": 8, "wsl": 8, "2": [8, 9], "rtd": 9, "theme": 9, "0": 9, "need": 9, "sphinx": 9, "8": 9, "i": 9, "buggi": 9, "7": 9, "so": 9, "both": 9, "ar": 9, "pin": 9, "v3": 9, "still": 9, "beta": 9, "should": 9, "work": 9, "newer": 9, "version": [9, 18], "rest": 10, "api": 10, "web": 10, "ui": 10, "autom": 11, "press": 11, "button": 11, "automat": 11, "rule": 11, "action": 11, "condit": 11, "exampl": 11, "client": 12, "send": 12, "apdu": 12, "ledgerctl": 12, "ledgerwallet": 12, "blue": 12, "loader": 12, "python": 12, "ledgerblu": 12, "btchip": 12, "ledger": 12, "live": 12, "common": 12, "debug": [13, 14, 16, 17], "us": [13, 14, 16], "gdb": 13, "docker": [14, 16], "imag": [14, 16], "argument": [14, 16], "compos": [14, 16], "setup": [14, 16], "mac": 16, "m1": 16, "semihost": 17, "addit": 17, "mechan": 17, "sys_write0": 17, "refer": 17, "keyboard": 18, "control": 18, "displai": 18, "name": 18, "bitcoin": 18, "testnet": 18, "ocr": 18}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Continuous Integration": [[0, "continuous-integration"]], "Speculos builder": [[0, "speculos-builder"]], "Speculos": [[0, "speculos"]], "Getting Started": [[1, "getting-started"]], "clang-format": [[1, "clang-format"]], "Developer documentation": [[2, "developer-documentation"]], "Internals": [[3, "internals"]], "Syscall hooks": [[3, "syscall-hooks"]], "Tests": [[4, "tests"]], "How to run tests": [[4, "how-to-run-tests"]], "Code coverage": [[4, "code-coverage"]], "Speculos documentation": [[5, "speculos-documentation"]], "Users": [[5, "users"]], "Installation and basic usage": [[5, "installation-and-basic-usage"]], "Interaction with an app": [[5, "interaction-with-an-app"]], "For advanced users": [[5, "for-advanced-users"]], "Speculos developers": [[5, "speculos-developers"]], "Linux": [[6, "linux"]], "Requirements": [[6, "requirements"]], "Build & install": [[6, "build-install"]], "Building the Speculos launcher only": [[6, "building-the-speculos-launcher-only"]], "speculos": [[6, "speculos"]], "VNC support (optional)": [[6, "vnc-support-optional"]], "Installation": [[7, "installation"]], "Windows (with WSL 2)": [[8, "windows-with-wsl-2"]], "rtd-theme 2.0.0 needs sphinx<8, but is buggy with sphinx 7, so both are pinned": [[9, "rtd-theme-2-0-0-needs-sphinx-8-but-is-buggy-with-sphinx-7-so-both-are-pinned"]], "rtd-theme v3 is still beta but should work with newer sphinx versions": [[9, "rtd-theme-v3-is-still-beta-but-should-work-with-newer-sphinx-versions"]], "REST API": [[10, "rest-api"]], "Usage": [[10, "usage"], [18, "usage"]], "Web UI": [[10, "web-ui"]], "Automation: press buttons automatically": [[11, "automation-press-buttons-automatically"]], "Rules": [[11, "rules"]], "Actions": [[11, "actions"]], "Conditions": [[11, "conditions"]], "Example": [[11, "example"]], "Clients: how to send APDUs": [[12, "clients-how-to-send-apdus"]], "ledgerctl (ledgerwallet)": [[12, "ledgerctl-ledgerwallet"]], "blue-loader-python (ledgerblue)": [[12, "blue-loader-python-ledgerblue"]], "btchip-python": [[12, "btchip-python"]], "ledger-live-common": [[12, "ledger-live-common"]], "Debug: how to use GDB": [[13, "debug-how-to-use-gdb"]], "Docker": [[14, "docker"]], "How to use the Docker image": [[14, "how-to-use-the-docker-image"], [16, "how-to-use-the-docker-image"]], "Arguments": [[14, "arguments"], [16, "arguments"]], "Debug": [[14, "debug"], [16, "debug"]], "docker-compose setup": [[14, "docker-compose-setup"], [16, "docker-compose-setup"]], "Build": [[14, "build"]], "User": [[15, "user"]], "Docker - for Mac M1": [[16, "docker-for-mac-m1"]], "How to build the Docker image": [[16, "how-to-build-the-docker-image"]], "Semihosting as an additional debug mechanism": [[17, "semihosting-as-an-additional-debug-mechanism"]], "SYS_WRITE0": [[17, "sys-write0"]], "References": [[17, "references"]], "Keyboard control": [[18, "keyboard-control"]], "Display": [[18, "display"]], "App name and version": [[18, "app-name-and-version"]], "Bitcoin Testnet app": [[18, "bitcoin-testnet-app"]], "OCR": [[18, "ocr"]]}, "indexentries": {}})