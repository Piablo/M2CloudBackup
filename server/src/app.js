console.log('Starting server...')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    var Sequelize = require('sequelize');
    var connection = new Sequelize('m2w_resource_calculator', 'root', '', {
        dialect: 'mysql'
    })
    var Article = connection.define('servernames', {
        idServerNames: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        serverName: {
            type: Sequelize.STRING
        }
    },{
        timestamps: false
    });
    connection.sync().then(function () {
        Article.findAll().then(function(article){
            console.log(article)
        res.send(article)
        })
    })
})

app.listen(8081)
