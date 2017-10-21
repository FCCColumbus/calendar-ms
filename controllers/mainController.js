export const getHomepage = (req, res) => {
  res.render('index', { title: 'Homepage' })
}

export const getCalendarData = (req, res) => {
  const data = {
    type: 'calendar',
    data: [],
  }

  res.json(data)
}
