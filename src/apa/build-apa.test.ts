import { RawQuillDelta as Citation } from 'quilljs-parser';
import { book_edited, book_edited_apa, book_edited_chapter, book_edited_chapter_apa, book_edited_chapter_edition, book_edited_chapter_edition_apa, book_edited_whole_edition, book_edited_whole_edition_apa, book_edition, book_edition_apa, book_org_author, book_org_author_apa, book_original_pubyear, book_original_pubyear_apa, book_simple, book_simple_apa, journal_doi, journal_doi_apa, journal_only, journal_only_apa, journal_pages_only, journal_pages_only_apa, journal_simple, journal_simple_apa, magazine_simple, magazine_simple_apa, newspaper_simple, newspaper_simple_apa, website_authors, website_authors_apa, website_authors_org, website_authors_org_apa, website_orgonly, website_orgonly_apa } from '../test-io';
import { citeBook, citeJournal, citePeriodical, citeWebsite } from './build-apa';


/* BOOK CITING */

describe('books', () => {

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

    test('book w/ original date', () => {
        expect(citeBook(book_original_pubyear)).toEqual(book_original_pubyear_apa);
    });

    test('book w/ org author', () => {
        expect(citeBook(book_org_author)).toEqual(book_org_author_apa);
    });

});

describe('journal articles', () => {

    test('simple', () => {
        expect(citeJournal(journal_simple)).toEqual(journal_simple_apa);
    });

    test('no volume or number', () => {
        expect(citeJournal(journal_pages_only)).toEqual(journal_pages_only_apa);
    });

    test('no volume, number, pages', () => {
        expect(citeJournal(journal_only)).toEqual(journal_only_apa);
    });

    test('journal w/ doi', () => {
        expect(citeJournal(journal_doi)).toEqual(journal_doi_apa);
    });

});

describe('periodicals', () => {

    test('newspaper', () => {
        expect(citePeriodical(newspaper_simple)).toEqual(newspaper_simple_apa);
    });

    test('magazine', () => {
        expect(citePeriodical(magazine_simple)).toEqual(magazine_simple_apa);
    });

});

describe('websites', () => {

    test('w/ authors', () => {
        expect(citeWebsite(website_authors)).toEqual(website_authors_apa);
    });

    test('w/ org as author', () => {
        expect(citeWebsite(website_orgonly)).toEqual(website_orgonly_apa);
    });
    
    test('w/ authors, org, no website', () => {
        expect(citeWebsite(website_authors_org)).toEqual(website_authors_org_apa);
    });
});

describe('other', () => {

});