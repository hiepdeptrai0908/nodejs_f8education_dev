const { search } = require('./news')
const newsRoute = require('./news')
const coursesRoute = require('./courses')
const siteRoute = require('./site')
const meRoute = require('./me')

function route(app) {
    app.use('/news', newsRoute)
    app.use('/me', meRoute)
    app.use('/courses', coursesRoute)
    app.use('/', siteRoute)
}

module.exports = route
