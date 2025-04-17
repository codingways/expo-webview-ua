import { NativeModule, requireNativeModule } from 'expo';

import { ExpoWebviewUaModuleEvents } from './ExpoWebviewUa.types';

declare class ExpoWebviewUaModule extends NativeModule<ExpoWebviewUaModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoWebviewUaModule>('ExpoWebviewUa');
