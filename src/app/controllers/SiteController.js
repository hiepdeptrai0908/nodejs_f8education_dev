const Course = require('../models/Courses')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                courses = mutipleMongooseToObject(courses)
                return res.render('home', { courses })
            })

            .catch(next)

    }

    // [GET] /search
    // show(req, res) {
    //     res.render('search');
    // }
}

module.exports = new SiteController();
