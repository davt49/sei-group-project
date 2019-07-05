// username: { type: String, required: true, unique: true },
  // email: { type: String, required: true, unique: true },
  // password: { type: String, required: true },
  // image: { type: String, required: true },
  // lang: { type: String, required: true },
  // text: { type: String, required: true },
  // userType: { type: String, required: true }
.then(() => {
      return User.create([
        {
          username: 'JennyPham',
          email: 'jennypham@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Midu_-_Summer_2012_%28Explored_1_-_May_24th%29_cropped.jpg',
          lang: 'Vietnamese',
          text: 'I know places yeah.',
          userType: 'Local'
        },
        {
          username: 'JohnNyuyen',
          email: 'johnnyuyen@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'http://raydarmedia.com/Content/cacheImages/img-55692-0.jpg',
          lang: 'Vietnamese',
          text: 'Fishing mogul hit me up.',
          userType: 'Local'
        },
        {
          username: 'JonnyHo',
          email: 'jonnyho@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://pbs.twimg.com/media/CjU4ZSNUUAEZBOD.jpg',
          lang: 'Vietnamese',
          text: 'Reall awesome guy. Everyone loves me.',
          userType: 'Local'
        },
        {
          username: 'AliceTran',
          email: 'alicetran@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://i.pinimg.com/originals/c6/8f/96/c68f96329dd7e9b7159d6f272ea89a02.jpg',
          lang: 'Vietnamese',
          text: 'I know the food and hotels.',
          userType: 'Local'
        },
        {
          username: 'Randy Vu',
          email: 'randyvu@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0LPspC2oI5i4TwTmi_U1sx8_ngdKW-H96Dnwsye414yIeM2k',
          lang: 'Vietnamese',
          text: 'Michelin starred chef in Hanoi',
          userType: 'Local'
        },
        {
          username: 'TommyHilfigure',
          email: 'tommyhilfigure@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW08936_083_main_listing?$listing$',
          lang: 'French',
          text: 'Hi I am Tommy I love to wear Tommy Hilfiger.',
          userType: 'Tourist'
        },
        {
          username: 'TomMueller',
          email: 'tommueller@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://assets.dfb.de/uploads/000/176/418/custom_style_1_Mueller.jpg?1533240452',
          lang: 'German',
          text: 'Ich mag Fussball spielen',
          userType: 'Tourist'
        },
        {
          username: 'ElizabethThompson',
          email: 'elizabeththompson@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://i.cbc.ca/1.3912105.1484693236!/fileImage/httpImage/image.jpg_gen/derivatives/square_620/elizabeth-thompson.jpg',
          lang: 'English',
          text: 'English teacher in the area.',
          userType: 'Tourist'
        },
        {
          username: 'PeterEngland',
          email: 'peterengland@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://static1.squarespace.com/static/580cca3af7e0ab8777364ab0/t/5872b34b29687f06dd344d03/1484076351194/',
          lang: 'English',
          text: 'I love Vietnam it is so cheap.',
          userType: 'Tourist'
        },
        {
          username: 'BorisJohanson',
          email: 'borisjohanson@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://cdn.images.express.co.uk/img/dynamic/139/590x/Boris-Johnson-criticised-the-burka-as-weird-1000384.jpg?r=1533683889181',
          lang: 'English',
          text: 'We have to leave without a deal it is about our sovereignty.',
          userType: 'Tourist'
        },
        {
          username: 'JeremyFunt',
          email: 'jeremyfunt@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_840,q_auto:eco,w_1200/https://inews.co.uk/wp-content/uploads/2019/07/1153120184.jpg',
          lang: 'English',
          text: 'My wife is japanese.',
          userType: 'Tourist'
        },
        {
          username: 'JeremyCorbling',
          email: 'jeremycobling@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image:'http://i.dailymail.co.uk/i/pix/2015/09/21/00/2C8E4CC600000578-3242021-image-m-56_1442792822099.jpg',
          lang: 'English',
          text: 'Not ruling out referendum and stuff',
          userType: 'Tourist'
        }
      ])
    })
