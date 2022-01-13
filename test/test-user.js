'use strict'

const chai = require('chai')
const chaiHttp = require('chai-http')
const res = require('express/lib/response')
const server = require('../app')

chai.should()

chai.use(chaiHttp)

describe('User API', () => {
    
    describe('GET /api/v1/user', () => {
        it('Get all the users', (done) => {
            chai.request(server)
            .get('/api/v1/user/')
            .end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('array')
            done()
            })
        })

    })

    describe('GET /api/v1/user/:id', () => {
        it('Get users by ID', (done) => {
            chai.request(server)
            .get('/api/v1/user/' + 14)
            .end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('object')
            done()
            })
        })

        it('If ID does not exist', (done) => {
            chai.request(server)
            .get('/api/v1/user/' + 20)
            .end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('object')
            done()
            })
        })

        it('Incorrect input ID', (done) => {
            chai.request(server)
            .get('/api/v1/user/' + 'asdad')
            .end((err, response) => {
                response.should.have.status(400)
                response.body.should.be.a('object')
            done()
            })
        })
    })

    describe('POST /api/v1/user', () => {
        const testData =  {
            firstName: "testFirstSample",
            lastName: "testLastSample",
            address: "Sample address for test",
            postcode: 2244,
            contactNumber: 1235864,
            email: "testSampleEmail@gmail.com",
            userName: "userTestSample",
            password:  "password"
        }
        it('Post add a user', (done) => {
            chai.request(server)
            .post('/api/v1/user')
            .send(testData)
            .end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('object')
            done()
            })
        })

    })

    describe('PATCH /api/v1/user/:id', () => {
        it('Update user details', (done) => {
            const testData =  {
                firstName: "updateFirst",
                lastName: "updateLast",
                address: "Update address",
                postcode: 2244,
                contactNumber: 1235864,
                email: "testSampleEmail@gmail.com",
                userName: "userTestSample",
                password:  "password"
            }
            chai.request(server)
            .patch('/api/v1/user' + 1)
            .send(testData)
            .end((err, response) => {
            done()
            })
        })
    })

    describe('Delete /api/v1/user', () => {
        it('Delete specific user', (done) => {
            chai.request(server)
            .delete('/api/v1/user/' + 5)
            .end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('object')
            done()
            })
        })
    })

    describe('Delete /api/v1/user', () => {
        it('Delete multiple user', (done) => {
            chai.request(server)
            .delete('/api/v1/user?id=' + 7 + ',' + 8)
            .end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('object')
            done()
            })
        })
    })
})