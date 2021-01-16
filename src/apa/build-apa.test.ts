import { RawQuillDelta as Citation } from 'quilljs-parser';
import { authors_single, authors_single_apa, authors_single_lastonly, authors_single_lastonly_apa, authors_single_lowercase, authors_single_lowercase_apa, authors_single_nomid, authors_single_nomid_apa, authors_single_uppercase, authors_three, authors_three_apa, authors_three_last_no_mid, authors_three_last_no_mid_apa, authors_two, authors_two_apa, book_edited, book_edited_apa, book_edited_chapter, book_edited_chapter_apa, book_edited_chapter_edition, book_edited_chapter_edition_apa, book_edited_whole_edition, book_edited_whole_edition_apa, book_edition, book_edition_apa, book_simple, book_simple_apa, date_full, date_full_apa, date_full_lower, date_full_lower_apa, date_full_upper, date_full_upper_apa, date_simple_year, date_simple_year_apa, date_year_spaces, date_year_spaces_apa, editors_early_one, editors_early_one_apa, editors_early_three, editors_early_three_apa, editors_early_two, editors_early_two_apa, title_anthology_chapter, title_anthology_chapter_apa, title_anthology_whole, title_anthology_whole_apa, title_book, title_book_apa, title_book_edition, title_book_edition_apa, title_journal, title_journal_apa, title_magazine, title_magazine_apa, title_news, title_news_apa, title_webpage, title_webpage_apa } from '../test-io';
import { citeBook, citeAnthology, insertPubDate } from './build-apa';



/*
describe('formats authors', () => {

    let citation: Citation = { ops: [] };

    beforeEach(() => {
        citation = { ops: [] };
    });

    test('one author', () => {
        expect(insertAuthors(authors_single, citation)).toEqual(authors_single_apa);
    });

    test('one author no middle name', () => {
        expect(insertAuthors(authors_single_nomid, citation)).toEqual(authors_single_nomid_apa);
    });

    test('one author last name only', () => {
        expect(insertAuthors(authors_single_lastonly, citation)).toEqual(authors_single_lastonly_apa);
    });

    test('one author lowercase', () => {
        expect(insertAuthors(authors_single_lowercase, citation)).toEqual(authors_single_lowercase_apa);
    });

    test('one author uppercase', () => {
        expect(insertAuthors(authors_single_uppercase, citation)).toEqual(authors_single_lowercase_apa);
    });

    test('two authors', () => {
        expect(insertAuthors(authors_two, citation)).toEqual(authors_two_apa);
    });

    test('three authors', () => {
        expect(insertAuthors(authors_three, citation)).toEqual(authors_three_apa);
    });

    test('three authors last no mid', () => {
        expect(insertAuthors(authors_three_last_no_mid, citation)).toEqual(authors_three_last_no_mid_apa);
    });

});


describe('early editors', () => {

    let citation: Citation = { ops: [] };

    beforeEach(() => {
        citation = { ops: [] };
    });

    test('single editor', () => {
        expect(insertEditorAsAuthor(editors_early_one, citation)).toEqual(editors_early_one_apa);
    });

    test('two editors', () => {
        expect(insertEditorAsAuthor(editors_early_two, citation)).toEqual(editors_early_two_apa);
    });

    test('three editors', () => {
        expect(insertEditorAsAuthor(editors_early_three, citation)).toEqual(editors_early_three_apa);
    });

});

*/

describe('publication date', () => {

    let citation: Citation = { ops: [] };

    beforeEach(() => {
        citation = { ops: [] };
    });

    test('full date', () => {
        expect(insertPubDate(date_full, citation)).toEqual(date_full_apa);
    });

    test('full date lower', () => {
        expect(insertPubDate(date_full_lower, citation)).toEqual(date_full_lower_apa);
    });

    test('full date upper', () => {
        expect(insertPubDate(date_full_upper, citation)).toEqual(date_full_upper_apa);
    });

});

/*
describe('formats titles', () => {

    let citation: Citation = { ops: [] };

    beforeEach(() => {
        citation = { ops: [] };
    });

    test('book title', () => {
        expect(insertTitle(title_book, citation)).toEqual(title_book_apa);
    });

    test('book with edition', () => {
        expect(insertTitle(title_book_edition, citation)).toEqual(title_book_edition_apa);
    });

    test('journal article', () => {
        expect(insertTitle(title_journal, citation)).toEqual(title_journal_apa);
    });

    test('anthology chapter', () => {
        expect(insertTitle(title_anthology_chapter, citation)).toEqual(title_anthology_chapter_apa);
    });

    test('anthology whole', () => {
        expect(insertTitle(title_anthology_whole, citation)).toEqual(title_anthology_whole_apa);
    });

    test('magazine title', () => {
        expect(insertTitle(title_magazine, citation)).toEqual(title_magazine_apa);
    });

    test('newspaper title', () => {
        expect(insertTitle(title_news, citation)).toEqual(title_news_apa)
    });

    test('webpage', () => {
        expect(insertTitle(title_webpage, citation)).toEqual(title_webpage_apa);
    });

});
*/

/* BOOK CITING */

/*

describe.only('test book citing', () => {

    let citation: Citation = { ops: []};

    beforeEach(() => {
        citation = { ops: [] };
    });

    test('simple book', () => {
        expect(citeBook(book_simple, citation)).toEqual(book_simple_apa);
    });

    test('book with edition', () => {
        expect(citeBook(book_edition, citation)).toEqual(book_edition_apa);
    });

    test('whole edited book', () => {
        expect(citeAnthology(book_edited, citation)).toEqual(book_edited_apa);
    });

    test('chapter in edited book', () => {
        expect(citeAnthology(book_edited_chapter, citation)).toEqual(book_edited_chapter_apa);
    });

    test('whole edited book with edition', () => {
        expect(citeAnthology(book_edited_whole_edition, citation)).toEqual(book_edited_whole_edition_apa);
    });

    test('chapter in edited book with edition', () => {
        expect(citeAnthology(book_edited_chapter_edition, citation)).toEqual(book_edited_chapter_edition_apa);
    });

});

*/
//
/* SOURCE TYPE DETECTION */
//

describe('detects proper source type', () => {



});



describe.only('standard book', () => {

    test('simple book', () => {
        expect(citeBook(book_simple)).toEqual(book_simple_apa);
    });

    test('book w/ edition', () => {
        expect(citeBook(book_edition)).toEqual(book_edition_apa);
    });

    test('edited book whole', () => {
        expect(citeBook(book_edited)).toEqual(book_edited_apa);
    });

    test('portion of edited book', () => {
        expect(citeBook(book_edited_chapter)).toEqual(book_edited_chapter_apa);
    });

    test('portion of edited book w/ edition', () => {
        expect(citeBook(book_edited_chapter_edition)).toEqual(book_edited_chapter_edition_apa);
    });

    test('edited book whole w/ edition', () => {
        expect(citeBook(book_edited_whole_edition)).toEqual(book_edited_whole_edition_apa);
    });

});