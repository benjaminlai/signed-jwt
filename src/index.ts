import { generateKeys } from './generate';

const environment = process.argv.slice(2)[0];
if (!environment) {
  console.log('Please specify environment');
  process.exit(1);
}

const issuer = process.argv.slice(2)[1];
if (!issuer) {
  console.log('Please specify issuer');
  process.exit(1);
}

// Step 1 - Generate public and private key
generateKeys(environment, issuer);
