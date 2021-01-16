import { RawQuillDelta as Citation } from "quilljs-parser";
import { detectSubtype, detectType } from "../build-citation";
import { Name, Source } from "../interfaces";

// MAIN EXPORT

export function buildApa(source: Source): Citation {
    switch (detectType(source)) {
        case 'book':
            return citeBook(source);
        case 'journal':
            return citeJournal(source);
        case 'periodical':
            return citePeriodical(source);
        case 'website':
            return citeWebsite(source);
        case 'other': 
            return citeOther(source);
    }
}

// PARENT TYPE FUNCTIONS

export function citeBook(source: Source): Citation {
    switch (detectSubtype('book', source)) {
        case 'anthology':
            return citeAnthology(source);
        case 'standard':
            return citeStandardBook(source);
        default:
            return citeStandardBook(source);
    }
};

export function citeJournal(source: Source): Citation {
    let citation: Citation = { ops: [] };


    return citation;
}

export function citePeriodical(source: Source): Citation {
    let citation: Citation = { ops: [] };
    return citation;
}

export function citeWebsite(source: Source): Citation {
    let citation: Citation = { ops: [] };
    return citation;
}

export function citeOther(source: Source): Citation {
    let citation: Citation = { ops: [] };
    return citation;
}

// CHILD TYPE FUNCTIONS

export function citeStandardBook(source: Source): Citation {
    // does have edition?
    // does it have translators?
    // does it have an editor?
    // original pub date?
    // could have a doi or url at end
    let citation: Citation = { ops: [] };
    if (source.authors) {
        insertStandardAuthors(source, citation);
    }
    if (source.pubYear) {
        insertPubYear(source.pubYear, citation);
    } else {
        insertNoDate(citation);
    }
    if (source.title) {
        insertTitle(source, true, citation);
    }
    if (source.publisher) {
        insertPublisher(source.publisher, citation);
    }
    if (source.doi) {
        citation.ops.push({
            insert: source.doi
        });
    } else if (source.url) {
        citation.ops.push({
            insert: source.url
        });
    }


    console.log(citation);
    return citation;

};

export function citeAnthology(source: Source): Citation {
    if (source.title && source.authors && source.editors && source.startPage && source.endPage) {
        return citePartialAnthology(source);
    } else {
        return citeWholeAnthology(source);
    }
};

export function citeWholeAnthology(source: Source): Citation {
    
    let citation: Citation = { ops: [] };
    if (source.editors) {
        insertEditorsAsAuthors(source, citation);
    }
    if (source.pubYear) {
        insertPubYear(source.pubYear, citation);
    }
    if (source.anthologyTitle || source.title) {
        insertAnthologyTitleAsTitle(source, citation);
    }
    if (source.publisher) {
        insertPublisher(source.publisher, citation);
    }
    if (source.doi) {
        citation.ops.push({
            insert: source.doi
        });
    } else if (source.url) {
        citation.ops.push({
            insert: source.url
        });
    }

    return citation;
};

export function citePartialAnthology(source: Source): Citation {
    if (!(source.authors && source.title && source.editors && source.startPage && source.endPage)) {
        throw new Error('Missing anthology information');
    }
    let citation: Citation = { ops: [] };
    insertStandardAuthors(source, citation);
    if (source.pubYear) {
        insertPubYear(source.pubYear, citation);
    }
    insertTitle(source, false, citation);
    insertEditors(source, citation);
    insertAnthologyTitle(source, citation);
    insertAnthologyPages(source, citation);
    if (source.publisher) {
        insertPublisher(source.publisher, citation);
    }
    if (source.doi) {
        citation.ops.push({
            insert: source.doi
        });
    } else if (source.url) {
        citation.ops.push({
            insert: source.url
        });
    }

    return citation;
};






// INSERTERS

function insertStandardAuthors(source: Source, citation: Citation) {
    if (!source.authors) {
        throw new Error('No authors to format');
    }
    let authorString = nameString(source.authors, true);

    if (authorString.match(/\.$/)) {
        authorString += ' ';
    } else if (!authorString.match(/\.\w$/)) {
        authorString += '. ';
    }
    citation.ops.push({
        insert: authorString
    });
};

function insertEditorsAsAuthors(source: Source, citation: Citation) {
    if (!source.editors) {
        throw new Error('Missing editors.');
    }
    let editorString = nameString(source.editors, true);
    editorString += source.editors.length > 1 ? ' (Eds.). ' : ' (Ed.). ';
    citation.ops.push({
        insert: editorString
    });
};

function insertEditors(source: Source, citation: Citation) {
    if (!source.editors) {
        throw new Error('Missing editors.');
    }
    let string = 'In ';
    let editors = nameString(source.editors, false);
    string += editors + (source.editors.length > 1 ? ' (Eds.), ' : ' (Ed.), ');
    citation.ops.push({
        insert: string
    });
};

function insertPubYear(year: string, citation: Citation) {
    citation.ops.push({
        insert: `(${year}). `
    });
};

export function insertPubDate(rawDate: string, citation: Citation) {
    let date = dateParser(rawDate);
    citation.ops.push({
        insert: `(${date}). `
    });
};

function insertNoDate(citation: Citation) {
    citation.ops.push({
        insert: '(n.d.). '
    });
};

function insertTitle(source: Source, italicize: boolean, citation: Citation) {
    if (source.edition && !source.anthologyTitle) {
        const edition = parseEdition(source.edition);
        if (italicize) {
            citation.ops.push({
                insert: `${source.title} `,
                attributes: {
                    italic: true
                }
            });
            citation.ops.push({
                insert: `(${edition}). `
            });
        } else {
            citation.ops.push({
                insert: `${source.title} (${edition}). `
            });
        }
    } else {
        if (italicize) {
            citation.ops.push({
                insert: `${source.title}. `,
                attributes: {
                    italic: true
                }
            });
        } else {
            citation.ops.push({
                insert: `${source.title}. `
            });
        }
    }
}

function insertAnthologyTitleAsTitle(source: Source, citation: Citation) {
    if (source.edition) {
        const edition = parseEdition(source.edition);
        citation.ops.push({
            insert: `${source.anthologyTitle ? source.anthologyTitle : source.title } `,
            attributes: {
                italic: true
            }
        });
        citation.ops.push({
            insert: `(${edition}). `
        });
    } else {
        citation.ops.push({
            insert: `${source.anthologyTitle ? source.anthologyTitle : source.title }. `,
            attributes: {
                italic: true
            }
        });
    }
};

function insertAnthologyTitle(source: Source, citation: Citation) {
    citation.ops.push({
        insert: source.anthologyTitle + ' ',
        attributes: {
            italic: true
        }
    });
};

function insertAnthologyPages(source: Source, citation: Citation) {
    if (!source.startPage || !source.endPage) {
        throw new Error('Missing pages.');
    }
    if (source.edition) {
        citation.ops.push({
            insert: `(${parseEdition(source.edition)}, ${pageString(source.startPage, source.endPage)}). `
        })
    } else {
        citation.ops.push({
            insert: `(${pageString(source.startPage, source.endPage)}). `
        });
    }
};

function insertPublisher(publisher: string, citation: Citation) {
    citation.ops.push({
        insert: `${publisher}. `
    });
};












// HELPER FUNCTIONS

function pageString(start: string, end: string): string {
    if (start === end) {
        return `p. ${start}`;
    } else {
        return `pp. ${start}-${end}`;
    }
}

// formats the names (e.g., single initial for first and middle)
function formatNames(names: Name[]): Name[] {
    const formatted = names.map(name => {
        return {
            firstName: name.firstName ? name.firstName?.slice(0, 1).toUpperCase() + '.' : undefined,
            middleName: name.middleName ? name.middleName?.slice(0, 1).toUpperCase() + '.' : undefined,
            lastName: name.lastName ? name.lastName.slice(0, 1).toUpperCase() + name.lastName.slice(1).toLowerCase() : undefined
        };
    });
    return formatted;
}

function nameString(rawNames: Name[], firstReversed: boolean): string {
    let names = formatNames(rawNames);
    let string = '';
    let index = 0;
    for (const name of names) {
        const first = name.firstName;
        const middle = name.middleName;
        const last = name.lastName;
        if (index === 0) {
            if (firstReversed) {
                string += (last ? last : '') + (last && first ? ', ' + first : first ? first : '') + (middle ? ' ' + middle : '');
            } else {
                string += (first ? first : '') + (first && middle ? ' ' + middle : '') + (first && last ? ' ' + last : last ? last : '');
            }
        } else if (index < names.length-1) {
            string += ', ' + (first ? first : '') + (first && middle ? ' ' + middle : '') + (first && last ? ' ' + last : last ? last : '');
        } else {
            string += ', & ' + (first ? first : '') + (first && middle ? ' ' + middle : '') + (first && last ? ' ' + last : last ? last : '');
        }
        index++;
    }
    return string;
}

export function dateParser(rawDate: string): string {
    // find year
    // find month
    // find day
    const yearMatch = rawDate.match(/\b\d{4}\b/);
    const dayMatch = rawDate.match(/\b\d{1,2}\b/);
    const monthMatch = rawDate.match(/\b[a-zA-Z]+\b/);
    const year = yearMatch && yearMatch[0] ? yearMatch[0] : undefined;
    console.log('year', year);
    const day = dayMatch && dayMatch[0] ? dayMatch[0] : undefined;
    const rawMonth = monthMatch && monthMatch[0] ? monthMatch[0] : undefined;
    let month: string | undefined = undefined;
    if (rawMonth) {
        month = standardizeMonth(rawMonth.toLowerCase());
    }
    let string = (year ? year + ', ' : '') + (month ? month + ' ' : '') + (day ? day : '');
    console.log(string);
    return string;
};

// takes a month string (jan or january) and converts to full
function standardizeMonth(rawMonth: string) {
    console.log('rawmonth', rawMonth);

    if (rawMonth === 'jan' || rawMonth === 'january') {
        return 'January';
    } else if (rawMonth === 'feb' || rawMonth === 'february') {
        return 'February';
    } else if (rawMonth === 'mar' || rawMonth === 'march') {
        return 'March';
    } else if (rawMonth === 'apr' || rawMonth === 'april') {
        return 'April';
    } else if (rawMonth === 'may') {
        return 'May';
    } else if (rawMonth === 'jun' || rawMonth === 'june') {
        return 'June';
    } else if (rawMonth === 'jul' || rawMonth === 'july') {
        return 'July';
    } else if (rawMonth === 'aug' || rawMonth === 'august') {
        return 'August';
    } else if (rawMonth === 'sep' || rawMonth === 'sept' || rawMonth === 'september') {
        return 'September';
    } else if (rawMonth === 'oct' || rawMonth === 'october') {
        return 'October';
    } else if (rawMonth === 'nov' || rawMonth === 'november') {
        return 'November';
    } else if (rawMonth === 'dec' || rawMonth === 'december') {
        return 'December';
    } else {
        return rawMonth;
    };
};

export function parseEdition(raw: string): string {
    raw = raw.toLowerCase();
    if (raw.match('first') || raw.match('1st')) {
        return '1st ed.';
    } else if (raw.match('second') || raw.match('2nd')) {
        return '2nd ed.';
    } else if (raw.match('third') || raw.match('3rd')) {
        return '3rd ed.';
    } else if (raw.match('fourth') || raw.match(/\b4th/)) {
        return '4th ed.';
    } else if (raw.match('fifth') || raw.match(/\b5th/)) {
        return '5th ed.';
    } else if (raw.match('sixth') || raw.match(/\b6th/)) {
        return '6th ed.';
    } else if (raw.match('seventh') || raw.match(/\b7th/)) {
        return '7th ed.';
    } else if (raw.match('eighth') || raw.match(/\b8th/)) {
        return '8th ed.';
    } else if (raw.match('ninth') || raw.match(/\b9th/)) {
        return '9th ed.';
    } else if (raw.match('tenth') || raw.match(/\b10th/)) {
        return '10th ed.';
    } else {
        return raw;
    }
}






