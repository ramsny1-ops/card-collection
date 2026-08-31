# Security Policy

## Supported versions

The latest version on the default branch receives security fixes.

## Reporting a vulnerability

Do not open a public issue containing exploit details for a security vulnerability.

Contact the maintainers privately using the repository's security reporting channel. Include:

- affected file or feature
- clear reproduction steps
- expected impact
- browser and runtime information
- a minimal proof of concept when safe to provide

## Scope

This project is a client-side UI demonstration repository. It does not intentionally process payment information, authentication credentials, identity documents, or access-control secrets.

## Sensitive demonstration data

Never commit:

- real payment card data
- CVV values
- private API keys
- passwords
- session tokens
- government identification records
- real boarding credentials
- real hotel access credentials

## localStorage

The demo studio can store visual configuration in localStorage. Do not use that mechanism for confidential information.
