const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Wow, ok time, from my second node server');
})

const users = [
    {id:0, name:'Shabana', email: 'shabana@gmail.com', phone: '0184357845'},
    {id:1, name:'Kabila', email: 'kabila@gmail.com', phone: '01843576645'},
    {id:2, name:'Habila', email: 'habila@gmail.com', phone: '01843522245'},
    {id:3, name:'Nabila', email: 'nabila@gmail.com', phone: '01843574445'},
    {id:4, name:'Jabila', email: 'jabila@gmail.com', phone: '01843534245'},
    {id:5, name:'Dabila', email: 'dabila@gmail.com', phone: '01844343445'}
]
app.get('/users', (req, res) =>{
    const search = req.query.search;

    // use Search query!
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    console.log(search);
});

// App.Method!
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})

// dynamic api!
app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'orange', 'banana'])
})

app.listen(port, ()=>{
    console.log('Listening to port', port);
})

