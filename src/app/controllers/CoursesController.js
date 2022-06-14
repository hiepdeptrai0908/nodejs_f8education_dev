const Course = require('../models/Courses')
const res = require('express/lib/response');
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')


class CoursesController {

    // [GET] /courses/:slug
    show(req, res, next) {

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
        
    }

    // [GET] /courses/create
    create(req, res, next) {

        res.render('courses/create')
        
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        
        Course.findById(req.params.id)
            .then(courses => res.render('courses/edit', { courses: mongooseToObject(courses)}))
            .catch(next)
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then((courses) => res.redirect('/me/store/courses'))
            .catch(next)

    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body
        req.body.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEmV8c7tOACspafPehwBPo91BW6g`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => err)
    }
}

module.exports = new CoursesController();
