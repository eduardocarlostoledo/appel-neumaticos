# Security Policy

## Reporting a vulnerability

Send security issues to `info@appelneumaticos.com` with:

- Affected URL or component
- Steps to reproduce
- Browser and version
- Impact assessment
- Screenshots or proof of concept if available

## Triage

- Acknowledge within 5 business days
- Classify by severity and exposure
- Patch high-risk issues before public disclosure

## Scope

This repository is a static React/Vite application deployed behind Netlify.
Relevant security controls are:

- HTTP security headers
- Third-party resource minimization
- Dependency lockfile review
- Public reporting channel

## Notes for audit

- Keep `package-lock.json` committed and current
- Generate and archive an SBOM before release
- Review third-party embeds before each deployment
