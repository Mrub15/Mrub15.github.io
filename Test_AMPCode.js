define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'שמות ערביים',  //Will be used in the user feedback 
				nameForLogging : 'שמות ערביים', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'name1'}, 
					{word : 'name2'}, 
					{word : 'name3'}, 
					{word : 'name4'}, 
					{word : 'name5'}]

			}, 
			{
				nameForFeedback : 'שמות יהודיים',  //Will be used in the user feedback 
				nameForLogging : 'שמות יהודיים', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'name11'}, 
					{word : 'name12'}, 
					{word : 'name13'}, 
					{word : 'name14'}, 
					{word : 'name15'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		}
	});
});