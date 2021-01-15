// INPUT: citation information, desired format
// OUTPUT: ParsedDelta, string, rawDelta

import { buildApa } from "./apa/build-apa";
import { buildChicagoAd } from "./chicago/build-chicagoad";
import { buildChicagoNb } from "./chicago/build-chicagonb";
import { buildMla } from "./mla/build-mla";
import { BookSubtype, JournalSubtype, Options, ParentTypes, PeriodicalSubtype, Source, SourceType, WebsiteSubtype } from "./interfaces";

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

export function detectType(source: Source): ParentTypes {
    if (source.type.type === 'journal' || source.journal) {
        return 'journal';
    } else if (source.type.type === 'periodical' || source.periodicalName) {
        return 'periodical';
    } else if (source.type.type === 'website' || source.websiteName) {
        return 'website';
    } else if (source.type.type === 'book') {
        return 'book';
    } else {
        return 'other';
    }
}

export function detectSubtype(parent: ParentTypes, source: Source): BookSubtype | JournalSubtype | PeriodicalSubtype | WebsiteSubtype | 'other' {
    switch (parent) {
        case 'book':
            if (source.anthologyTitle || source.type.subtype === 'anthology') { return 'anthology'; }
            return 'standard';
        case 'journal':
            return 'standard';
        case 'periodical':
            return source.type.subtype;
        case 'website':
            return source.type.subtype;
        case 'other':
            return 'other';
    };
};


