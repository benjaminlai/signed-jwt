import { generateKeyPairSync } from 'crypto';

export const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});
