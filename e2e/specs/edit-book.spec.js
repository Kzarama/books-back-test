const axios = require('axios');
const { expect } = require('chai');

let response
let new_response
let book_created

let url = "https://books-bac.herokuapp.com/books"
let new_book = {"name": "Dracula", "author": "Bram Stoker"}
let edited_book = {"name": "Drácula", "author": "Bram Stoker"}

describe('When the user wants to create books', () => {

    before('Enter in the page', async () => {
        book_created = await axios.post(url, new_book)
        response = await axios.get(url)
        book_updated = await axios.put(`${url}/${book_created.data['id']}`, edited_book)
        new_response = await axios.get(url)
    })

    after('Delete the book created', async () => {
        await axios.delete(`${url}/${book_created.data.id}`)
    })

    it('Should return a ok status code', () => {
        expect(response.status).eq(200)
    })

    it('Should change the name of the book', () => {
        expect(book_created).not.eq(book_updated)
    })

    it('The book updated and the book edited should be the same', () => {
        delete book_updated.data['id']
        expect(edited_book).eql(book_updated.data)
    })

})
