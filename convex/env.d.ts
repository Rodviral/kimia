/**
 * Convex Environment Variables
 *
 * These environment variables should be set in the Convex dashboard:
 * Navigate to your deployment > Settings > Environment Variables
 *
 * Required variables:
 * - AUTH_SECRET: A random string for JWT signing (generate with: openssl rand -base64 32)
 * - SITE_URL: The URL of your site (e.g., http://localhost:5173 for dev)
 *
 * Note: do not add `declare module "convex/server"` here. Because this file has
 * no top-level import/export it is a global script, so that block would declare
 * an ambient module that shadows the real `convex/server` package instead of
 * augmenting it, stripping `defineSchema`/`defineTable` and collapsing the whole
 * Convex data model to `any`.
 */

export {};
