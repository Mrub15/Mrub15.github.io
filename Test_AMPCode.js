define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'שמות ערביים',  //Will be used in the user feedback 
				nameForLogging : 'שמות ערביים', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'ArabName1.jpg'}, 
					{image : 'ArabName2.jpg'}, 
					{image : 'ArabName3.jpg'}, 
					{image : 'ArabName4.jpg'}, 
					{image : 'ArabName5.jpg'}]

			}, 
			{
				nameForFeedback : 'שמות יהודיים',  //Will be used in the user feedback 
				nameForLogging : 'שמות יהודיים', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'JewishName1.jpg'}, 
					{image : 'JewishName2.jpg'}, 
					{image : 'JewishName3.jpg'}, 
					{image : 'JewishName4.jpg'}, 
					{image : 'JewishName5.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
			image : 'https://mrub15.github.io/AMP/Stimuli'
		}
	});
});