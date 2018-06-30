//a array element with some keys and values
var jsonData = [{
    "firstName": "manjeet",
    "title": "સેલવાસઃ પેટ્રોલ પંપ પર લૂંટારૂઓનો હથિયારો સાથે હુમલો, એકનું મોત",
    "image": "https://i5.dainikbhaskar.com/thumbnails/321x278/web2images/www.divyabhaskar.co.in/2018/06/30/2-20_1530385003.jpg",
    "image_size": "319x191",
    "story_id": "122203121",
    "cat_id": "2272",
    "channel_slno": "960",
    "slug_intro": "લૂંટારૂઓને શોધવા માટે પોલીસે નાકાબંધી કરી શરૂ કરી તેજ તપાસ",
    "pubdate": "2018-07-01 00:27:00",
    "videoflag": 0,
    "version": "4",
    "bigimage": 2,
    "infog": "0",
    "images": [],
    "keywords": "Selvassa Petrol PumP Two Bike Rider Attack With Sharp Weapon One Death",
    "related_video": {},
    "exclusive": ""
  },
  {
    "firstName": "manjeet1",
    "title": "વધુ એક નિર્દોષ સાથે મારઝૂડ, બાળકો ઉપાડી જનાર સમજી ટોળાએ યુવાનને માર્યો",
    "image": "https://i1.dainikbhaskar.com/thumbnails/321x278/web2images/www.divyabhaskar.co.in/2018/06/30/face_book_30-06-2018_120094.jpg",
    "image_size": "319x191",
    "story_id": "122203244",
    "cat_id": "1044",
    "channel_slno": "960",
    "slug_intro": "રાજકોટના ગોંડલમાં બાળકો ઉપાડી જવાંના આરોપસર એક વ્યક્તિને ઢોર માર મારવાનો બનાવ સામે આવ્યો છે",
    "pubdate": "2018-07-01 00:20:00",
    "videoflag": 1,
    "version": "6",
    "bigimage": 2,
    "infog": "0",
    "images": [],
    "keywords": "Gondal, A more innocent person is beaten up, a crowd of children who take away children",
    "related_video": {},
    "exclusive": ""
  },
  {
    "firstName": "manjeet2",
    "title": "અમૂલનું ટર્નઓવર 6256 કરોડ, દૂધ ઉત્પાદકોને આપ્યું 230 કરોડનું બોનસ",
    "image": "https://i6.dainikbhaskar.com/thumbnails/321x278/web2images/www.divyabhaskar.co.in/2018/06/30/1-40_1530384456.jpg",
    "image_size": "319x191",
    "story_id": "122203375",
    "cat_id": "2258",
    "channel_slno": "960",
    "slug_intro": "સૌ પ્રથમવાર રૂ.6256 કરોડનું ટર્નઓવર, 72મી વાર્ષિક સાધારણ સભામાં 1200 દૂધ મંડળીના ત્રણ હજાર સભાસદો હાજર",
    "pubdate": "2018-07-01 00:17:00",
    "videoflag": 0,
    "version": "2",
    "bigimage": 2,
    "infog": "0",
    "images": [],
    "keywords": "Amuls turnover 6256 crore, Rs 230 crore bonus given to milk producers",
    "related_video": {},
    "exclusive": ""
  },
  {
    "firstName": "manjeet3",
    "title": "લોકશાહીનું ચીરહરણઃ વ્યારામાં માજી મહિલા પ્રમુખ પર મહિલા સભ્યોનો હુમલો",
    "image": "https://i2.dainikbhaskar.com/thumbnails/321x278/web2images/www.divyabhaskar.co.in/2018/06/30/1-20_1530384192.jpg",
    "image_size": "319x191",
    "story_id": "122203380",
    "cat_id": "1043",
    "channel_slno": "960",
    "slug_intro": "વિપક્ષના વિરોધ વચ્ચે પાલિકાની 19 જેટલી સમિતિ માટે અધ્યક્ષ અને તેના સભ્યોની વરણી કરાઈ",
    "pubdate": "2018-07-01 00:13:00",
    "videoflag": 0,
    "version": "4",
    "bigimage": 2,
    "infog": "0",
    "images": [],
    "keywords": "The attack of 4 former women s councilors in Vyara Vice President",
    "related_video": {},
    "exclusive": ""
  },
];

jsonData.forEach(({
  story_id,
  pubdate
}) => console.log('Printing Story id: ', story_id, ' Pubdate : ', pubdate));


//its exporting the 3 index array element from the jsonData and assigning it to the thirdStory
var [, , , thirdStory] = jsonData;

//console.log(thirdStory);

function logTitleFromStory({
  firstName,
  title
}) {
  console.log(firstName, title);
}

logTitleFromStory(thirdStory);