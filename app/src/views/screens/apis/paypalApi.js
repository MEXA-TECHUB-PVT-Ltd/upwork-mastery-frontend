let baseUrl = 'https://api-m.sandbox.paypal.com';
const base64 = require('base-64')

let clintId = 'AbMH9MhD25C8RpmirExvQcaTIS-BCpB9DALvDAzWa9pYiWUVPF2y8FaCNUDZ-q16OC96EdwpDAUy7YVV';
let secretKey = 'EB6tmHQ3zsKEZZWnzupr34ywBhV3cYB7N_Au_u3whsf_sxfQYP3KkLj3CzXZFe2MWA4_MZKe9z8OVD0P'

const generateToken = () => {
    var headers = new Headers()
    headers.append("Content-Type", "application/x-www-form-urlencoded")
    headers.append("Authorization", "Basic " + base64.encode(`${clintId}:${secretKey}`))

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: 'grant_type=client_credentials',
    };
    return new Promise((resolve, reject) => {
        fetch(baseUrl + '/v1/oauth2/token', requestOptions).then(response => response.text()).then(result => {
            console.log('print result', result)
            const { access_token } = JSON.parse(result)
            // resolve(result)
            resolve(access_token)
        }).catch(error => {
            console.log("error raised", error)
            reject(error)
        })
    })
}







let orderDetail = {
    "intent": "CAPTURE",
    "purchase_units": [
        {
            "items": [
                {
                    "name": "T-Shirt",
                    "description": "Green XL",
                    "quantity": "1",
                    "unit_amount": {
                        "currency_code": "USD",
                        "value": "100.00"
                    }
                }
            ],
            "amount": {
                "currency_code": "USD",
                "value": "100.00",
                "breakdown": {
                    "item_total": {
                        "currency_code": "USD",
                        "value": "100.00"
                    }
                }
            }
        }
    ],
    "application_context": {
        "return_url": "https://example.com/return",
        "cancel_url": "https://example.com/cancel"
    }
}




const createOrder = (token = '') => {

    var requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderDetail)
    };
    return new Promise((resolve, reject) => {
        fetch(baseUrl + '/v2/checkout/orders', requestOptions).then(response => response.text()).then(result => {
            console.log('print result', result)
            const res = JSON.parse(result)
            // resolve(result)
            resolve(res)
        }).catch(error => {
            console.log("error raised", error)
            reject(error)
        })
    })
}

const capturePayment = (id, token = '') => {

    var requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },

    };
    return new Promise((resolve, reject) => {
        fetch(baseUrl + `/v2/checkout/orders/:${id}/capture`, requestOptions).then(response => response.text()).then(result => {
            console.log('print result', result)
            const res = JSON.parse(result)
            // resolve(result)
            resolve(res)
        }).catch(error => {
            console.log("error raised", error)
            reject(error)
        })
    })
}

export default {
    generateToken, createOrder, capturePayment
}