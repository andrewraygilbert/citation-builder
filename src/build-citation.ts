// INPUT: citation information, desired format
// OUTPUT: ParsedDelta, string, rawDelta

import { buildApa } from "./apa/build-apa";
import { buildChicagoAd } from "./chicago/build-chicagoad";
import { buildChicagoNb } from "./chicago/build-chicagonb";
import { buildMla } from "./mla/build-mla";
import { Options, Source, SourceType } from "./interfaces";

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

export function detectType(source: Source): SourceType {
    if (source.type.type === 'journal' || source.journal) {
        return {
            type: 'journal',
            subtype: 'standard'
        };
    } else if (source.type.type === 'periodical' || source.periodicalName) {
        return {
            type: 'periodical',
            subtype: 'standard'
        };
    } else if (source.type.type === 'website' || source.websiteName) {
        return {
            type: 'website',
            subtype: 'standard'
        };
    } else if (source.type.subtype === 'anthology' || source.anthologyTitle) {
        return {
            type: 'book',
            subtype: 'anthology'
        };
    } else if (source.type.type === 'book') {
        return {
            type: 'book',
            subtype: 'standard'
        }
    } else {
        return {
            type: 'other',
            subtype: 'other'
        };
    }
}


