[@atala/prism-wallet-sdk](../README.md) / [Exports](../modules.md) / [Domain](../modules/Domain.md) / KeyRestoration

# Interface: KeyRestoration

[Domain](../modules/Domain.md).KeyRestoration

KeyRestoration protocol defines methods for verifying and restoring cryptographic keys from raw data.

## Implemented by

- [`Apollo`](../classes/Apollo.md)

## Table of contents

### Methods

- [restorePrivateKey](Domain.KeyRestoration.md#restoreprivatekey)
- [restorePublicKey](Domain.KeyRestoration.md#restorepublickey)

## Methods

### restorePrivateKey

▸ **restorePrivateKey**(`key`): [`PrivateKey`](../classes/Domain.PrivateKey.md)

Restores a PrivateKey from the given StorableKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`StorableKey`](Domain.StorableKey-1.md) |

#### Returns

[`PrivateKey`](../classes/Domain.PrivateKey.md)

PrivateKey instance

**`Throws`**

if the restoration process fails

#### Defined in

[src/domain/protocols/KeyRestoration.ts:14](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/domain/protocols/KeyRestoration.ts#L14)

___

### restorePublicKey

▸ **restorePublicKey**(`key`): [`PublicKey`](../classes/Domain.PublicKey.md)

Restores a PublicKey from the given StorableKey

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`StorableKey`](Domain.StorableKey-1.md) |

#### Returns

[`PublicKey`](../classes/Domain.PublicKey.md)

PublicKey instance

**`Throws`**

if the restoration process fails, this method throws an error

#### Defined in

[src/domain/protocols/KeyRestoration.ts:23](https://github.com/hyperledger/identus-edge-agent-sdk-ts/blob/09a15046403a2249034c5ff5dfc7e6e562cd9171/src/domain/protocols/KeyRestoration.ts#L23)
