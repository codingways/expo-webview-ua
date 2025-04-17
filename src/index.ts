import { requireNativeModule } from 'expo-modules-core';

const ExpoWebviewUaModule = requireNativeModule('ExpoWebviewUa');

export function getWebViewUserAgent(): Promise<string> {
  return ExpoWebviewUaModule.getWebViewUserAgent();
}
