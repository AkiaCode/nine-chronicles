const nine_chronicles = require('./src/index')

nine_chronicles('{"query":"query {\\n stateQuery {\\n shop {\\n address\\n products {\\n productId\\n price\\n itemUsable {\\n elementalType\\n grade\\n id\\n itemId\\n itemSubType\\n itemType\\n }\\n costume {\\n elementalType\\n grade\\n id\\n itemId\\n itemSubType\\n itemType\\n }\\n }\\n }\\n }\\n}"}')
.then(res => console.log(res))