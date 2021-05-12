/**
 * xk6-ansible-vault enables k6 tests to comfortably encrypt and decrypt ansible vault values.
 * Using ansible vault in tests makes possible to publish secrets with tests in a safe way.
 * The vault password can be pass as environment variable when test run.
 *
 * ## Usage
 *
 * Import an entire module's contents:
 * ```JavaScript
 * import * as vault from "k6/x/ansible-vault";
 * ```
 *
 * Import a single export from a module:
 * ```JavaScript
 * import { encrypt, decrypt } from "k6/x/ansible-vault";
 * ```
 */

/**
 * The encrypt() method encrypts the input `text` into Ansible Vault format using a given `password`.
 *
 * @param text The string to encrypt
 * @param password The encryption password
 * @returns The ciphertext in Ansible Vault format.
 */
export declare function encrypt(text: string, password: string): string;

/**
 * The decrypt() method decrypts the Ansible Vault format `ciphertext` using a given `password`.
 *
 * @param ciphertext The Ansible Vault format ciphertext
 * @param password The decryption password
 * @returns The original plain text decrypted from ciphertext
 */
export declare function decrypt(ciphertext: object, password: string): string;
