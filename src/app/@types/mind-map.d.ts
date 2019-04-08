type MindMapJSON = MindMapNode[];

interface MindMapNodeOptions {
  color?: string;
  labels?: string[];
}

interface MindMapNode {
  title: string;
  options?: MindMapNodeOptions;
  children?: MindMapNode[];
}

interface ControlsConfig {
  showLabels?: boolean;
}
