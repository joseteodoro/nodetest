const rq = require('request-promise')

const GITHUB = 'https://raw.githubusercontent.com/joseteodoro/PUCES-JUN2020/master/code/.eslintrc'

const NOT_FOUND = 'http://notfound.br'

// unbox de parametros
// const extract = ({ globals }) => globals

// const extract = body => {
//     const { globals } = body
//     return globals
// }

const extract = field => body => body[field]

const call = field => url => rq.get(url)
    .then(JSON.parse)
    .then(extract(field))
    .then(console.log)
    .catch(_ => console.log('URL nao encontrada') )

const getGlobals = call('globals')
const getPlugins = call('plugins')

getGlobals(GITHUB)
getPlugins(NOT_FOUND)