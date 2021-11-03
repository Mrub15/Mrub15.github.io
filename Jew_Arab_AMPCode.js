define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'שמות ערביים',  //Will be used in the user feedback 
				nameForLogging : 'שמות ערביים', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'אמל'}, 
					{word : 'ג'מילה'}, 
					{word : 'מוניה'}, 
					{word : 'נסרין'}, 
					{word : 'רנא'}]

			}, 
			{
				nameForFeedback : 'שמות יהודיים',  //Will be used in the user feedback 
				nameForLogging : 'שמות יהודיים', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'יעל'}, 
					{word : 'ליאור'}, 
					{word : 'נועה'}, 
					{word : 'ניצן'}, 
					{word : 'שירה'}]
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