const express = require('express');
const mongoose = require('mongoose');
  const app = express();
const bodyParser = require('body-parser');
const DB ="mongodb+srv://harendra5464:12jan2011@A@cluster0.fcfljwj.mongodb.net/motor?retryWrites=true&w=majority"
mongoose.connect('mongodb+srv://harendra5464:ARBzxfNDlam114MK@cluster0.fcfljwj.mongodb.net/motor?retryWrites=true&w=majority',{
   useNewUrlParser: true,
          useUnifiedTopology: true,
})



// ikF20TdorR4gkJhe
// mongoose.connect(DB,{
//    useCreateIndex: true, 
//    useFindAndModify: false, 
//    useNewUrlParser: true, 
//    useUnifiedTopology: true 
// })
.then(()=>console.log("Connection Successfull"))
.catch((err)=>console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.get('/', async (req, res) => {
//   try {
//     // Fetch data from MongoDB
//     const data = await YourModel.find();

//     // Render the HTML page and pass the data to it
//     res.sendFile(__dirname + '/index.hbs',{data});
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });



app.set('view engine','ejs')
app.get("/",async(req,res)=>{
   const data = await YourModel.find();
   
   res.render('index',{data},console.log(data.isMotorOn))
  
})
// app.get('/', (req, res) =>
// {
//   try {
//     // Fetch data from MongoDB
//     //const data = await YourModel.find();
//     const data = await YourModel.find();
//     res.sendFile(__dirname + '/index.html',{});
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

//app.use(express.static('public'));
app.use(express.json());

// const playlistSchema= new mongoose.Schema({ name : {
//    type: String,
//    required: true,
//    },
//    ctype: String,
//    videos: Number,
//    author: String,
//    isMotorOn: Boolean,
//    date: {
//    type: Date,
//    default: Date.now
//          }
//     });


// For Motor

const playlistSchema= new mongoose.Schema({ 
   isMotorOn: Boolean,
    });

    const Playlist = new mongoose.model("Playlist",playlistSchema);

   //  const reactPlaylist = new Playlist({
   //    name:"react",
   //    ctype:"Frontend",
   //    videos:80,
   //    author:"thapa",
   //    active:true,
   //  })

   //  const reactPlaylist = new Playlist({
   //    isMotorOn:false,
   //  })

   //  reactPlaylist.save();


   

    const YourModel = mongoose.model('motor', new mongoose.Schema({

  isMotorOn: Boolean,
  // Example: { name: String, age: Number }

}), 'playlists');



//

//


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});
    

app.post('/runFunction', (req, res) => {
   // Your Node.js function logic goes here
   const result = runYourFunction(); // Replace with your actual function

   // Send a response back to the client
   res.json({ result });
});

app.post('/runFunction2', (req, res) => {
  
  // Your Node.js function logic goes here
  const result = runYourFunction2(); // Replace with your actual function

  // Send a response back to the client
  res.json({ result });
});

function runYourFunction() {
  
   // Replace this with your actual function logic
   const updateDocument= async(_id)=>{
    
      try{
         const result = await Playlist.updateOne({_id},{
           
            $set:{
               isMotorOn:true
            }
         });
         console.log(result);

      }catch(err){
         console.log(err);
      }
      

    }

    updateDocument("654de9edd47767a2a0b3c4cd")
}

function runYourFunction2() {
  // Replace this with your actual function logic
  const updateDocument= async(_id)=>{
     try{
        const result = await Playlist.updateOne({_id},{
          
           $set:{
              isMotorOn:false
           }
        });
        console.log(result);

     }catch(err){
        console.log(err);
     }
     

   }

   updateDocument("654de9edd47767a2a0b3c4cd")
   
}


