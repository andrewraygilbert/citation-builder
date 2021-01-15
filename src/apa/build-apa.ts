import { RawQuillDelta as Citation } from "quilljs-parser";
import { detectType } from "../build-citation";
import { Name, Source } from "../interfaces";


export function buildApa(source: Source): Citation {
    let citation: Citation = {ops: []};
    const detected = detectType(source);
    if (detected.type === 'book') {
        
    }
    return citation;
}

export function citeBook(source: Source, citation: Citation) {
    // authors
    if (source.authors && source.authors.length > 0) {
        insertAuthors(source.authors, citation);
    }
    // date
    if (source.pubDate || source.pubYear) {
        insertPubDate({pubYear: source.pubYear, pubDate: source.pubDate}, citation);
    }
    // title
    if (source.title) {
        insertTitle({title: source.title, edition: source.edition}, true, citation);
    }
    // source
    if (source.publisher) {
        citation.ops.push({
            insert: source.publisher + '. '
        });
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
    console.log('citation', citation);
    return citation;
};

export function citeAnthology(source: Source, citation: Citation) {
    if (source.title && source.startPage && source.endPage && source.authors && source.editors) {
        // cite as chapter in edited book
        insertAuthors(source.authors, citation);
        insertPubDate({pubDate: source.pubDate, pubYear: source.pubYear}, citation);
        citation.ops.push({
            insert: source.title + '. '
        });
        insertEditors(source.editors, citation);
        if (source.anthologyTitle) {
            insertAnthologyTitle(source.anthologyTitle, source.edition, citation);
        }
        insertPageRange({start: source.startPage, end: source.endPage, edition: source.edition}, citation);
        if (source.publisher) {
            citation.ops.push({
                insert: source.publisher + '. '
            });
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
        

    } else {
        // cite as whole edited book
        if (source.editors) {
            insertEditorAsAuthor(source.editors, citation);
        }
        if (source.pubDate || source.pubYear) {
            insertPubDate({pubDate: source.pubDate, pubYear: source.pubYear}, citation);
        }
        if (source.anthologyTitle) {
            insertTitle({title: source.anthologyTitle, edition: source.edition}, true, citation);
        } else if (source.title) {
            insertTitle({title: source.title, edition: source.edition}, true, citation);
        }
        if (source.publisher) {
            citation.ops.push({
                insert: source.publisher + '. '
            });
        }
    }
    return citation;
};






function insertTitle(info: {title: string, edition?: string}, italicize: boolean, citation: Citation) {
    if (!info.title) {
        throw new Error('No title.');
    }
    if (info.edition) {
        if (italicize) {
            citation.ops.push({
                insert: info.title,
                attributes: {
                    italic: true
                }
            });
            citation.ops.push({
                insert: ' (' + parseEdition(info.edition) + '). '
            });
        } else {
            citation.ops.push({
                insert: info.title + ' (' + parseEdition(info.edition) + '). '
            });
        }
    } else {
        if (italicize) {
            citation.ops.push({
                insert: info.title + '. ',
                attributes: {
                    italic: true
                }
            });
        } else {
            citation.ops.push({
                insert: info.title + '. '
            });
        }
    }
};

function insertEditors(editors: Name[], citation: Citation) {
    let editorString = 'In';
    editorString = editorString + (editors.length === 1 ? forwardNames(editors).slice(3) : forwardNames(editors).slice(1));
    if (editors.length > 1) {
        editorString += ' (Eds.), ';
    } else {
        editorString += ' (Ed.), ';
    }
    citation.ops.push({
        insert: editorString
    });
};

function insertAnthologyTitle(title: string, edition: string | undefined, citation: Citation) {
    citation.ops.push({
        insert: title + ' ',
        attributes: {
            italic: true
        }
    });
};

function insertPageRange(info: { start: string, end: string, edition?: string}, citation: Citation) {
    if (info.edition) {
        let string = '(' + parseEdition(info.edition) + ', ';
        if (info.start === info.end) {
            string += 'p. ' + info.start + '). ';
        } else {
            string += 'pp. ' + info.start + '-' + info.end + '). ';
        }
        citation.ops.push({
            insert: string
        });
    } else {
        if (info.start === info.end) {
            citation.ops.push({
                insert: '(p. ' + info.start
            });
        } else {
            citation.ops.push({
                insert: '(pp. ' + info.start + '-' + info.end + '). '
            });
        }
    }

    
};





















/*

export function buildApa2(source: Source): Citation {
    let citation: Citation = { ops: [] };
    // author component
    if (source.authors && source.authors.length > 0) {
        citation = insertAuthors(source.authors, citation);
    } else if (source.editors && source.editors.length > 0) {
        citation = insertEditorAsAuthor(source.editors, citation);
    } else if (source.organization) {
        citation = insertOrgAsAuthor(source.organization, citation);
    }
    // date component
    if (source.pubYear || source.pubDate) {
        citation = insertPubDate({pubYear: source.pubYear, pubDate: source.pubDate}, citation);
    }
    // title component
    if (source.title || source.anthologyTitle) {
        citation = insertTitle(source, citation);
    }

    // if it is a journal article
    if (source.journal) {
        let journalString = source.journal;
        if (source.volume) {
            journalString = journalString + ', ' + source.volume;
        }
        citation.ops.push({
            insert: journalString,
            attributes: {
                italic: true
            }
        });
        let details = '';
        if (source.number) {
            details = details + '(' + source.number + ')';
        }
        if (source.startPage && source.endPage) {
            details = details + ', ' + source.startPage + '-' + source.endPage;
        }
        details = details + '. ';
        if (source.doi) {
            details = journalString + source.doi;
        }
    }


    // source component
        // journal name
        // anthology name
        // periodical name
        // website name
        // organization
        // publisher
        // editors
        // translators
        // volume, number, season
        // pages
        // doi/url


    return citation;
}
*/

export function insertAuthors(rawAuthors: Name[], citation: Citation): Citation {
    let authors = formatNames(rawAuthors);
    if (authors.length === 0) {
        throw new Error('No authors.');
    }
    let insert = '';
    // handle first author
    insert = insert + reversedName(authors[0]);
    // handle subsequent authors
    if (authors.length > 1) {
        insert = insert + forwardNames(authors.slice(1));
    }
    // insert final period and space if necessary
    if (!insert.match(/\.$/) && !insert.match(/\.\s$/)) {
        insert = insert + '. ';
    } else if (!insert.match(/\s$/)) {
        insert = insert + ' ';
    }
    citation.ops.push({ insert: insert });
    console.log({insert});
    return citation;
}

export function insertEditorAsAuthor(rawEditors: Name[], citation: Citation) {
    let editors = formatNames(rawEditors);
    if (rawEditors.length === 0) {
        throw new Error('No editors.');
    }
    let insert = '';
    insert = insert + reversedName(editors[0]);
    if (editors.length > 1) {
        insert = insert + forwardNames(editors.slice(1));
    }
    insert = insert + (editors.length > 1 ? ' (Eds.). ' : ' (Ed.). ');
    citation.ops.push({ insert: insert });
    console.log({insert});
    return citation;
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

function reversedName(rawName: Name): string {
    let name = formatNames([rawName]);
    const firstName = name[0].firstName;
    const middleName = name[0].middleName;
    const lastName = name[0].lastName;
    let nameString = (lastName ? lastName : '') + (lastName && firstName ? ', ' + firstName : '') + (lastName && firstName && middleName ? ' ' + middleName : '');
    return nameString;
}

function forwardNames(rawNames: Name[]): string {
    let names = formatNames(rawNames);
    let string = '';
    let index = 0;
    for (const name of names) {
        const first = name.firstName;
        const middle = name.middleName;
        const last = name.lastName;
        string = string + (index < names.length-1 ? ', ' : ', & ') + (first ? first : '') + (first && middle ? ' ' + middle : '') + (first && last ? ' ' + last : '');
        index++;
    };
    return string;
}

export function insertPubDate(rawDate: {pubDate?: string, pubYear?: string}, citation: Citation): Citation {
    let string = '';
    if (rawDate.pubDate) {
        const date = dateParser(rawDate.pubDate);
        string = '(' + date + '). ';
    } else if (rawDate.pubYear) {
        string = '(' + rawDate.pubYear.trim() + '). ';
    } else {
        string = '(n.d.). ';
    }
    console.log({string});
    citation.ops.push({ insert: string });
    return citation;

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
}

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
}

function insertOrgAsAuthor(org: string, citation: Citation): Citation {
    citation.ops[0].insert = org + '. ';
    return citation;
};

/*
export function insertTitle(source: Source, citation: Citation): Citation {
    if (!source.title && !source.anthologyTitle) {
        throw new Error('Missing title.');
    }
    if (source.type.type === 'book') {
        insertBookTitle(source, citation);
    } else if (source.title && source.websiteName) {
        citation.ops.push({
            insert: source.title + '. ',
            attributes: {
                italic: true
            }
        });
    } else {
        const op = {
            insert: source.title + '. '
        };
        citation.ops.push(op);
    }
    return citation;
}
*/

function insertBookTitle(source: Source, citation: Citation) {
    // anthology chapter or section
    if (source.anthologyTitle && source.title) {
        citation.ops.push({
            insert: source.title + '. '
        });
    // whole anthology
    } else if (source.anthologyTitle && !source.title) {
        citation.ops.push({
            insert: source.anthologyTitle + '. ',
            attributes: {
                italic: true
            }
        });
    // book with edition
    } else if (source.edition) {
        const edition = parseEdition(source.edition.toLowerCase());
        let titleOp = {
            insert: source.title,
            attributes: {
                italic: true
            }
        };
        citation.ops.push(titleOp);
        let editionOp = {
            insert: ' (' + edition + '). '
        };
        citation.ops.push(editionOp);
    // book with no edition
    } else {
        let titleString = source.title + '. ';
        citation.ops.push({
            insert: titleString,
            attributes: {
                italic: true
            }
        });
    }
}



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
