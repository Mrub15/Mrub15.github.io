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
				},
	exampleTargetStimulus : 
			{
				nameForLogging : 'exampleTarget', //Will be used in the logging
				sameAsTargets : true //Use the same media array as the first targetCat.
			},
			
			//The fixation stimulus 
			fixationStimulus : {
				css : {color:'#000000', 'font-size':'3em'}, 
				media : {word:'+'}
			}, 
			//The fixation stimulus in the example block
			exampleFixationStimulus : {
				css : {color:'000000', 'font-size':'3em'}, 
				media : {word:'+'}
			}, 
			//The mask stimulus in the example block
			exampleMaskStimulus : {
				css : {color:'000000', 'font-size':'3em'}, 
				media : {image:'ampmaskr.jpg'}
			}, 
			//The mask stimulus 
			maskStimulus : {
				css : {color:'000000', 'font-size':'3em'}, 
				media : {image:'ampmask.jpg'}
			}, 
			
			
			sortingLabel1 : 'Pleasant', //Response is coded as 0. 
			sortingLabel2 : 'Unpleasant',  //Response is coded as 1.
			randomizeLabelSides : false, //IF false, then label1 is on the left, and label2 is on the right.

			//The default font color of text in the task (e.g., for key labels).
			fontColor : '#000000', 

			rightKey : 'i', 
			leftKey : 'e', 
			
			base_url : {//Where are your images at?
				image : 'https://baranan.github.io/minno-tasks/images/ampImages'
			}, 

			trialsInBlock : [40, 40, 40], //Number of trials in each block 
			trialsInExample : 3, //Change to 0 if you don't want an example block
			
			//Duration parameters.
			fixationDuration : -1, //It means that by default we do not use fixation.
			primeDuration : 100, 
			postPrimeDuration : 100, //Duration of blank screen between prime and target.
			targetDuration : 100, //Duration of target presentation.
			showRatingDuration : 300, //In the 7-responses option, for how long to show the selected rating.
			ITI : 250, //Duration between trials.
			
			responses : 2, //Change to 7 for a 1-7 rating
	        // When using 7 response options, 
	        // we will Extremely unpleasant, Moderately unpleasant, Slightly unpleasant, neutral, Slightly pleasant, Moderately pleasant, Extremely pleasant.
		    targetCat : 'Chinese symbol', //The name of the targets (used in the instructions)
			
			//For the example block (often practice)
			exampleBlock_fixationDuration : -1, 
			exampleBlock_primeDuration : 100, 
			exampleBlock_postPrimeDuration : 100, 
			exampleBlock_targetDuration : 300, 
			
			//Instructions text for the 2-responses version.
			exampleBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Press the key <B>rightKey</B> if the targetCat is more rightAttribute than average. ' + 
			'Hit the <b>leftKey</b> key if it is more leftAttribute than average.<br/><br/>' + 
			'The items appear and disappear quickly.  ' + 
			'Remember to ignore the item that appears before the targetCat and evaluate only the targetCat.<br/><br/></p>'  + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'When you are ready to try a few practice responses, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 1 of nBlocks]</p></div>',
			firstBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			"See how fast it is? Don't worry if you miss some. " + 
			'Go with your gut feelings.<br/><br/>' + 
			'Concentrate on each targetCat and rate it as more rightAttribute than the average targetCat with the <b>rightKey</b> key, ' + 
			'or more leftAttribute than average with the <b>leftKey</b> key.<br/><br/>' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 2 of nBlocks]</p></div>',
			middleBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Continue to another round of this task. ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on the targetCat and rate it as more rightAttribute than average with the <b>rightKey</b> key, ' + 
			'or more leftAttribute than average with the <b>leftKey</b> key.<br/><br/>' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting. Go with your gut feelings.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',
			lastBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Ready for the FINAL round? ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on the targetCat and rate it as more rightAttribute than average with the <b>rightKey</b> key, ' + 
			'or more leftAttribute than average with the <b>leftKey</b> key.<br/><br/>' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting. Go with your gut feelings.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',


			//Instructions text for the 7-responses version.
			exampleBlockInst7: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Rate your feelings toward the targetCats from <i>Extremely negativeAdj</i> to <i>Extremely positiveAdj</i>. ' + 
			'The items appear and disappear quickly.  ' + 
			'Remember to ignore the item that appears before the targetCat and evaluate only the targetCat.<br/><br/></p>'  + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'When you are ready to try a few practice responses, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 1 of nBlocks]</p></div>',
			firstBlockInst7 : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			"See how fast it is? Don't worry if you miss some. " + 
			'Go with your gut feelings.<br/><br/>' + 
			'Concentrate on each targetCat and rate it based on your own feelings. ' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting.<br/><br/>' + 
			'Notice: you can respond with your mouse or the keys 1-7.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 2 of nBlocks]</p></div>',
			middleBlockInst7 : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Continue to another round of this task. ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on each targetCat and rate it based on your own feelings. ' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',
			lastBlockInst7 : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Ready for the FINAL round? ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on each targetCat and rate it based on your own feelings. ' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',

			endText: '<div><p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial"><color="FFFFFF">'+
			'You have completed the task<br/><br/>Press "space" to continue to next task.</p></div>', 
			
			//The feedback messages:
			//The task will save a "feedback" variable that details the number of each type of responses after primes of each category. 
			//And also "result" that will construct a preference message, based on those numbers.
			//In the text you provide below, CATEGORYA, and CATEGORYB will be replaced with the names of the relevant categories.
			fb_att2WithCatA_att1withCatB : 'Your data suggest an automatic preference of CATEGORYA over CATEGORYB.',
			fb_equal_CatAvsCatB : 'Your data suggest no preference between CATEGORYA and CATEGORYB.'
		});
});