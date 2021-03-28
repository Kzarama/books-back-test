const axios = require('axios');
const { expect } = require('chai');

let url = "https://books-bac.herokuapp.com/books"

describe('When the user want to delete the book without id', () => {

    it('When the user want to delete the book without id', async () => {
        responseError = await axios.delete(url).catch((error) => {
            expect(error.response.status).eq(405)
        })
    })

})
