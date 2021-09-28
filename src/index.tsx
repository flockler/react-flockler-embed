import React from 'react';

const FLOCKLER_IFRAME_ORIGIN = 'https://plugins.flockler.com';
const RESIZE_EVENT_NAME = 'FlockerIframeResizeEvent';
const RECEIVED_EVENT_NAME = 'FlockerIframeResizeReceivedEvent';

export type FlocklerEmbedParams = {
  siteUuid: string;
  embedUuid: string;
  style?: React.CSSProperties;
};

const handleFlocklerIframeResizeEvent = (event: MessageEvent) => {
  if (event.origin !== FLOCKLER_IFRAME_ORIGIN) return;
  if (event.data.eventName !== RESIZE_EVENT_NAME) return;

  const iframe: HTMLIFrameElement | null = document.querySelector(
    'iframe#flockler-embed-iframe-' + event.data.embedUuid
  );

  if (iframe) {
    iframe.height = event.data.nativeHeight;
    iframe?.contentWindow?.postMessage({ eventName: RECEIVED_EVENT_NAME }, '*');
  }
};

export default function FlocklerEmbed({
  siteUuid,
  embedUuid,
  style = {},
  ...rest
}: FlocklerEmbedParams): JSX.Element {
  React.useEffect(() => {
    window.addEventListener('message', handleFlocklerIframeResizeEvent, false);

    return () => {
      window.removeEventListener('message', handleFlocklerIframeResizeEvent);
    };
  }, [handleFlocklerIframeResizeEvent]);

  const styling = {
    display: 'block',
    border: 'none',
    width: '100%',
    ...style,
  };

  return (
    <iframe
      src={`https://plugins.flockler.com/embed/iframe/${siteUuid}/${embedUuid}`}
      id={`flockler-embed-iframe-${embedUuid}`}
      style={styling}
      {...rest}
    />
  );
}
