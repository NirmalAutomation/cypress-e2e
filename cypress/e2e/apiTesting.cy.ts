import 'cypress-plugin-api'

describe('Rest API Testing', () => {

    it('Test POST Request', () => {
        cy.api({
            method: 'POST',
            url: 'https://rahulshettyacademy.com/maps/api/place/add/json?qaclick123',
            headers: {
                accept: 'application/json'
            },
            body: {
                "location": {
                    "lat": -38.383494,
                    "lng": 33.427362
                },
                "accuracy": 50,
                "name": "Frontline house",
                "phone_number": "(+91) 983 893 3937",
                "address": "29, side layout, cohen 09",
                "types": [
                    "shoe park",
                    "shop"
                ],
                "website": "http://google.com",
                "language": "French-IN"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Test GET Request', () => {
        cy.api({
            method: 'GET',
            url: 'http://rahulshettyacademy.com/maps/api/place/get/json?place_id=0ce9501466dc63272227742a503f9895&key=qaclick123',

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.isOkStatusCode).to.eq(true)
        });
    });
});
