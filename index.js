(async()=>{
    "use strict";

    // Dependencies
    const request = require("request-async")
    const chalk = require("chalk")
    
    // Variables
    const args = process.argv.slice(2)
    
    var WHSnipe = {
        headers: {
            security: [
                "x-xss-protection",
                "x-frame-options",
                "x-content-type-options",
                "strict-transport-security",
                "content-security-policy",
                "x-permitted-cross-domain-policies",
                "referrer-policy",
                "expect-ct",
                "permissions-policy",
                "cross-origin-embedder-policy",
                "cross-origin-resource-policy",
                "cross-origin-opener-policy"
            ],
            information: [
                "x-powered-by",
                "server"
            ],
            cache: [
                "cache-control",
                "pragma",
                "last-modified",
                "expires",
                "etag"
            ]
        }
    }
    
    //Main
    if(!args.length) return console.log("node index.js <url>")
    
    var response = await request(args[0])

    const headers = response.headers
    
    for( const security of WHSnipe.headers.security ) headers.hasOwnProperty(security) ? console.log(`Security header found: ${chalk.redBright(security)} | ${chalk.yellowBright(security)}`) : console.log(`Security header missing: ${chalk.redBright(security)}`)
    for( const information of WHSnipe.headers.information ) headers.hasOwnProperty(information) ? console.log(`Information header found: ${chalk.redBright(information)} | ${chalk.yellowBright(headers[information])}`) : console.log(`Information header missing: ${chalk.redBright(information)}`)
    for( const cache of WHSnipe.headers.cache ) headers.hasOwnProperty(cache) ? console.log(`Cache header found: ${chalk.redBright(cache)} | ${chalk.yellowBright(headers[cache])}`) : console.log(`Cache header missing: ${chalk.redBright(cache)}`)
})()