// INPUT: citation information, desired format
// OUTPUT: ParsedDelta, string, rawDelta

import { buildApa } from "./build-apa";
import { buildChicagoAd } from "./build-chicagoad";
import { buildChicagoNb } from "./build-chicagonb";
import { buildMla } from "./build-mla";
import { Options, Source } from "./interfaces";

export function buildCitation(source: Source, options: Options = { style: 'apa' }) {
    switch (options.style) {
        case 'apa':
            buildApa(source);
            break;
        case 'mla':
            buildMla(source);
            break;
        case 'chicago-ad':
            buildChicagoAd(source);
            break;
        case 'chicago-nb':
            buildChicagoNb(source);
            break;
    };
};

