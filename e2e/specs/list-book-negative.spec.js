const axios = require('axios');
const { expect } = require('chai');

let response;

let url = "https://books-bac.herokuapp.com/books"

describe('When the user wants to list the books', () => {

    before('Enter in the page', async () => {
        response = await axios.get(url)
    })

    it('Should return ok status code', () => {
        expect(response.status).eq(200)
    })

    it('Return a list of books', () => {
        books = response.data
        expect(books.length).to.be.greaterThan(0)
        book = response.data[0]
        expect(book).not.to.have.property('color')
        expect(book).not.to.have.property('size')
    })

})
