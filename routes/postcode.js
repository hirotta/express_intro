var express = require('express');
var router  = express.Router();
const axios = require('axios');

const {body, validationResult} = require('express-validator');

router.get("/", async(req, res)=>{
	res.render("postcode_form", {title:"住所検索"});
})


router.post("/", async(req, res)=>{
	const url =	'https://postcode.teraren.com/postcodes/' + req.body.postcode + '.txt';
	axios.get(url)
		.then(function(response){
			res.render("postcode_form", {address:response.data});
			console.log(response);
		})
		.catch(function(error){
			console.log(error);
		});
})

module.exports = router;