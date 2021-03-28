const axios = require('axios');
const { expect } = require('chai');

let response
let new_response
let book_created

let url = "https://books-bac.herokuapp.com/books"
let new_book = {"name": "Dracula", "author": "Bram Stoker"}

describe('When the user wants to create books', () => {

    before('Enter in the page', async () => {
        response = await axios.get(url)
        book_created = await axios.post(url, new_book)
        new_response = await axios.get(url)
    })

    after('Delete the book created', async () => {
        await axios.delete(`${url}/${book_created.data.id}`)
    })

    it('Should return a ok status code', () => {
        expect(response.status).eq(200)
    })

    it('Should have created a new book', () => {
        expect(response.data).not.contain(new_book.name)
        expect(response.data.length + 1).eq(new_response.data.length)
    })

})
