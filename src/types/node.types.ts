/**
 * Common node types used across Flowett packages
 */

export enum NodeType {
  TRIGGER = 'trigger',
  ACTION = 'action',
  UTILITY = 'utility'
}

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