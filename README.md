# Flowett Common

Common types and utilities for Flowett projects.

## Overview

This package contains shared types, interfaces, and utilities used across the Flowett ecosystem. By centralizing these common elements, we ensure consistency and eliminate duplicate code across packages.

## Contents

- `NodeType` enum for defining node types (trigger, action, utility)
- Interface definitions for node structure and behavior
- Common utility types

## Usage

```typescript
import { NodeType, INodeDefinition } from '@flowett/common';

export class MyCustomNode implements INodeDefinition {
  id = 'my-custom-node';
  name = 'My Custom Node';
  type = NodeType.ACTION;
  // ...
}
```

## Installation

```bash
bun add @flowett/common
```

Or if using npm:

```bash
npm install @flowett/common
```

## Publishing

This package should be published to the npm registry under the @flowett organization:

```bash
# Make sure you're logged in to npm
npm login

# Publish to npm registry as a public package (required for scoped packages)
npm publish --access public
```

Note: Publishing to npm registry is sufficient for all users, as both npm and bun can install packages from the npm registry.

## Updating After Publishing

When you need to update the package after it's been published:

1. Make your changes to the codebase
2. Update the version number in package.json following semantic versioning:
   - PATCH version (1.0.x) for backwards-compatible bug fixes
   - MINOR version (1.x.0) for new backwards-compatible functionality
   - MAJOR version (x.0.0) for incompatible API changes

```bash
# Example: Update package.json version field manually or use npm version
npm version patch  # for bug fixes (1.0.0 -> 1.0.1)
npm version minor  # for new features (1.0.0 -> 1.1.0)
npm version major  # for breaking changes (1.0.0 -> 2.0.0)

# Build the updated package
npm run build

# Publish the new version
npm publish --access public
```

3. After publishing, update dependent packages:

```bash
# In flowett-core or flowett-integrations:
bun update @flowett/common
```

This will update to the latest compatible version based on your semantic versioning.