import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoWebviewUaViewProps } from './ExpoWebviewUa.types';

const NativeView: React.ComponentType<ExpoWebviewUaViewProps> =
  requireNativeView('ExpoWebviewUa');

export default function ExpoWebviewUaView(props: ExpoWebviewUaViewProps) {
  return <NativeView {...props} />;
}
