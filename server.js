
var express = require('express');
var app = express();
const request = require('request');
const router = express.Router()
const bodyParser = require('body-parser');
const sanitizer = require('sanitizer');

// Import in the sql libraries
const { sql,poolPromise } = require('./DB/dbPool');
const { response } = require('express');
const { nextTick } = require('process');

//const routes = require( "./routes" );

// Set up the server
// process.env.PORT is related to deploying on AWS
var server = app.listen(process.env.PORT || 5000, listen);
module.exports = server;
path = require('path');

//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Inject your routes in here

//intro screen
app.get('/index', async(req, res) => {
  try{
    res.render('public/index.html');
  }
  catch(err) {
    res.send(500);
    res.send(err.message);
  }
})

app.post('/mainPage', async(req, res) => {
  try {
    const safeSearch = sanitizer.sanitize(req.body.txtSearch);
    const pool = await poolPromise;
    const result = await pool.request()
      .input('inputParam', sql.VarChar, '%' + safeSearch + '%')
      .query('EXEC GetMovieByTitle @inputParam;');
    res.render('public/mainPage.ejs', {search: true, movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
});

//main page with all movies
app.get('/mainPage', async(req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieInfo');
    res.render('public/mainPage.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
  //routes for each genre
}).get('/action', async(req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieByGenre 6;');
    res.render('public/mainPage.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/adventure', async(req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieByGenre 7;');
    res.render('public/mainPage.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/crime', async(req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieByGenre 9;');
    res.render('public/mainPage.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/drama', async(req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieByGenre 5;');
    res.render('public/mainPage.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/sciencefiction', async(req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieByGenre 1;');
    res.render('public/mainPage.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
  //routes for individual movie details
}).get('/7', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 7;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/8', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 8;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/9', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 9;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/10', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 10;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/11', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 11;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/12', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 12;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/13', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 13;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/14', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 14;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/15', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 15;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/16', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 16;');
    res.render('public/movieDetail.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
  //routes for each movies media/video
}).get('/moviePlay7', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 7;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/moviePlay8', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 8;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/moviePlay9', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 9;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/moviePlay10', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 10;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/moviePlay11', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 11;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/moviePlay12', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 12;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/moviePlay13', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 13;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/moviePlay14', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 14;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/moviePlay15', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 15;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
}).get('/moviePlay16', async(req, res) => {
  try{
    const pool = await poolPromise;
    const result = await pool.request()
      .query('EXEC GetMovieById 16;');
    res.render('public/moviePlay.ejs', {movies: result.recordset});
  }
  catch(err) {
    res.send(500);
    res.send(err.message); 
  }
  //post for seach functionality
})
// End routes

// Set the folder for public items
publicDir = path.join(__dirname,'public');
app.use(express.static(publicDir));
app.set('views', __dirname);
app.use(express.urlencoded({ extended: true }));

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://' + host + ':' + port);
}
