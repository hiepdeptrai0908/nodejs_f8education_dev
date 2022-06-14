const Course = require('../models/Courses')
const res = require('express/lib/response');
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')


class MeController {

    // [GET] /me/store/courses
    storeCourses(req, res, next) {

        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses : mutipleMongooseToObject(courses)
            }))
            .catch(next)
        
    }

}

module.exports = new MeController();
