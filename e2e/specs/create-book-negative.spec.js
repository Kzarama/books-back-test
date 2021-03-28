const axios = require('axios');
const { expect } = require('chai');

let url = "https://books-bac.herokuapp.com/books"

describe('When the user want to create the book without data', () => {

    it('When the user want to create the book without data', async () => {
        responseError = await axios.post(url).catch((error) => {
            expect(error.response.status).eq(415)
        })
    })

})
