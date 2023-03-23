import { sign } from 'jsonwebtoken';

import { readFileSync } from 'fs';

const samplePayload = {
  userId: 'f56195ad-4a29-4ffc-bb0f-693283853411',
};

const s = 'subject@subject.com'; // Subject
const a = 'producer-service'; // Audience

export const createSignedJWT = (env: string, issuer: string) => {
  const issuerPrivateKey = readFileSync(
    `services/${env}/${issuer}/private.key`
  );

  return sign(samplePayload, issuerPrivateKey, {
    issuer,
    subject: s,
    audience: a,
    expiresIn: '12h',
    algorithm: 'RS256',
  });
};
