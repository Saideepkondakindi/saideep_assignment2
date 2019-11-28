//Saideep Kondakindi 8579211
const Movielist= function(req,res){
    res.render('Movielist',{Movies: movieArray});
};
const about= function(req,res){
    res.render('aboutMovie',{About: aboutMovie});
};
const home= function(req,res){
    res.render('HomePage');
};



var movieArray=[
    {movie:"Bahubali",Director:"Rajamouli"},
    {movie:"Rangasthalam",Director:"Sukumar"},
    {movie:"Sarrainodu",Director:"Boyapati Srinu"},
    {movie:"Arjun Reddy",Director:"Sandeep Reddy Vanga"},
    {movie:"Aravinda Sametha Veera Raghava",Director:"Trivikram Srinivas"}
];

const aboutMovie = "Arjun Reddy";

module.exports ={
    Movielist,
    about,
    home
}