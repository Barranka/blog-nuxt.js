const middleware = {}

middleware['auth-check'] = require('..\\middleware\\auth-check.js')
middleware['auth-check'] = middleware['auth-check'].default || middleware['auth-check']

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

export default middleware
