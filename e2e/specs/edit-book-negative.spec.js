const axios = require('axios');
const { expect } = require('chai');

let url = "https://books-bac.herokuapp.com/books"

describe('When the user want to edit the book without data', () => {

    it('When the user want to edit the book without data', async () => {
        responseError = await axios.put(url).catch((error) => {
            expect(error.response.status).eq(405)
        })
    })

})