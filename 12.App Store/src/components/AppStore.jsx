import AppItem from './AppItem'

const appsData = [
  // Social Apps (9)
  { id: 1, name: 'Facebook', category: 'Social', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png' },
  { id: 2, name: 'Messenger', category: 'Social', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png' },
  { id: 3, name: 'WhatsApp', category: 'Social', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png' },
  { id: 4, name: 'Instagram', category: 'Social', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png' },
  { id: 5, name: 'Snapchat', category: 'Social', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png' },
  { id: 6, name: 'Telegram', category: 'Social', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png' },
  { id: 7, name: 'Twitter', category: 'Social', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png' },
  { id: 8, name: 'Linkedin', category: 'Social', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png' },
  { id: 9, name: 'WeChat', category: 'Social', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png' },

  // Games (9)
  { id: 10, name: 'Subway Surfers', category: 'Games', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png' },
  { id: 11, name: 'Crossy Road', category: 'Games', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png' },
  { id: 12, name: 'Super Chef', category: 'Games', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png' },
  { id: 13, name: 'Angry Birds', category: 'Games', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png' },
  { id: 14, name: 'Hill Climb 2', category: 'Games', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png' },
  { id: 15, name: 'Temple Run', category: 'Games', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png' },
  { id: 16, name: 'Smurfs Bubble', category: 'Games', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png' },
  { id: 17, name: 'Grade Learning', category: 'Games', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png' },
  { id: 18, name: 'My Talking Tom', category: 'Games', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png' },

  // News (9)
  { id: 19, name: 'Inshorts', category: 'News', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png' },
  { id: 20, name: 'Way2News', category: 'News', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png' },
  { id: 21, name: 'Google News', category: 'News', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png' },
  { id: 22, name: 'Flip Board', category: 'News', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png' },
  { id: 23, name: 'Smart News', category: 'News', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png' },
  { id: 24, name: 'BBC News', category: 'News', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png' },
  { id: 25, name: 'CNN News', category: 'News', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png' },
  { id: 26, name: 'AP News', category: 'News', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png' },
  { id: 27, name: 'Daily Wire', category: 'News', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png' },

  // Food (9)
  { id: 28, name: 'Zomato', category: 'Food', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png' },
  { id: 29, name: 'Swiggy', category: 'Food', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png' },
  { id: 30, name: 'All in One', category: 'Food', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png' },
  { id: 31, name: 'Domino\'s', category: 'Food', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png' },
  { id: 32, name: 'Instacart', category: 'Food', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png' },
  { id: 33, name: 'Saucey', category: 'Food', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png' },
  { id: 34, name: 'Grubhub', category: 'Food', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png' },
  { id: 35, name: 'Mercato', category: 'Food', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png' },
  { id: 36, name: 'DOT', category: 'Food', logo: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png' },
]

const AppStore = ({ category, searchInput }) => {
  const filteredApps = appsData.filter(
    app =>
      app.category === category &&
      app.name.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {filteredApps.map(app => (
        <AppItem key={app.id} appDetails={app} />
      ))}
    </ul>
  )
}

export default AppStore
