/* globals api, expect, describe, beforeEach, afterEach, it */

require('../spec_helper')

const User = require('../../models/user')
const Gem = require('../../models/gem')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

// test suite, container of tests
describe('Gem Tests', () => {

  let user
  let token
  
  //setup of the test suite
  beforeEach(done => {
    User.create(
      {
        username: 'jennypham',
        email: 'jennypham@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Midu_-_Summer_2012_%28Explored_1_-_May_24th%29_cropped.jpg',
        lang: 'vi',
        text: 'I know places yeah.',
        userType: 'Local'
      }) 
      .then(userData => {
        user = userData

        // find user and retrieve token
        User
          .findOne({ email: user.email })
          .then(user => {       
            token = jwt.sign({ sub: user._id }, secret, { expiresIn: '10d' })
          })
          .catch(done)

        //delete previously existing gems from the database
        Gem.collection.deleteMany()
        done()
      })
      .catch(done)
  })

  // tear down of the test suite
  afterEach(done => {
    Gem.collection.deleteMany()
    User.collection.deleteMany()
    done()
  })

  describe('GET /api/gems', () => {
      
    beforeEach(done => {

      Gem.create({
        image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-markets-in-vietnam/allParagraphs/00/top10Set/00/image.jpg',
        caption: 'Han Market is a prominent attraction in Da Nang, having served the local population since the French occupation in the early 20th century. Located at the grand intersection of Tran Phu Street, Bach Dang Street, Hung Vuong Street and Tran Hung Dao Street, visitors can find hundreds of stalls selling just about everything from local produce and coffee beans to T-shirts, jewellery, and accessories.',
        location: 'Han Market',
        user: user,
        category: 'Markets'
      })
        .then(() => done())
        .catch(done)
    })

    // test case for checking 200 response
    it('should return a 200 response', done => {
      api
        .get('/api/gems')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .expect(200, done)
    })

    it('should respond with a JSON object', done => {
      api
        .get('/api/gems')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8')
          done()
        })
    })
  
    it('should return an array of gems', done => {
      api
        .get('/api/gems')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .end((err, res) => {
          expect(res.body).to.be.an('array')
          done()
        })
    })
  
    it('should return an array of gem objects', done => {
      api.get('/api/gems')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '__v',
              '_id',
              'image',
              'caption',
              'location',
              'user',
              'category',
              'comments',
              'createdAt',
              'id',
              'likeCount',
              'updatedAt'
            ])
          done()
        })
    })
  
    it('gem objects should have properities: _id, image, caption, location, user, category', done => {
      api.get('/api/gems')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .end((err, res) => {
          const firstGem = res.body[0]
  
          expect(firstGem)
            .to.have.property('_id')
            .and.to.be.a('string')
  
          expect(firstGem)
            .to.have.property('image')
            .and.to.be.a('string')
  
          expect(firstGem)
            .to.have.property('caption')
            .and.to.be.a('string')
  
  
          expect(firstGem)
            .to.have.property('location')
            .and.to.be.a('string')
        
          expect(firstGem)
            .to.have.property('category')
            .and.to.be.a('string')
  
          done()
        })
    })
  
    describe('Make more than one gem', () => {
  
      beforeEach(done => {
        Gem.create([
          {
            caption: 'Han Market is a prominent attraction in Da Nang, having served the local population since the French occupation in the early 20th century. Located at the grand intersection of Tran Phu Street, Bach Dang Street, Hung Vuong Street and Tran Hung Dao Street, visitors can find hundreds of stalls selling just about everything from local produce and coffee beans to T-shirts, jewellery, and accessories.',
            location: 'Han Market',
            user: user,
            category: 'Markets',
            image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-markets-in-vietnam/allParagraphs/00/top10Set/0/image.jpg'
          },
          {
            image: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/07/Cao-Dai-Temple.jpg',
            caption: 'Cao Dai Temple is one of 1,000 Cao Dai Temples, and one of the most well-known temples in Vietnam. Constructed in the 1930s and completed in 1955, Cao Dai temple is a technicolored religious site that attracts hundreds of travelers every day.',
            location: 'Cao Dai Temple',
            user: user,
            category: 'Temples'
          }
        ])
          .then(() => done())
          .catch(done)
      })
  
      it('should return three gems', done => {
        api
          .get('/api/gems')
          .set('Accept', 'application/json')
          .set('Authorization', 'Bearer ' + token)
          .end((err, res) => {
            expect(res.body.length).to.equal(3)
            done()
          })
      })
    })
  })

  
  
  describe('POST /api/gems - Create Gem API Endpoint', () => {



    it('should return a 201 response', done => {
      api
        .post('/api/gems')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .send( {
          caption: 'Han Market is a prominent attraction in Da Nang, having served the local population since the French occupation in the early 20th century. Located at the grand intersection of Tran Phu Street, Bach Dang Street, Hung Vuong Street and Tran Hung Dao Street, visitors can find hundreds of stalls selling just about everything from local produce and coffee beans to T-shirts, jewellery, and accessories.',
          location: 'Han Market',
          category: 'Markets',
          image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-markets-in-vietnam/allParagraphs/00/top10Set/0/image.jpg'
        }
        )
        .expect(201, done)
    })
  /*
    it('should create a gem', done => {
      api
        .post('/api/gems')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .send({
          caption: 'Han Market is a prominent attraction in Da Nang, having served the local population since the French occupation in the early 20th century. Located at the grand intersection of Tran Phu Street, Bach Dang Street, Hung Vuong Street and Tran Hung Dao Street, visitors can find hundreds of stalls selling just about everything from local produce and coffee beans to T-shirts, jewellery, and accessories.',
          location: 'Han Market',
          user: user,
          category: 'Markets',    
          image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-markets-in-vietnam/allParagraphs/00/top10Set/0/image.jpg'

        }
        )
        .end((err, res) => {
          const gem = res.body
  
          expect(gem)
            .to.have.property('id')
            .and.to.be.a('string')
  
          expect(gem)
            .to.have.property('image')
            .and.to.be.a('string')
  
          expect(gem)
            .to.have.property('caption')
            .and.to.be.a('string')
  
          expect(gem)
            .to.have.property('location')
            .and.to.be.a('string')
  
          expect(gem)
            .to.have.property('user')
            .and.to.be.a('string')
  
          expect(gem)
            .to.have.property('category')
            .and.to.be.a('string')
  
          done()
        })
    })
  */
  })
  
  describe('GET /api/gems/:id', () => {
  
    let gem
  
    beforeEach(done => {
      Gem.create({
        caption: 'Han Market is a prominent attraction in Da Nang, having served the local population since the French occupation in the early 20th century. Located at the grand intersection of Tran Phu Street, Bach Dang Street, Hung Vuong Street and Tran Hung Dao Street, visitors can find hundreds of stalls selling just about everything from local produce and coffee beans to T-shirts, jewellery, and accessories.',
        location: 'Han Market',
        user: user,
        category: 'Markets',
        image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-markets-in-vietnam/allParagraphs/00/top10Set/0/image.jpg'
      })
        .then(gemData => {
          gem = gemData
          done()
        })
        .catch(done)
    })
  
    it('should return a 200 response', done => {
      api
        .get(`/api/gems/${gem.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .expect(200, done)
    })
  })


  
  describe('DELETE /api/gems/:id', () => {
  
    let gem
  
    beforeEach(done => {
      Gem.create({
        caption: 'Han Market is a prominent attraction in Da Nang, having served the local population since the French occupation in the early 20th century. Located at the grand intersection of Tran Phu Street, Bach Dang Street, Hung Vuong Street and Tran Hung Dao Street, visitors can find hundreds of stalls selling just about everything from local produce and coffee beans to T-shirts, jewellery, and accessories.',
        location: 'Han Market',
        user: user,
        category: 'Markets',
        image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-markets-in-vietnam/allParagraphs/00/top10Set/0/image.jpg'
      })
        .then(gemData => {
          gem = gemData
          done()
        })
        .catch(done)
    })
  
    it('should return a 204 response', done => {
      api
        .delete(`/api/gems/${gem.id}`)
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .expect(204, done)
    })
  })
})
