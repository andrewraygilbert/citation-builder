import { RawQuillDelta } from "quilljs-parser";
import { Name, Source } from "./interfaces";

/* BOOKS */

export const book_simple: Source = {
    type: {
        type: 'book',
        subtype: 'standard'
    },
    authors: [{
        firstName: 'Cathy',
        middleName: 'J.',
        lastName: 'Cohen'
    }],
    title: 'The boundaries of blackness: AIDS and the breakdown of black politics',
    pubYear: '1999',
    publisher: 'University of Chicago Press'
};

export const book_simple_apa: RawQuillDelta = {
    ops: [{
        insert: 'Cohen, C. J. '
    },{
        insert: '(1999). '
    },{
        insert: 'The boundaries of blackness: AIDS and the breakdown of black politics. ',
        attributes: {
            italic: true
        }
    },{
        insert: 'University of Chicago Press. '
    }]
};

export const book_edited: Source = {
    type: {
        type: 'book',
        subtype: 'anthology'
    },
    editors: [{
        firstName: 'Willem',
        middleName: 'E.',
        lastName: 'Saris'
    },{
        firstName: 'Paul',
        middleName: 'M.',
        lastName: 'Sniderman'
    }],
    title: 'Studies in Public Opinion',
    publisher: 'Princeton University Press',
    pubLocation: 'Princeton, NJ',
    pubYear: '2004'
};

export const book_edited_apa: RawQuillDelta = {
    ops: [{
        insert: 'Saris, W. E., & Sniderman, P. M. (Eds.). '
    },{
        insert: '(2004). '
    },{
        insert: 'Studies in Public Opinion. ',
        attributes: {
            italic: true
        }
    },{
        insert: 'Princeton University Press. '
    }]
};

export const book_edition: Source = {
    type: {
        type: 'book',
        subtype: 'standard'
    },
    authors: [{
        firstName: 'Bilbo',
        lastName: 'Baggins'
    },{
        firstName: 'Gandalf',
        middleName: 'the',
        lastName: 'Gray'
    }],
    title: 'An adventure through Mirkwood',
    publisher: 'Shire Press',
    edition: 'second',
    pubYear: '1967'
};

export const book_edition_apa: RawQuillDelta = {
    ops: [{
        insert: 'Baggins, B., & Gray, G. T. '
    },{
        insert: '(1967). '
    },{
        insert: 'An adventure through Mirkwood ',
        attributes: {
            italic: true
        }
    },{
        insert: '(2nd ed.). '
    },{
        insert: 'Shire Press. '
    }]
};

export const book_edited_chapter: Source = {
    type: {
        type: 'book',
        subtype: 'anthology'
    },
    authors: [{
        firstName: 'Paul',
        middleName: 'M.',
        lastName: 'Sniderman'
    },{
        firstName: 'Sean',
        middleName: 'M.',
        lastName: 'Theriault'
    }],
    editors: [{
        firstName: 'Willem',
        middleName: 'E.',
        lastName: 'Saris'
    },{
        firstName: 'Paul',
        middleName: 'M.',
        lastName: 'Sniderman'
    }],
    title: 'The structure of political argument and the logic of issue framing',
    anthologyTitle: 'Studies in public opinion',
    pubYear: '2004',
    publisher: 'Princeton University Press',
    startPage: '133',
    endPage: '165',
    pubLocation: 'Princeton, NJ'
};

export const book_edited_chapter_apa: RawQuillDelta = {
    ops: [{
        insert: 'Sniderman, P. M., & Theriault, S. M. '
    },{
        insert: '(2004). '
    },{
        insert: 'The structure of political argument and the logic of issue framing. '
    },{
        insert: 'In W. E. Saris, & P. M. Sniderman (Eds.), '
    },{
        insert: 'Studies in public opinion ',
        attributes: {
            italic: true
        }
    },{
        insert: '(pp. 133-165). '
    },{
        insert: 'Princeton University Press. '
    }]
}

export const book_edited_whole_edition: Source = {
    type: {
        type: 'book',
        subtype: 'anthology'
    },
    editors: [{
        firstName: 'Legolas',
        lastName: 'Greenleaf'
    },{
        firstName: 'G.',
        middleName: 'T.',
        lastName: 'Gray'
    },{
        firstName: 'Radagast',
        lastName: 'Brown'
    }],
    anthologyTitle: 'A look at the darkness in the east',
    edition: 'third edition',
    pubYear: '1943',
    publisher: 'Middle Earth Books'
};

export const book_edited_whole_edition_apa: RawQuillDelta = {
    ops: [{
        insert: 'Greenleaf, L., Gray, G. T., & Brown, R. (Eds.). '
    },{
        insert: '(1943). '
    },{
        insert: 'A look at the darkness in the east ',
        attributes: {
            italic: true
        }
    },{
        insert: '(3rd ed.). '
    },{
        insert: 'Middle Earth Books. '
    }]
};

export const book_edited_chapter_edition: Source = {
    type: {
        type: 'book',
        subtype: 'anthology'
    },
    title: 'Battle plans for the Lonely Mountain',
    anthologyTitle: 'Wars of Middle Earth',
    edition: 'fourth',
    pubYear: '1988',
    publisher: 'Middle Earth Books',
    authors: [{
        firstName: 'Frodo',
        middleName: 'T.',
        lastName: 'Baggins'
    },{
        firstName: 'Bilbo',
        lastName: 'Baggins'
    }],
    editors: [{
        firstName: 'Legolas',
        middleName: 'S.',
        lastName: 'Greenleaf'
    }],
    startPage: '245',
    endPage: '262'
};

export const book_edited_chapter_edition_apa: RawQuillDelta = {
    ops: [{
        insert: 'Baggins, F. T., & Baggins, B. '
    },{
        insert: '(1988). '
    },{
        insert: 'Battle plans for the Lonely Mountain. '
    },{
        insert: 'In L. S. Greenleaf (Ed.), '
    },{
        insert: 'Wars of Middle Earth ',
        attributes: {
            italic: true
        }
    },{
        insert: '(4th ed., pp. 245-262). '
    },{
        insert: 'Middle Earth Books. '
    }]
};

export const book_original_pubyear: Source = {
    type: {
        type: 'book',
        subtype: 'standard'
    },
    authors: [{
        firstName: 'Gimli',
        lastName: 'Dwarf'
    },{
        firstName: 'Thorin',
        middleName: 'O.',
        lastName: 'Oakenshield'
    }],
    title: 'History of Erebor',
    pubYear: '1921',
    originalPubYear: '1901',
    publisher: 'Brandybuck Books'
};

export const book_original_pubyear_apa: RawQuillDelta = {
    ops: [{
        insert: 'Dwarf, G., & Oakenshield, T. O. '
    },{
        insert: '(1921). '
    },{
        insert: 'History of Erebor. ',
        attributes: {
            italic: true
        }
    },{
        insert: 'Brandybuck Books. '
    },{
        insert: '(Original work published 1901)'
    }]
};

export const book_org_author: Source = {
    type: {
        type: 'book',
        subtype: 'standard'
    },
    organization: 'Brookings Institution',
    title: 'An analysis of the economy',
    pubYear: '1988',
    publisher: 'American Books'
};

export const book_org_author_apa: RawQuillDelta = {
    ops: [{
        insert: 'Brookings Institution. '
    },{
        insert: '(1988). '
    },{
        insert: 'An analysis of the economy. ',
        attributes: {
            italic: true
        }
    },{
        insert: 'American Books. '
    }]
};


// JOURNAL ARTICLES

export const journal_simple: Source = {
    type: {
        type: 'journal',
        subtype: 'standard'
    },
    authors: [{
        firstName: 'Paul',
        middleName: 'M.',
        lastName: 'Sniderman'
    },{
        firstName: 'Thomas',
        lastName: 'Piazza'
    },{
        firstName: 'Philip',
        middleName: 'E.',
        lastName: 'Tetlock'
    },{
        firstName: 'Ann',
        lastName: 'Kendrick'
    }],
    pubYear: '1991',
    title: 'The new racism',
    journal: 'American Journal of Political Science',
    volume: '35',
    number: '2',
    month: 'May',
    startPage: '423',
    endPage: '447'
};

export const journal_simple_apa: RawQuillDelta = {
    ops: [{
        insert: 'Sniderman, P. M., Piazza, T., Tetlock, P. E., & Kendrick, A. '
    },{
        insert: '(1991). '
    },{
        insert: 'The new racism. '
    },{
        insert: 'American Journal of Political Science, 35',
        attributes: {
            italic: true
        }
    },{
        insert: '(2), 423-447. '
    }]
};

export const journal_pages_only: Source = {
    type: {
        type: 'journal',
        subtype: 'standard'
    },
    authors: [{
        firstName: 'Paul',
        middleName: 'M.',
        lastName: 'Sniderman'
    },{
        firstName: 'Thomas',
        lastName: 'Piazza'
    }],
    pubYear: '1991',
    title: 'The new racism',
    journal: 'American Journal of Political Science',
    month: 'May',
    startPage: '423',
    endPage: '447'
};

export const journal_pages_only_apa: RawQuillDelta = {
    ops: [{
        insert: 'Sniderman, P. M., & Piazza, T. '
    },{
        insert: '(1991). '
    },{
        insert: 'The new racism. '
    },{
        insert: 'American Journal of Political Science, ',
        attributes: {
            italic: true
        }
    },{
        insert: '423-447. '
    }]
};

export const journal_only: Source = {
    type: {
        type: 'journal',
        subtype: 'standard'
    },
    authors: [{
        firstName: 'Paul',
        middleName: 'M.',
        lastName: 'Sniderman'
    }],
    pubYear: '1991',
    title: 'The new racism',
    journal: 'American Journal of Political Science',
};

export const journal_only_apa: RawQuillDelta = {
    ops: [{
        insert: 'Sniderman, P. M. '
    },{
        insert: '(1991). '
    },{
        insert: 'The new racism. '
    },{
        insert: 'American Journal of Political Science. ',
        attributes: {
            italic: true
        }
    }]
};

export const journal_doi: Source = {
    type: {
        type: 'journal',
        subtype: 'standard'
    },
    authors: [{
        firstName: 'Paul',
        middleName: 'M.',
        lastName: 'Sniderman'
    }],
    pubYear: '1991',
    title: 'The new racism',
    journal: 'American Journal of Political Science',
    doi: 'https://myowndoi.org/ha987ashfla'
};

export const journal_doi_apa: RawQuillDelta = {
    ops: [{
        insert: 'Sniderman, P. M. '
    },{
        insert: '(1991). '
    },{
        insert: 'The new racism. '
    },{
        insert: 'American Journal of Political Science. ',
        attributes: {
            italic: true
        }
    },{
        insert: 'https://myowndoi.org/ha987ashfla'
    }]
};

export const newspaper_simple: Source = {
    type: {
        type: 'periodical',
        subtype: 'newspaper'
    },
    authors: [{
        firstName: 'Bonnie',
        lastName: 'Carey'
    }],
    pubDate: 'March 22, 2019',
    pubYear: '2019',
    title: 'Can we get better at forgetting?',
    periodicalName: 'The New York Times',
    url: 'https://www.nytimes.com/hereisthearticle'
};

export const newspaper_simple_apa: RawQuillDelta = {
    ops: [{
        insert: 'Carey, B. '
    },{
        insert: '(2019, March 22). '
    },{
        insert: 'Can we get better at forgetting? '
    },{
        insert: 'The New York Times. ',
        attributes: {
            italic: true
        }
    },{
        insert: 'https://www.nytimes.com/hereisthearticle'
    }]
};

export const magazine_simple: Source = {
    type: {
        type: 'periodical',
        subtype: 'magazine'
    },
    authors: [{
        firstName: 'N.',
        middleName: 'K.',
        lastName: 'Schaefer'
    },{
        firstName: 'B.',
        lastName: 'Shapiro'
    }],
    pubDate: 'sept 6 2019',
    pubYear: '2019',
    title: 'New middle chapter in the story of human evolution',
    periodicalName: 'Science',
    volume: '365',
    number: '6457',
    startPage: '981',
    endPage: '982'
};

export const magazine_simple_apa: RawQuillDelta = {
    ops: [{
        insert: 'Schaefer, N. K., & Shapiro, B. '
    },{
        insert: '(2019, September 6). '
    },{
        insert: 'New middle chapter in the story of human evolution. '
    },{
        insert: 'Science, 365',
        attributes: {
            italic: true
        }
    },{
        insert: '(6457), 981-982. '
    }]
};

export const website_authors: Source = {
    type: {
        type: 'website',
        subtype: 'standard'
    },
    authors: [{
        firstName: 'Frank',
        lastName: 'Giovanetti'
    }],
    pubDate: 'Nov 16, 2019',
    title: 'Why are we so obsessed with personality types?',
    websiteName: 'Medium',
    url: 'https://medium.com/89efhio2u'
};

export const website_authors_apa: RawQuillDelta = {
    ops: [{
        insert: 'Giovanetti, F. '
    },{
        insert: '(2019, November 16). '
    },{
        insert: 'Why are we so obsessed with personality types? ',
        attributes: {
            italic: true
        }
    },{
        insert: 'Medium. '
    },{
        insert: 'https://medium.com/89efhio2u'
    }]
};

export const website_orgonly: Source = {
    type: {
        type: 'website',
        subtype: 'standard'
    },
    pubDate: 'July 2017',
    title: 'The top 10 causes of death',
    organization: 'World Health Organization',
    url: 'https://who.org/as8oyaio'
};

export const website_orgonly_apa: RawQuillDelta = {
    ops: [{
        insert: 'World Health Organization. '
    },{
        insert: '(2017, July). '
    },{
        insert: 'The top 10 causes of death. ',
        attributes: {
            italic: true
        }
    },{
        insert: 'https://who.org/as8oyaio'
    }]
};

export const website_authors_org: Source = {
    type: {
        type: 'website',
        subtype: 'standard'
    },
    pubDate: 'Apr 2021',
    organization: 'National Institutes of Health',
    authors: [{
        firstName: 'J.',
        middleName: 'P.',
        lastName: 'Barron'
    },{
        firstName: 'A.',
        middleName: 'B.',
        lastName: 'Zachowski'
    }],
    title: 'The role of dementia in forgetfullness',
    url: 'https://nih.org/kjaw3tlj2k4j'
};

export const website_authors_org_apa: RawQuillDelta = {
    ops: [{
        insert: 'Barron, J. P., & Zachowski, A. B. '
    },{
        insert: '(2021, April). '
    },{
        insert: 'The role of dementia in forgetfullness. ',
        attributes: {
            italic: true
        }
    },{
        insert: 'National Institutes of Health. '
    },{
        insert: 'https://nih.org/kjaw3tlj2k4j'
    }]
};

