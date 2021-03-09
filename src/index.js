const fetch = require('node-fetch')

async function request(data) {
   return await fetch('http://localhost:23061/graphql', {
        method: 'post',
        body:    data,
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    }).then(res => res.json())
}
module.exports = request