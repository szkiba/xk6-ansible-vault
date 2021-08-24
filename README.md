# xk6-ansible-vault

A k6 extension enables k6 tests to comfortably encrypt and decrypt ansible vault values.
Using ansible vault in tests makes possible to publish secrets with tests in a safe way.
The vault password can be pass as environment variable when test run.

The underlying implementation is https://github.com/sosedoff/ansible-vault-go

Built for [k6](https://go.k6.io/k6) using [xk6](https://github.com/grafana/xk6).

## Usage

Import an entire module's contents:
```JavaScript
import * as vault from "k6/x/ansible-vault";
```

Import a single export from a module:
```JavaScript
import { encrypt, decrypt } from "k6/x/ansible-vault";
```

## API

Functions:

- [encrypt](docs/README.md#encrypt)
- [decrypt](docs/README.md#decrypt)

For complete API documentation click [here](docs/README.md)!

## Build

To build a `k6` binary with this extension, first ensure you have the prerequisites:

- [Go toolchain](https://go101.org/article/go-toolchain.html)
- Git

Then:

1. Install `xk6`:
  ```bash
  $ go install go.k6.io/xk6/cmd/xk6@latest
  ```

2. Build the binary:
  ```bash
  $ xk6 build --with github.com/szkiba/xk6-ansible-vault@latest
  ```
