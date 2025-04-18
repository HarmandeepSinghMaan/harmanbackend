require('dotenv').config()
const express = require('express')
const app = express()

const githubData=

  {
    "login": "HarmandeepSinghMaan",
    "id": 189103274,
    "node_id": "U_kgDOC0V8qg",
    "avatar_url": "https://avatars.githubusercontent.com/u/189103274?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/HarmandeepSinghMaan",
    "html_url": "https://github.com/HarmandeepSinghMaan",
    "followers_url": "https://api.github.com/users/HarmandeepSinghMaan/followers",
    "following_url": "https://api.github.com/users/HarmandeepSinghMaan/following{/other_user}",
    "gists_url": "https://api.github.com/users/HarmandeepSinghMaan/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/HarmandeepSinghMaan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/HarmandeepSinghMaan/subscriptions",
    "organizations_url": "https://api.github.com/users/HarmandeepSinghMaan/orgs",
    "repos_url": "https://api.github.com/users/HarmandeepSinghMaan/repos",
    "events_url": "https://api.github.com/users/HarmandeepSinghMaan/events{/privacy}",
    "received_events_url": "https://api.github.com/users/HarmandeepSinghMaan/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-11-20T09:48:22Z",
    "updated_at": "2025-04-17T18:20:35Z"
  
}
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Harman Man World!')
})
app.get('/login',(req,res)=>
{
  res.send('<h1> pleas login at harman web</h1>')
})

app.get('/youtube',(req,res)=>
  {
    res.send("<h3>restart app</h3>")
  })

app.get('/github',(req,res)=>
{
  res.json(githubData)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})