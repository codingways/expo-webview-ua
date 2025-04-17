import { registerWebModule, NativeModule } from 'expo';

import { ExpoWebviewUaModuleEvents } from './ExpoWebviewUa.types';

class ExpoWebviewUaModule extends NativeModule<ExpoWebviewUaModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoWebviewUaModule);
