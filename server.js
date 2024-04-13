import userRouter from './routes/user.js'
import movieRouter from './routes/movies.js'
import app from './app.js'

app.use("/users",userRouter);
app.use("/movies",movieRouter);

app.get('/', (req,res)=>{
    res.send("<h1>Nice Working</h1>")
});
