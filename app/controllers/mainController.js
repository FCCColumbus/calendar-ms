import axios from 'axios'

export const getHomepage = (req, res) => {
  res.render('index', { title: 'FreeCodeCamp Columbus' })
}

const handleCalendarData = (data) => {
  const newData = data.map((event) => {
    const date = new Date(event.start.utc)
    const eventDate = `${date.getMonth() + 1} / ${date.getDate()}`

    return {
      date: eventDate,
      title: event.name.text,
      logo: {
        src: event.logo.url,
        alt: `${eventDate} - ${event.name.text}`,
      },
      id: event.id,
      url: event.url,
    }
  })

  return newData
}

export const getCalendarData = async (req, res) => {
  const apiAddress = `https://www.eventbriteapi.com/v3/events/search/?user.id=209958981395&token=${process.env.EVENTBRITE_API_KEY}`
  const data = await axios.get(apiAddress)
    .then((calendarData) => handleCalendarData(calendarData.data.events))
    .catch(() => [])

  res.json(data)
}
