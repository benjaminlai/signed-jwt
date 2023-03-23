import { readFileSync } from 'fs';
import { verify } from 'jsonwebtoken';

import { createSignedJWT } from './jwt';

describe('signed jwt', () => {
  it('should validate', () => {
    const publicKey = readFileSync(
      'services/dev/consumer-service/public.key',
      'utf8'
    );
    const signedJWT = createSignedJWT('dev', 'consumer-service');
    verify(signedJWT, publicKey);
  });
});
