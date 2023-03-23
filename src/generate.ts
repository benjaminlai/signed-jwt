import { existsSync, mkdirSync, writeFileSync } from 'fs';

import { generateKeyPairSync } from 'crypto';

export const generateKeys = (env: string, issuer: string) => {
  const baseLocation = verifyDirectoryExists(`services/${env}/${issuer}`);

  const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
  });

  const exportedPrivateKeyBuffer = privateKey.export({
    type: 'pkcs1',
    format: 'pem',
  });

  const exportedPublicKeyBuffer = publicKey.export({
    type: 'pkcs1',
    format: 'pem',
  });

  writeFileSync(`./${baseLocation}/public.key`, exportedPublicKeyBuffer, {
    encoding: 'utf-8',
  });

  // Assume this will be in secrets manager
  writeFileSync(`./${baseLocation}/private.key`, exportedPrivateKeyBuffer, {
    encoding: 'utf-8',
  });
};

const verifyDirectoryExists = (dir: string) => {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  return dir;
};
