const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')

// require the models
const User = require('../models/user')
const Chat = require('../models/chat')
const Gem = require('../models/gem')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) console.log(err)
  db.dropDatabase()
    .then(() => {
      return User.create([
        {
          username: 'elenamüller',
          email: 'elenamüller@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'https://i.imgur.com/1SJppe5.jpg',
          lang: 'de',
          text: 'I love the Bavarian Alps',
          userType: 'Local'
        },
        {
          username: 'tomschmidt',
          email: 'tomschmidt@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQJudV2y_lrWNhKnxKn9gEybojsOvqUPmM_v4uYKEVRJsoBSi',
          lang: 'de',
          text: 'Local DJ hit me up.',
          userType: 'Local'
        },
        {
          username: 'timschneider',
          email: 'timschneider@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'https://www.thestar.com/content/dam/thestar/news/gta/2017/03/31/dutch-teen-ends-up-in-the-wrong-sydney/ci-sydney31.jpg',
          lang: 'de',
          text: 'Reall awesome guy. Everyone loves me.',
          userType: 'Local'
        },
        {
          username: 'alicefischer',
          email: 'alicefischer@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'https://cdn.evoke.ie/wp-content/uploads/2018/03/16140234/german-2222.jpg',
          lang: 'de',
          text: 'I know the food and shops.',
          userType: 'Local'
        },
        {
          username: 'randyweber',
          email: 'randyweber@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'http://www.kickassindiejams.com/wp-content/uploads/2019/01/Banner-853x1024.jpg',
          lang: 'de',
          text: 'Michelin starred chef',
          userType: 'Local'
        },
        {
          username: 'tommyhilfigure',
          email: 'tommyhilfigure@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'http://www.thailovelines.com/skins/blue/images/meet-english-man.jpg',
          lang: 'en',
          text: 'Hi I am Tommy I love to wear Tommy Hilfiger.',
          userType: 'Tourist'
        },
        {
          username: 'tomdavis',
          email: 'tomdavis@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'https://i.pinimg.com/236x/56/dd/30/56dd3062dc720dc6a149e4ea4767827e--nowhere-boy-english-men.jpg',
          lang: 'en',
          text: 'I like football',
          userType: 'Tourist'
        },
        {
          username: 'elizabeththompson',
          email: 'elizabeththompson@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'https://i.cbc.ca/1.3912105.1484693236!/fileImage/httpImage/image.jpg_gen/derivatives/square_620/elizabeth-thompson.jpg',
          lang: 'en',
          text: 'English teacher in the area.',
          userType: 'Tourist'
        },
        {
          username: 'peterengland',
          email: 'peterengland@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'https://talksport.com/wp-content/uploads/sites/5/2016/10/jurgen_klopp.jpg?strip=all&w=620&h=413&crop=1',
          lang: 'en',
          text: 'I love Germany',
          userType: 'Tourist'
        },
        {
          username: 'davidjones',
          email: 'davidjones@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2015/08/how-can-i-improve-my-english-speaking-power.jpg',
          lang: 'en',
          text: 'I love travelling.',
          userType: 'Tourist'
        },
        {
          username: 'jeremysmith',
          email: 'jeremysmith@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_840,q_auto:eco,w_1200/https://inews.co.uk/wp-content/uploads/2019/07/1153120184.jpg',
          lang: 'en',
          text: 'i love currywurst and the christmas market.',
          userType: 'Tourist'
        },
        {
          username: 'jeremyscott',
          email: 'jeremyscott@email',
          password: 'pass',
          passwordConfirmation: 'pass',
          image: 'http://i.dailymail.co.uk/i/pix/2015/09/21/00/2C8E4CC600000578-3242021-image-m-56_1442792822099.jpg',
          lang: 'en',
          text: 'Excited for my future travels',
          userType: 'Tourist'
        }
      ])
    })

    .then(users => {
      console.log(`${users.length} users created`)
      return Promise.all([
        Gem.create([
          {
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Berlin_Brandenburger_Tor_Abend.jpg',
            caption: 'The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II after the (temporarily) successful restoration of order during the early Batavian Revolution. One of the best-known landmarks of Germany, it was built on the site of a former city gate that marked the start of the road from Berlin to the town of Brandenburg an der Havel, which used to be capital of the Margraviate of Brandenburg.',
            name: 'Brandenburg Gate',
            user: users[8],
            category: 'Historic',
            likes: [
              {
                user: users[9]
              },
              {
                user: users[10]
              },
              {
                user: users[11]
              },
              {
                user: users[7]
              }
            ],
            comments: [
              {
                user: users[10],
                text: 'Awesome!'
              },
              {
                user: users[9],
                text: 'Beautiful :)'
              }
            ]
          },
          {
            image: 'https://media2.trover.com/T/5991f0e68cdc48c941017e07/fixedw_large_4x.jpg',
            caption: 'Cologne Cathedral is a Catholic cathedral in Cologne, North Rhine-Westphalia, Germany. It is the seat of the Archbishop of Cologne and of the administration of the Archdiocese of Cologne. It is a renowned monument of German Catholicism and Gothic architecture and was declared a World Heritage Site in 1996. It is Germany\'s most visited landmark, attracting an average of 20,000 people a day, and currently the tallest twin-spired church at 157 m (515 ft) tall, second in Europe after the Ulm Cathedral and third in the world.',
            name: 'Cologne Cathedral',
            user: users[0],
            category: 'Historic',
            likes: [
              {
                user: users[10]
              },
              {
                user: users[9]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'Looks wonderful.'
              },
              {
                user: users[7],
                text: 'It is beautiful!'
              }
            ]
          },
          {
            image: 'https://www.agoda.com/wp-content/uploads/2019/02/International-Womens-Day-2019-Germany-The-Berlin-Wall.jpg',
            caption: 'The Berlin Wall was a guarded concrete barrier that physically and ideologically divided Berlin from 1961 to 1989. Constructed by the German Democratic Republic (GDR, East Germany), starting on 13 August 1961, the Wall cut off (by land) West Berlin from surrounding East Germany, including East Berlin, until East German officials ordered it opened in November 1989. Its demolition officially began on 13 June 1990 and finished in 1992. The barrier included guard towers placed along large concrete walls, accompanied by a wide area (later known as the "death strip") that contained anti-vehicle trenches, "fakir beds" and other defenses. The Eastern Bloc portrayed the Wall as protecting its population from fascist elements conspiring to prevent the "will of the people" in building a socialist state in East Germany.',
            name: 'Berlin Wall',
            user: users[1],
            category: 'Historic',
            likes: [
              {
                user: users[10]
              },
              {
                user: users[9]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'Great stuff.'
              },
              {
                user: users[7],
                text: 'Can not wait to go!'
              }
            ]
          },
          {
            image: 'https://d5xydlzdo08s0.cloudfront.net/media/celebrities/12265/products/300x300_m502_lawenbrau_stammtisch_image_2__L.jpg',
            caption: 'Oktoberfest is the world\'s largest Volksfest (beer festival and travelling funfair). Held annually in Munich, Bavaria, Germany, it is a 16- to 18-day folk festival running from mid or late September to the first weekend in October, with more than six million people from around the world attending the event every year. Locally, it is often called the Wiesn, after the colloquial name for the fairgrounds, Theresa\'s meadows (Theresienwiese). The Oktoberfest is an important part of Bavarian culture, having been held since the year 1810. Other cities across the world also hold Oktoberfest celebrations that are modeled after the original Munich event.',
            name: 'Oktoberfest, Munich',
            user: users[1],
            category: 'Culture',
            likes: [
              {
                user: users[10]
              },
              {
                user: users[9]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'Very cool!'
              },
              {
                user: users[4],
                text: 'Awesome!'
              }
            ]
          },
          {
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Schwerin_Castle_Aerial_View_Island_Luftbild_Schweriner_Schloss_Insel_See_%28cropped%29.jpg',
            caption: 'The Schwerin Palace, is a palatial schloss located in the city of Schwerin, the capital of Mecklenburg-Vorpommern state, Germany. It is situated on an island in the city\'s main lake, the Lake Schwerin. For centuries the palace was the home of the dukes and grand dukes of Mecklenburg and later Mecklenburg-Schwerin.',
            name: 'Schwerin Castle',
            user: users[9],
            category: 'Historic',
            likes: [
              {
                user: users[11]
              },
              {
                user: users[7]
              },
              {
                user: users[10]
              },
              {
                user: users[8]
              }
            ],
            comments: []
          },
          {
            image: 'http://fotostrasse.com/wp-content/uploads/2014/07/Checkpoint-Charlie-Why-you-shouldnt-visit-it.jpg',
            caption: 'Checkpoint Charlie was the name given by the Western Allies to the best-known Berlin Wall crossing point between East Berlin and West Berlin during the Cold War.',
            name: 'Checkpoint Charlie',
            user: users[10],
            category: 'Historic',
            likes: [
              {
                user: users[9]
              },
              {
                user: users[11]
              },
              {
                user: users[8]
              },
              {
                user: users[7]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'WOW!'
              }
            ]
          },
          {
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/f6/b1/a9/rheinfels-castle.jpg',
            caption: 'Rheinfels Castle is a castle ruin located above the left bank of the Rhine in Sankt Goar, Germany. It was started in 1245 by Count Diether V of Katzenelnbogen. After expansions, it was the largest fortress in the Middle Rhein Valley between Koblenz and Mainz.',
            name: 'Rheinfels Castle',
            user: users[6],
            category: 'Historic',
            likes: [
              {
                user: users[7]
              },
              {
                user: users[8]
              },
              {
                user: users[9]
              }
            ],
            comments: [
              {
                user: users[10],
                text: 'Send more reccomendations, loved this.'
              },
              {
                user: users[11],
                text: 'Love your photo.'
              },
              {
                user: users[8],
                text: 'Looks like fun, excited to go there.'
              }
            ]
          },
          {
            image: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/06/rock_am_ring.jpg',
            caption: 'Combined, these twin rock festivals draw some of the biggest crowds in the world. The allure is no secret, the festivals offer nothing short of legendary rock acts and seriously revved up fans who eat, sleep and breath rock and roll. ',
            name: 'Rock am Ring/ Rock im Park',
            user: users[2],
            category: 'Culture',
            likes: [],
            comments: [
              {
                user: users[7],
                text: 'Nice picture.'
              }
            ]
          },
          {
            image: 'http://4.bp.blogspot.com/-cgZAKP1YJfc/UIy_ADSOQII/AAAAAAAAJ5w/qD1iLxcNnhc/s1600/Bavarian+Forest+National+Park+Germany+13.jpg',
            caption: 'The Bavarian Forest National Park is a national park in the Eastern Bavarian Forest immediately on Germany\'s border with the Czech Republic. It was founded on 7 October 1970 as the first national park in Germany. Since its expansion on 1 August 1997 it has covered an area of 24,250 hectares.',
            name: 'Bavarian Forest National Park',
            user: users[8],
            category: 'Nature',
            likes: [
              {
                user: users[10]
              },
              {
                user: users[11]
              }
            ],
            comments: [
              {
                user: users[10],
                text: 'Love it.'
              },
              {
                user: users[11],
                text: 'Beautiful!'
              },
              {
                user: users[9],
                text: 'Nice!'
              }
            ]
          },
          {
            image: 'https://www.nationalpark-harz.de/__thumbs__/5935_13_Rabenklippe_LehmannMirko.jpg?m=1476279524',
            caption: 'Harz National Park is a forested reserve in the Harz mountains of north-central Germany, spanning the states of Lower Saxony and Saxony-Anhalt. Themed trails wind through the park’s beech and spruce woods, including the Bark Beetle Trail and the Dandelion Trail. Park wildlife includes deer, wild boar, woodpeckers and lynxes. A narrow-gauge steam train climbs up Mt. Brocken, with a botanical garden at its peak.',
            name: 'Harz National Park',
            user: users[10],
            category: 'Nature',
            likes: [
              {
                user: users[11]
              },
              {
                user: users[7]
              }
            ],
            comments: [
              {
                user: users[11],
                text: 'Nice!'
              },
              {
                user: users[6],
                text: 'Where is this?'
              },
              {
                user: users[8],
                text: 'Cute picture, I love it!'
              }
            ]
          },
          {
            image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/07/0f/09/d5.jpg',
            caption: 'The Speicherstadt in Hamburg, Germany is the largest warehouse district in the world where the buildings stand on timber-pile foundations, oak logs, in this particular case. It is located in the port of Hamburg—within the HafenCity quarter—and was built from 1883 to 1927.',
            name: 'Hamburg Speicherstadt',
            user: users[1],
            category: 'Historic',
            likes: [
              {
                user: users[10]
              },
              {
                user: users[8]
              },
              {
                user: users[9]
              }
            ],
            comments: [
              {
                user: users[10],
                text: 'Cannot wait to visit.'
              },
              {
                user: users[7],
                text: 'I hope to visit soon.'
              }
            ]
          },
          {
            image: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/01/curry-wurst-pieces-of-curried-sausage-served-with-chips-french-fries-on-disposable-paper-tray-on-a-wooden-table-as-background-1200x853.jpg',
            caption: 'Currywurst is a fast food dish of German origin consisting of steamed, then fried pork sausage typically cut into bite-sized chunks and seasoned with curry ketchup, a sauce based on spiced ketchup or tomato paste, itself topped with curry powder, or a ready-made ketchup seasoned with curry and other spices.',
            name: 'Currywurst',
            user: users[10],
            category: 'Food',
            likes: [
              {
                user: users[11]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'Very nice.'
              },
              {
                user: users[7],
                text: 'Tasty!'
              },
              {
                user: users[11],
                text: 'It is actually really tasty.'
              }
            ]
          },
          {
            image: 'http://brotzeit.com.au/joondalup/wp-content/uploads/2018/06/IMG_4892-1024x687.jpg',
            caption: 'Sauerbraten is a German pot roast that can be prepared with a variety of meats—most often beef, but also from venison, lamb, mutton, pork, and traditionally, horse. Before cooking, the cut of meat is marinated for several days in a mixture of vinegar or wine, water, herbs, spices, and seasonings.',
            name: 'Sauerbraten',
            user: users[5],
            category: 'Food',
            likes: [
              {
                user: users[11]
              },
              {
                user: users[3]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'Looks great!'
              },
              {
                user: users[7],
                text: 'Amazing.'
              },
              {
                user: users[11],
                text: 'Would definitely try again.'
              }
            ]
          },
          {
            image: 'https://www.fabfood4all.co.uk/wp-content/uploads/2018/06/R%C3%B8dgr%C3%B8d-med-fl%C3%B8de-64-lr2.jpg',
            caption: 'Rødgrød, Rote Grütze, or Rode Grütt, meaning "red groats", is a sweet fruit dish from Denmark and Northern Germany',
            name: 'Rødgrød',
            user: users[6],
            category: 'Food',
            likes: [
              {
                user: users[9]
              },
              {
                user: users[3]
              },{
                user: users[2]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'Looks great!'
              },
              {
                user: users[7],
                text: 'great stuff.'
              },
              {
                user: users[11],
                text: 'Oh wow.'
              }
            ]
          },
          {
            image: 'https://4.bp.blogspot.com/-VccIqYjxhvA/Vl5DAAMMDXI/AAAAAAAAK18/Og7wCDBCoYAqhxb46_jTqAUzm_fU7__WgCKgB/s1600/Germany%2BRhine%2BView%2Bof%2BRhine%2BValley%2Bfrom%2BMarksburg%2B2.JPG',
            caption: 'The Rhine is one of the major European rivers, which has its sources in Switzerland and flows in a mostly northerly direction through Germany and the Netherlands, emptying into the North Sea.',
            name: 'Rhine',
            user: users[6],
            category: 'Nature',
            likes: [
              {
                user: users[9]
              },
              {
                user: users[3]
              },{
                user: users[2]
              }
              ,{
                user: users[5]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'Nice view!'
              },
              {
                user: users[7],
                text: 'great picture!'
              },
              {
                user: users[11],
                text: 'Is this paradise?'
              }
            ]
          },
          {
            image: 'https://www.bucketlist127.com/uploads/images/ae89d723e44a793ca1ec711c20274952.jpg',
            caption: 'The Black Forest is a mountainous region in southwest Germany, bordering France. Known for its dense, evergreen forests and picturesque villages, it is often associated with the Brothers Grimm fairy tales. It\'s renowned for its spas and the cuckoo clocks produced in the region since the 1700s. The region’s largest town, Freiburg, is filled with Gothic buildings and surrounded by vineyards.',
            name: 'Black Forest',
            user: users[6],
            category: 'Nature',
            likes: [
              {
                user: users[6]
              },
              {
                user: users[4]
              },{
                user: users[2]
              }
              ,{
                user: users[5]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'Such a nice view.'
              },
              {
                user: users[7],
                text: 'I love the lush forest!'
              },
              {
                user: users[11],
                text: 'I loved it.'
              }
            ]
          },
          {
            image: 'https://www.tripsavvy.com/thmb/WGa9EzVAP1Dv7LRTS2UWD6x7fEo=/1600x1071/filters:no_upscale():max_bytes(150000):strip_icc()/3456_1600-56a3acf15f9b58b7d0d32115.jpg',
            caption: 'The Palmengarten is one of three botanical gardens in Frankfurt am Main, Germany. It is located in the Westend-Süd district. It covers a surface of 22 hectares. Like many public sites in Frankfurt, it was privately financed and implemented by the architect Heinrich Siesmayer.',
            name: 'Palmengarten Frankfurt',
            user: users[7],
            category: 'Culture',
            likes: [
              {
                user: users[10]
              },
              {
                user: users[11]
              },
              {
                user: users[8]
              }
            ],
            comments: [
              {
                user: users[6],
                text: 'I am very excited to visit!'
              },
              {
                user: users[8],
                text: 'Can\'t wait to go'
              }
            ]
          },
          {
            image: 'https://i0.gmx.at/image/932/33894932,pd=1,f=opengraph/gamescom-koeln-spiele-videospiele-youtube-programm.jpg',
            caption: 'Gamescom is a trade fair for video games held annually at the Koelnmesse in Cologne, North Rhine-Westphalia, Germany. Since 2018, it has been organised by game – Verband der deutschen Games-Branche; and before that, by the Bundesverband Interaktive Unterhaltungssoftware (BIU). Until 2008, it was held in Leipzig, Saxony, Germany. Gamescom is used by many video game developers to exhibit upcoming games and game-related hardware.',
            name: 'Gamescom',
            user: users[0],
            category: 'Culture',
            likes: [
              {
                user: users[11]
              },
              {
                user: users[9]
              },
              {
                user: users[8]
              },
              {
                user: users[7]
              }
            ],
            comments: [
              {
                user: users[11],
                text: 'Do you have more recommendation?'
              },
              {
                user: users[6],
                text: 'Wonderful, I went there as well!'
              }
            ]
          }
        ]),
        users
      ])
    })

    .then(data => {
      const [ gems, users ] = data
      console.log(`${gems.length} gems created`)
      return Chat.create([
        {
          title: 'locals',
          image: 'https://www.aspirantsg.com/wp-content/uploads/2018/03/Brotzeit-Wonder-Platter-AspirantSG.jpg',
          comments: [
            {
              text: 'Hi, I am planning to visit your beautiful town. Any suggestions for me where to stay?',
              user: users[5]
            },
            {
              text: 'No idea, sorry!',
              user: users[0]
            },
            {
              text: 'You can stay at our hostel, is very close to the Mitte. You are going to love it!',
              user: users[4]
            },
            {
              text: 'Thanks for the reply! What is the name of the hostel?',
              user: users[5]
            },
            {
              text: 'I think he was referring to the Backpacker Hostel. Check their reviews?',
              user: users[3]
            },
            {
              text: 'Oh Ok, thanks. Do you have a better suggestion? Travelling solo is never that easy.',
              user: users[5]
            },
            {
              text: 'I am renting my sofa at https://www.couchsurfing.com/ have a look! ',
              user: users[3]
            },
            {
              text: 'I have been to the Backpacker Hostel and it is a nice place!',
              user: users[8]
            },
            {
              text: 'Thank you all! I have made my decision.',
              user: users[5]
            },
            {
              text: 'I am curious now. What is your decision? Couch or hostel?',
              user: users[3]
            }
          ]
        },
        {
          title: 'travellers',
          image: 'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2019/05/Solo-Travel-in-Nature-acbfea52bfaf.jpg',
          comments: [
            {
              text: 'Hi guys, I am in Frankfurt toinght. Someone wants to go out for a drink?',
              user: users[8]
            },
            {
              text: 'I am in! 🎉🎉🎉 Have you been to the Jazz Club? Jazzkeller Frankfurt' ,
              user: users[2]
            },
            {
              text: 'Yeah! I have just arrived in Frankfurt from London, it would be nice to meet new people!',
              user: users[5]
            },
            {
              text: 'Fantastic! What about 7PM at the Jazzkeller Frankfurt entrance?',
              user: users[1]
            },
            {
              text: 'I will be wearing a funny red hat 😁! See you tonight!!!! ',
              user: users[5]
            },
            {
              text: 'Can i bring my gf?',
              user: users[6]
            },
            {
              text: 'The more the merrier!',
              user: users[1]
            },
            {
              text: 'Here is the link for the venue guys! http://www.jazzkeller.com/',
              user: users[2]
            },
            {
              text: 'See you shortly! 🎺🎺🎺',
              user: users[6]
            }
          ]
        }
      ])
    })
    .then(chats => {
      console.log(`${chats.length} chats created`)
    })
})
