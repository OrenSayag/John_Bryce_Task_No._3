const express = require('express')
const app = express()
const cors = require('cors')
const {myQuery} = require('./DB/config')


app.use(express.json())
app.use(cors())



app.get('/api/servers', async (req, res) => {
    try {
        const allServers = await myQuery(`
        SELECT servers.*, companies.name AS company_name FROM servers
        INNER JOIN companies ON servers.hosting_company = companies.id
        `)

        const allCompanies = await myQuery(`
        SELECT * FROM companies
        `)

        return res.status(200).send({allServers, allCompanies})
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

app.post('/api/server/status', async (req, res) => {
    const { active, id } = req.body
    console.log("active: " ,active)
    console.log("id: " ,id)
    try {
        await myQuery(`
            UPDATE servers
            SET active = ${!active}
            WHERE id=${id};
        `)
        return res.sendStatus(200)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
})

app.listen(666, (err)=>{
    if(err){console.log(err)}
    console.log('Server is running on 666')
})