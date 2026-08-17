#pragma once

#include <stdint.h>

/* for cx_curve_t */
#include "cx.h"

#define HDW_NORMAL         0
#define HDW_ED25519_SLIP10 1
#define HDW_SLIP21         2

#define BIP32_SECP_SEED_LENGTH 12
#define BIP32_NIST_SEED_LENGTH 14
#define BIP32_ED_SEED_LENGTH   12
#define SLIP21_SEED_LENGTH     18
#define BLS12377_SEED_LENGTH   14

extern uint8_t const BIP32_SECP_SEED[BIP32_SECP_SEED_LENGTH];
extern uint8_t const BIP32_NIST_SEED[BIP32_NIST_SEED_LENGTH];
extern uint8_t const BIP32_ED_SEED[BIP32_ED_SEED_LENGTH];
extern uint8_t const SLIP21_SEED[SLIP21_SEED_LENGTH];
extern uint8_t const BLS12_377_SEED[BLS12377_SEED_LENGTH];

typedef struct {
  uint8_t private_key[64];
  uint8_t chain_code[32];
} extended_private_key;

void expand_seed_bip32(const cx_curve_domain_t *domain, uint8_t *seed,
                       unsigned int seed_length, extended_private_key *key);

/* OS-level derivation: bypasses the app derivation-path check (fromApp=false).
 * Use this for OS syscall implementations that derive keys on behalf of the OS,
 * independently of the app's declared BIP32 paths. */
uint32_t os_perso_derive_node_os_level(uint32_t mode, cx_curve_t curve,
                                       const uint32_t *path,
                                       uint32_t pathLength, uint8_t *privateKey,
                                       uint8_t *chain);
