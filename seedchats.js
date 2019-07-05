.then(() => {
  return Chat.create([
    {
    title: 'locals',
    image:'https://www.adventureinyou.com/wp-content/uploads/2015/07/solo-female-traveller-INDEPENDENCE-960x640.jpg',
    comments: [
      {
        text: 'Hi, I am planning to visit your beautiful town. Do you have some suggestion for me to where to stay?',
        user: user[5]
      },
      {
        text: 'No idea, sorry!',
        user: user[0]
      },
      {
        text: 'You can stay in our hostel, is very close to the beach. You are going to love it!',
        user: user[4]
      },
      {
        text: 'Thank you for the tips! What is the name of the hostel',
        user: user[5]
      },
      {
        text: 'I think he was reletated to the Backpacker Hostel, I am not sure you wanna go there. Check their reviews on TripAdvisor or Google',
        user: user[3]
      },
      {
        text: 'Oh 😢! Ok, thanks. Do you have a better suggestion? Travelling solo is never that easy.',
        user: user[5]
      },
      {
        text: 'I am renting my sofa at https://www.couchsurfing.com/ have a look! ',
        user: user[3]
      },
      {
        text: 'Hi, just read your post. Vietnamese people are very welcome. I am sure you are going to love your stay there. I have been to the Backpacker Hostel and is a nice place to be. I met my girlfriend there, and we are going to get married in May. 💒',
        user: user[8]
      },
      {
        text: 'Thank you all! I have made my decision',
        user: user[5]
      },
      {
        text: 'I am curious now. What is your decision? Coach or hostel? Please rent my coach! I need money!!!!',
        user: user[3]
      },
    ]
  }, {
    title: 'travellers',
    image:'http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/food/allParagraphs/BucketComponent/ListingContainer/014/image/hanoi-beer.jpg',
    comments: [
      {
        text: 'Hi guys, I am in Hanoi toinght. Someone wants to go out for a drink?',
        user: user[8]
      },
      {
        text: 'I am in! 🎉🎉🎉 Have you been to the Binh Minh Jazz Club' ,
        user: user[2]
      },
      {
        text: 'Yeah! I have jus arrived in Hanoi from London, it would be nice to meet new people before I live on Friday. Count me in! ',
        user: user[5]
      },
      {
        text: 'Fantastic! What about 7PM at the Binh Minh Jazz Club entrance',
        user: user[1]
      },
      {
        text: 'I will wearing a funny red hat 😁! See you toinght!!!! ',
        user: user[5]
      },
      {
        text: 'Can i bring my gf?',
        user: user[6]
      },
      {
        text: 'The more the merrier!',
        user: user[1]
      },
      {
        text: 'Here is the link of the venue guys! http://minhjazzvietnam.com/ . See you tonight. I can not wait to meet you all',
        user: user[2]
      },
      {
        text: 'See you shortly! 🎺🎺🎺',
        user: user[6]
      },
    ]
  }
  ])

})
