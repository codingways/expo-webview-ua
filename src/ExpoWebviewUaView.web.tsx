import * as React from 'react';

import { ExpoWebviewUaViewProps } from './ExpoWebviewUa.types';

export default function ExpoWebviewUaView(props: ExpoWebviewUaViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
