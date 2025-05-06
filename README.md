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
import { NodeType, INodeDefinition } from 'flowett-common';

export class MyCustomNode implements INodeDefinition {
  id = 'my-custom-node';
  name = 'My Custom Node';
  type = NodeType.ACTION;
  // ...
}
```

## Installation

```bash
bun add flowett-common
```

Or if using npm:

```bash
npm install flowett-common