import express from 'express'
const app = express()
const port = 3000

import exphbs from 'express-handlebars'
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' })) 
app.set('view engine', 'handlebars')

app.use(express.static('public'))



app.get('/', (req, res) => {
  // res.send('Tis is my Express Web App test')
  res.render('index')
})
// app.get('/:content_id', (req, res) => {
//   const dataList = [
//     {
//       id: "home",
//       content: "Home"
//     },
//     {
//       id:"about",
//       content: "About"
//     },
//     {
//       id: "portfolio",
//       content: "Portfolio"
//     },
//     {
//       id: "contact",
//       content: "Contact"
//     },
//   ]
//   const data = dataList.find((data) => data.id === req.params.content_id)
//   res.render('show', {content: data})
// })

app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})
app.get('/contact', (req, res) => {
  res.render('contact')
})




app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})