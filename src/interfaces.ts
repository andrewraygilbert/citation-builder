export interface Options {
    style?: Style;
}

export type Style = 'apa' | 'chicago-nb' | 'chicago-ad' | 'mla';

export type BookSubtype = 'standard' | 'anthology' | 'other';
export type JournalSubtype = 'standard' | 'other';
export type PeriodicalSubtype = 'standard' | 'newspaper' | 'magazine' | 'report' | 'other';
export type WebsiteSubtype = 'standard' | 'other';

export interface Book {
    type: 'book';
    subtype: BookSubtype;
}

export interface Periodical {
    type: 'periodical';
    subtype: PeriodicalSubtype;
}

export interface Journal {
    type: 'journal';
    subtype: JournalSubtype;
}

export interface Website {
    type: 'website';
    subtype: WebsiteSubtype;
}

export interface Other {
    type: 'other';
    subtype: 'other';
}

export type SourceType = Book | Periodical | Journal | Website | Other;

export interface Name {
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
}

export interface Source {
    authors?: Name[];
    editors?: Name[];
    translators?: Name[];
    type: SourceType;
    title?: string;
    pubYear?: string;
    pubDate?: string;
    accessedDate?: string;
    publisher?: string;
    journal?: string;
    pubLocation?: string;
    url?: string;
    doi?: string;
    database?: string;
    volume?: string;
    number?: string;
    season?: string;
    month?: string;
    organization?: string;
    startPage?: string;
    endPage?: string;
    anthologyTitle?: string;
    edition?: string;
    eFormat?: string;
    periodicalName?: string;
    websiteName?: string;
    misc?: string[];
    abstract?: string;
};