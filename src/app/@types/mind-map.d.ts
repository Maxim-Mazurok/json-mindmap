type MindMapJSON = MindMapNode[];

interface MindMapNodeOptions {
  color?: string;
}

interface MindMapNode {
  title: string;
  options?: MindMapNodeOptions;
  children?: MindMapNode[];
}
