import router from './routes/user.js'
import app from './app.js'

app.use("/users",router);

app.get('/', (req,res)=>{
    res.send("<h1>Nice Working</h1>")
});
