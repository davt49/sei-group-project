.then(() => {
  return Category.create([
    {
      text: "Markets"
      },
    {
      text: "Temples"
      },
    {
      text: "Beaches"
      },
    {
      text: "Landscapes"
      },
    {
      text: "Others"
      }
  ])
})
.then(() => {
  return Gem.create([
    {
      image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-markets-in-vietnam/allParagraphs/00/top10Set/0/image.jpg',
      caption: 'Hoi An Central Market in this UNESCO-listed ancient town offers an authentic shopping experience for travellers in Vietnam. Located along the Thu Bon Riverbank, the marketplace is flocked with locals and tourists bargaining purchasing fresh fruits, vegetables, spices, handicrafts, and street snacks.',
      location: 'Hoi An Central Market',
      user: user[10],
      category: [0],
      likes: [
        {
          user: user[13]
          },
        {
          user: user[10]
          },
        {
          user: user[11]
          }
        {
          user: user[12]
          }
      ],
      comments: [
        {
          user: user[13],
          text: 'Awesome!',
          },
        {
          user: user[10],
          text: 'Looks like fun :)',
          }
      ]
    },
    {
      image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-markets-in-vietnam/allParagraphs/00/top10Set/00/image.jpg',
      caption: 'Han Market is a prominent attraction in Da Nang, having served the local population since the French occupation in the early 20th century. Located at the grand intersection of Tran Phu Street, Bach Dang Street, Hung Vuong Street and Tran Hung Dao Street, visitors can find hundreds of stalls selling just about everything from local produce and coffee beans to T-shirts, jewellery, and accessories.',
      location: 'Han Market',
      user: user[11],
      category: [0],
      likes: [
        {
          user: user[11]
          },
        {
          user: user[12]
          }
      ],
      comments: [
        {
          user: user[10],
          text: 'Great stuff',
          },
        {
          user: user[12],
          text: 'It is beautiful!'',
          }
      ]
    },
    {
      image: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/07/Chua_Tran_Quoc1.jpg',
      caption: 'Dating back to the 6th century, Tran Quoc Pagoda is one of the oldest temples in Hanoi, Vietnam. ',
      location: 'Tran Quoc Pagoda',
      user: user[12],
      category: [1],
      likes: [
        {
          user: user[13]
          },
        {
          user: user[11]
          },
        {
          user: user[12]
          }
        {
          user: user[13]
          }
        {
          user: user[12]
          }
        {
          user: user[10]
          }
      ],
      comments: []
    },
    {
      image: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/07/Cao-Dai-Temple.jpg',
      caption: 'Cao Dai Temple is one of 1,000 Cao Dai Temples, and one of the most well-known temples in Vietnam. Constructed in the 1930s and completed in 1955, Cao Dai temple is a technicolored religious site that attracts hundreds of travelers every day.',
      location: 'Cao Dai Temple',
      user: user[13],
      category: [1],
      likes: [
        {
          user: user[12]
        },
        {
          user: user[13]
          },
        {
          user: user[10]
          }
        {
          user: user[11]
          }
        {
          user: user[12]
          }
        {
          user: user[12]
          }
      ],
      comments: [
        {
          user: user[12],
          text: 'WOW!',
          }
      ]
    },
    {
      image: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/07/Mariamman-Hindu-Temple.jpg',
      caption: 'Visit one of the most famous Hindu temples in Vietnam, the Mariamman Hindu Temple of Ho Chi Minh City. It is called Chua Ba Mariamman in Vietnamese and was built at the end of the 19th century as a dedication to the Hindu goddess Mariamman. ',
      location: 'Mariamman Hindu Temple',
      user: user[12],
      category: [1],
      likes: [
        {
          user: user[13]
          },
        {
          user: user[10]
          },
        {
          user: user[11]
          }
        {
          user: user[12]
          }
        {
          user: user[13]
          },
        {
          user: user[10]
          },
        {
          user: user[11]
          }
        {
          user: user[12]
          }
      ],
      comments: [
        {
          user: user[13],
          text: 'Send more reccomendations, loved this',
          },
        {
          user: user[10],
          text: 'Great picture',
          }
        {
          user: user[11],
          text: 'Love your photo',
          },
        {
          user: user[12],
          text: 'Looks like fun, excited to go there',
          }
      ]
    },
    {
      image: 'https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2018/07/Thien-Mu-Pagoda.jpg',
      caption: 'Located in the village of Huong Long, this beautiful temple is at a distance of 5 km from the city of Hue. The temple is situated on the banks of the Perfume River and is a very well preserved tourist attraction.',
      location: 'Thien Mu Pagoda',
      user: user[12],
      category: [1],
      likes: [],
      comments: [
        {
          user: user[12],
          text: 'Nice picture',
          }
      ]
    },
    {
      image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-beaches-in-vietnam/allParagraphs/00/top10Set/0/image.jpg',
      caption: 'Long Beach (Bai Trong) is a 20-km-long coastal area on Phu Quoc Island, where you can find swanky beachfront resorts, beachfront restaurants, cafés and bars with breathtaking sunset views.',
      location: 'Long Beach (Bai Trong)',
      user: user[13],
      category: [2],
      likes: [
        {
          user: user[10]
          },
        {
          user: user[11]
          }
      ],
      comments: [
        {
          user: user[10],
          text: 'Love it',
          },
        {
          user: user[11],
          text: 'Beautiful!',
          },
        {
          user: user[12],
          text: 'Nice'
          }
      ]
    },
    {
      image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/vietnam-top10s/best-beaches-in-vietnam/allParagraphs/00/top10Set/00/image.jpg',
      caption: 'Mui Ne Beach spans 15 km of sandy beaches and rock-free waters, with luxurious beachfront resorts concentrated at the northern end and a traditional fishing village in the south. Located in the Binh Thuan province, the beach attracts throngs of visitors looking for somewhere to swim and enjoy some water sports, but the most popular activity in Mui Ne Beach is kitesurfing.',
      location: 'Mui Ne Beach',
      user: user[10],
      category: [2],
      likes: [
        {
          user: user[11]
          },
        {
          user: user[12]
          },
        {
          user: user[13]
          }
        {
          user: user[11]
          }
        {
          user: user[12]
          }
      ],
      comments: [
        {
          user: user[11],
          text: 'Nice',
          },
        {
          user: user[12],
          text: 'Where is this?',
          },
        {
          user: user[13],
          text: 'Cute picture, I love it!'
          }
      ]
    },
    {
      image: 'https://asianwaytravel.com/wp-content/uploads/2018/12/ban-gioc-waterfall-2.jpg',
      caption: 'Ban Gioc Waterfall is a lesser-known destination in North Vietnam compared to Sapa and Ha Long Bay, making a truly hidden gem for nature lovers and adventurers to discover. Located in northeastern of Vietnam, Cao Bang Province, on a height of 30 meters and a width of 300 meters, Ban Gioc is the widest waterfall in Vietnam, creating such impressive sight of nature.',
      location: 'Ban Gioc Waterfall'
      user: user[12],
      category: [3],
      likes: [
        {
          user: user[13]
          },
        {
          user: user[10]
          },
        {
          user: user[11]
          }
        {
          user: user[12]
          },
        {
          user: user[13]
          }
      ],
      comments: [
        {
          user: user[13],
          text: 'Cannot wait to visit'
        },
        {
          user: user[12],
          text: 'I hope to visit soon'
        }
      ]
    },
    {
      image: 'https://asianwaytravel.com/wp-content/uploads/2018/10/Halong_Bay_Sunset.jpg',
      caption: 'As the name describes, Halong is a land where dragon descended into. This is a rather poetic explanation of thousands of limestone islands and islets scattering on an area of 434 sqkm, reflecting on the greenish bay water. Halong Bay’s geographical landscape was the result of complex geological processes taking over 500 million years. Halong is home to beautiful, unique karst caves such as Dau Go Cave, Sung Sot Cave and Thien Cung Cave.',
      location: 'Halong Bay',
      user: user[13],
      category: [3],
      likes: [
        {
          user: user[12]
          }
      ],
      comments: [
        {
          user: user[12],
          text: 'Very nice',
          },
        {
          user: user[13],
          text: 'Lovely',
          }
        {
          user: user[11],
          text: 'Visited last year, would go again',
          }
      ]
    },
    {
      image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/ho-chi-minh-city/top10/top10-ho-chi-minh-nightlife/allParagraphs/00/top10Set/0/image.jpg',
      caption: 'Ho Chi Minh City has one of the most impressive collections of rooftop bars in the world. From the colonial charm of Saigon Saigon to the chic and modern style of the Chill Skybar, there is a rooftop spot to suit any mood in Saigon. Sit back with a cocktail and soak up the stunning view of Ho Chi Minh City from sunset until the early hours of morning',
      location: 'Chill Skybar',
      user: user[12],
      category: [4],
      likes: [
        {
          user: user[12]
          },
        {
          user: user[13]
          },
        {
          user: user[10]
          }
        {
          user: user[11]
          }
        {
          user: user[13]
          },
        {
          user: user[10]
          },
        {
          user: user[11]
          }
        {
          user: user[12]
          }
      ],
      comments: [
        {
          user: user[12],
          text: 'I am very excited to visit',
          },
        {
          user: user[13],
          text: 'Great picture',
          }
      ]
    },
    {
      image: 'http://static.asiawebdirect.com/m/.imaging/678x452/website/bangkok/portals/vietnam/homepage/ho-chi-minh-city/top10/best-theatre-live-shows-ho-chi-minh/allParagraphs/0/top10Set/0/image.jpg',
      caption: 'The Golden Dragon Water Puppetry Theatre is where you can learn about the culture, traditions and folklore of Vietnamese life during your holiday in Ho Chi Minh City. Located in Tao Dan Park, visitors are entertained by puppets acting on a ‘stage’ of water accompanied by live old-fashioned music played on authentic instruments.',
      location: 'The Golden Dragon Water Puppetry Theatre',
      user: user[13],
      category: [4],
      likes: [
        {
          user: user[11]
          },
        {
          user: user[12]
          },
        {
          user: user[13]
          }
        {
          user: user[10]
          },
        {
          user: user[11]
          }
      ],
      comments: [
        {
          user: user[11],
          text: 'Do you have more recommendation?',
          },
        {
          user: user[12],
          text: 'Wonderful, I went there as well',
          }
      ]
    }
  ])
})
