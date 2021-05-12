# xk6-ansible-vault

xk6-ansible-vault enables k6 tests to comfortably encrypt and decrypt ansible vault values.
Using ansible vault in tests makes possible to publish secrets with tests in a safe way.
The vault password can be pass as environment variable when test run.

## Usage

Import an entire module's contents:
```JavaScript
import * as vault from "k6/x/ansible-vault";
```

Import a single export from a module:
```JavaScript
import { encrypt, decrypt } from "k6/x/ansible-vault";
```

## Table of contents

### Functions

- [decrypt](README.md#decrypt)
- [encrypt](README.md#encrypt)

## Functions

### decrypt

▸ **decrypt**(`ciphertext`: *object*, `password`: *string*): *string*

The decrypt() method decrypts the Ansible Vault format `ciphertext` using a given `password`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ciphertext` | *object* | The Ansible Vault format ciphertext |
| `password` | *string* | The decryption password |

**Returns:** *string*

The original plain text decrypted from ciphertext

___

### encrypt

▸ **encrypt**(`text`: *string*, `password`: *string*): *string*

The encrypt() method encrypts the input `text` into Ansible Vault format using a given `password`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | *string* | The string to encrypt |
| `password` | *string* | The encryption password |

**Returns:** *string*

The ciphertext in Ansible Vault format.
