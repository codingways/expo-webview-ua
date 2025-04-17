// Reexport the native module. On web, it will be resolved to ExpoWebviewUaModule.web.ts
// and on native platforms to ExpoWebviewUaModule.ts
export { default } from './ExpoWebviewUaModule';
export { default as ExpoWebviewUaView } from './ExpoWebviewUaView';
export * from  './ExpoWebviewUa.types';
