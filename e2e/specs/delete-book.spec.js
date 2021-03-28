const axios = require('axios');
const { expect } = require('chai');

let response
let new_response
let book_created

let url = "https://books-bac.herokuapp.com/books"
let new_book = {"name": "Dracula", "author": "Bram Stoker"}

describe('When the user wants to list the books', () => {

    before('Enter in the page and create a book', async () => {
        book_created = await axios.post(url, new_book)
        response = await axios.get(url)
        await axios.delete(`${url}/${book_created.data.id}`)
        new_response = await axios.get(url)
    })

    it('Should return ok status code', () => {
        expect(response.status).eq(200)
    })

    it('Should delete a book', () => {
        expect(response.data.length - 1).eql(new_response.data.length)
    })

    it('The new book should not be in the list of books', () => {
        expect(new_response.data).not.contain(new_book)
    })

})
