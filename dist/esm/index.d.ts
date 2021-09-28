import React from 'react';
export declare type FlocklerEmbedParams = {
    siteUuid: string;
    embedUuid: string;
    style?: React.CSSProperties;
};
export default function FlocklerEmbed({ siteUuid, embedUuid, style, ...rest }: FlocklerEmbedParams): JSX.Element;
