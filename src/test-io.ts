import { RawQuillDelta } from "quilljs-parser";
import { Name, Source } from "./interfaces";


// AUTHORS

// single author

export const authors_single: Name[] = [{
    firstName: 'Andrew',
    middleName: 'Ray',
    lastName: 'Gilbert'
}];

export const authors_single_apa: RawQuillDelta = {
    ops: [{
        insert: 'Gilbert, A. R. '
    }]
};

// single author no middle name

export const authors_single_nomid: Name[] = [{
    firstName: 'Bilbo',
    lastName: 'Baggins'
}];

export const authors_single_nomid_apa: RawQuillDelta = {
    ops: [{
        insert: 'Baggins, B. '
    }]
};

// single author last name only

export const authors_single_lastonly: Name[] = [{
    lastName: 'Plato'
}];

export const authors_single_lastonly_apa: RawQuillDelta = {
    ops: [{
        insert: 'Plato. '
    }]
};

// single author lowercase

export const authors_single_lowercase: Name[] = [{
    firstName: 'samwise',
    middleName: 'brandybuck',
    lastName: 'gamgee'
}];

export const authors_single_lowercase_apa: RawQuillDelta = {
    ops: [{
        insert: 'Gamgee, S. B. '
    }]
};

// single author uppercase

export const authors_single_uppercase: Name[] = [{
    firstName: 'SAMWISE',
    middleName: 'BRANDYBUCK',
    lastName: 'GAMGEE'
}];

export const authors_single_uppercase_apa: RawQuillDelta = {
    ops: [{
        insert: 'Gamgee, S. B. '
    }]
}

// two authors

export const authors_two: Name[] = [{
    firstName: 'Andrew',
    middleName: 'Ray',
    lastName: 'Gilbert'
},{
    firstName: 'Erica',
    middleName: 'Christine',
    lastName: 'Gilbert'
}];

export const authors_two_apa: RawQuillDelta = {
    ops: [{
        insert: 'Gilbert, A. R., & E. C. Gilbert. '
    }]
};

// three authors

export const authors_three: Name[] = [{
    firstName: 'Bilbo',
    lastName: 'Baggins'
},{
    firstName: 'Frodo',
    lastName: 'Baggins'
},{
    firstName: 'Gandalf',
    middleName: 'The',
    lastName: 'Gray'
}];

export const authors_three_apa: RawQuillDelta = {
    ops: [{
        insert: 'Baggins, B., F. Baggins, & G. T. Gray. '
    }]
};

// three authors, last no mid

export const authors_three_last_no_mid: Name[] = [{
    firstName: 'T.',
    lastName: 'Oakenshield'
},{
    firstName: 'Gandalf',
    lastName: 'Gray'
},{
    firstName: 'Legolas',
    lastName: 'Greenleaf'
}];

export const authors_three_last_no_mid_apa: RawQuillDelta = {
    ops: [{
        insert: 'Oakenshield, T., G. Gray, & L. Greenleaf. '
    }]
};

// EDITORS, NO AUTHORS

// one editor

export const editors_early_one: Name[] = [{
    firstName: 'Dawn',
    middleName: 'Jeglum',
    lastName: 'Bartusch'
}];

export const editors_early_one_apa: RawQuillDelta = {
    ops: [{
        insert: 'Bartusch, D. J. (Ed.). '
    }]
};

// two editors

export const editors_early_two: Name[] = [{
    firstName: 'James',
    middleName: 'Paul',
    lastName: 'Old'
},{
    firstName: 'Dawn',
    middleName: 'Jeglum',
    lastName: 'Bartusch'
}];

export const editors_early_two_apa: RawQuillDelta = {
    ops: [{
        insert: 'Old, J. P., & D. J. Bartusch (Eds.). '
    }]
};

// three editors

export const editors_early_three: Name[] = [{
    firstName: 'Bilbo',
    lastName: 'Baggins'
},{
    firstName: 'Gandalf',
    middleName: 'T.',
    lastName: 'Gray'
},{
    firstName: 'legolas',
    lastName: 'greenleaf'
}];

export const editors_early_three_apa: RawQuillDelta = {
    ops: [{
        insert: 'Baggins, B., G. T. Gray, & L. Greenleaf (Eds.). '
    }]
};





// DATES

// simple year

export const date_simple_year = {
    pubYear: '2020'
};

export const date_simple_year_apa: RawQuillDelta = {
    ops: [{
        insert: '(2020). '
    }]
};

// simple year, extra spaces

export const date_year_spaces = {
    pubYear: ' 2019  '
};

export const date_year_spaces_apa: RawQuillDelta = {
    ops: [{
        insert: '(2019). '
    }]
};

// full date

export const date_full = 'December 13, 1954';

export const date_full_apa: RawQuillDelta = {
    ops: [{
        insert: '(1954, December 13). '
    }]
};

// full date lowercase

export const date_full_lower = '2016 jul 19';

export const date_full_lower_apa: RawQuillDelta = {
    ops: [{
        insert: '(2016, July 19). '
    }]
};

// full date upper

export const date_full_upper = 'NOV 1963 21'

export const date_full_upper_apa: RawQuillDelta = {
    ops: [{
        insert: '(1963, November 21). '
    }]
};

// TITLES

// book title
export const title_book: Source = {
    type: {
        type: 'book',
        subtype: 'standard'
    },
    title: 'The boundaries of blackness: Aids and the breakdown of black politics'
};

export const title_book_apa: RawQuillDelta = {
    ops: [{
        insert: 'The boundaries of blackness: Aids and the breakdown of black politics. ',
        attributes: {
            italic: true
        }
    }]
};

// book title with edition

export const title_book_edition: Source = {
    type: {
        type: 'book',
        subtype: 'standard'
    },
    title: 'Philosophy of social science',
    edition: 'fifth edition'
};

export const title_book_edition_apa: RawQuillDelta = {
    ops: [{
        insert: 'Philosophy of social science',
        attributes: {
            italic: true
        }
    },{
        insert: ' (5th ed.). '
    }]
};

// journal article title

export const title_journal: Source = {
    type: {
        type: 'journal',
        subtype: 'standard'
    },
    title: 'Conspiracy theories in mass opinion'
};

export const title_journal_apa: RawQuillDelta = {
    ops: [{
        insert: 'Conspiracy theories in mass opinion. '
    }]
};

// news article title

export const title_news: Source = {
    type: {
        type: 'periodical',
        subtype: 'newspaper'
    },
    title: 'School shootings across America: A closer look',
    periodicalName: 'The New York Times'
};

export const title_news_apa: RawQuillDelta = {
    ops: [{
        insert: 'School shootings across America: A closer look. '
    }]
};

// magazine article title

export const title_magazine: Source = {
    type: {
        type: 'periodical',
        subtype: 'magazine'
    },
    title: 'The nature of Trumpism in the modern world',
    periodicalName: 'The Economist'
};

export const title_magazine_apa: RawQuillDelta = {
    ops: [{
        insert: 'The nature of Trumpism in the modern world. '
    }]
};

// anthology chapter title

export const title_anthology_chapter: Source = {
    type: {
        type: 'book',
        subtype: 'anthology'
    },
    title: 'A chapter title in an anthology',
    anthologyTitle: 'Anthology of important works'
};

export const title_anthology_chapter_apa: RawQuillDelta = {
    ops: [{
        insert: 'A chapter title in an anthology. '
    }]
};

// entire anthology

export const title_anthology_whole: Source = {
    type: {
        type: 'book',
        subtype: 'anthology'
    },
    anthologyTitle: 'An anthology of works: A reader'
};

export const title_anthology_whole_apa: RawQuillDelta = {
    ops: [{
        insert: 'An anthology of works: A reader. ',
        attributes: {
            italic: true
        }
    }]
};

// webpage

export const title_webpage: Source = {
    type: {
        type: 'website',
        subtype: 'standard'
    },
    title: 'Webpage on a website references',
    websiteName: 'APA Style'
};

export const title_webpage_apa: RawQuillDelta = {
    ops: [{
        insert: 'Webpage on a website references. ',
        attributes: {
            italic: true
        }
    }]
};




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

//

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
        insert: 'Saris, W. E., & P. M. Sniderman (Eds.). '
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

//

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
        insert: 'Baggins, B., & G. T. Gray. '
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
        insert: 'Sniderman, P. M., & S. M. Theriault. '
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
        insert: 'Greenleaf, L., G. T. Gray, & R. Brown (Eds.). '
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
        insert: 'Baggins, F. T., & B. Baggins. '
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
}