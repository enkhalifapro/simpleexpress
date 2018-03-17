const beforeIndex = (req, res, next) => {
    console.log("in middleware")
    next()
}

const index = (req, res) => {
    console.log(req.params.name)
    res.status(201).json({ "msg": `your param is ${req.params.name }` })
}

const indexHtml = (req, res) => {
    console.log("in html ")
    res.render('home', { layout: false, name: "ahmedss" })
}

const indexLayout = (req, res) => {
    console.log("in html")
    res.render('page', { pageName: "imbaba" })
}

module.exports = {
    beforeIndex,
    indexLayout,
    index,
    indexHtml
}