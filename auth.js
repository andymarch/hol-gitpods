const path = require('path')
const clitools = require('@altostra/cli-login-auth0')

const loginProcessor = new clitools.Auth0LoginProcessor({
  auth0ClientId: '7zLxnSUhtGbRGdrgJ7VbIaIBQmlvi8DV',
  auth0Domain: 'dev-m5l9n4xe.eu.auth0.com',
  auth0TokenAudience: 'https://platform.auth0.localhost/api',
  auth0TokenScope: 'profile',
  port: 42224,
  timeout: 30000,
  successfulLoginHtmlFile: path.resolve(__dirname, 'success.html'),
  failedLoginHtmlFile: path.resolve(__dirname, 'failure.html')
}, clitools.tryGetAccessToken)


console.log("Performing setup...")
preformAuth()
.then((token) => {
 provisionTenant(token)
})
.catch(err => console.log(err))


function preformAuth(){
  return new Promise(async function (resolve,reject){
    try {
      var result = await loginProcessor.runLoginProcess()
      resolve(result.access_token)
    } catch (err){
      reject(err)
    }
  })
}

function provisionTenant(token) {
  console.log('i got a token now i am unstoppable')
}
