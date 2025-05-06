/**
 * Common node types used across Flowett packages
 */

// Enums generate actual JavaScript code
export enum NodeType {
  TRIGGER = 'trigger',
  ACTION = 'action',
  UTILITY = 'utility'
}

// Create empty objects for interfaces to ensure they exist at runtime
// This is needed for ESM compatibility - without these, import statements fail at runtime
export const INodeInput = {};
export const INodeOutput = {};
export const INodeSettings = {};
export const INodeDefinition = {};
export const INodeRegistry = {};

// Type definitions using TypeScript interfaces
export interface INodeInput {
  name: string;
  type: string;
  required?: boolean;
  default?: any;
  description?: string;
  options?: Array<{
    name: string;
    value: any;
  }>;
}

export interface INodeOutput {
  name: string;
  type: string;
  description?: string;
}

export interface INodeSettings {
  [key: string]: any;
}

export interface INodeDefinition {
  id: string;
  name: string;
  type: NodeType;
  description: string;
  version: string;
  icon?: string;
  inputs?: INodeInput[];
  outputs?: INodeOutput[];
  settings?: INodeSettings;
  execute?: (inputs: any, settings: INodeSettings) => Promise<any>;
}

export interface INodeRegistry {
  registerNode: (node: INodeDefinition) => void;
  getNodeById: (id: string) => INodeDefinition | null;
  getAllNodes: () => INodeDefinition[];
}