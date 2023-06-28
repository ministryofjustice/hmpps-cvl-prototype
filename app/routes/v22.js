module.exports = function (router) {

var version = '/v22';

//Inflight-policy changes (Review additional conditions pages)
// Checkbox for condition 14d and 14e
router.post('/alcohol-electronic-tag-condition', function (req, res) {

  // Make a variable and give it the value from 'how-many-letters'
  var alcoholMonitoringCheckbox = req.session.data['alcohol-monitoring']

  // Check whether the variable matches a condition
  if (alcoholMonitoringCheckbox == "complete"){
    // Send user to next page
    res.redirect('v19/review-additional-conditions/complete-licence-condition-14d')
  } else {
    // Send user to ineligible page
    res.redirect('v19/review-additional-conditions/complete-licence-condition-14e')
  }

})



//Inflight-policy changes (Review additional conditions pages)
//Delete this condition

// Run this code when a form is submitted to 'parole-outcome-letter-answer'
router.post('/policy-change-not-needed', function (req, res) {

  // Make a variable and give it the value from 'how-many-letters'
  var conditionNotNeeded = req.session.data['condition-not-needed']

  // Check whether the variable matches a condition
  if (conditionNotNeeded == "yes"){
    // Send user to next page
    res.redirect('v19/review-additional-conditions/check-licence-condition-4a')
  } else {
    // Send user to ineligible page
    res.redirect('v19/review-additional-conditions/check-licence-condition-3c')
  }

})











//Start of the journey right after the config page
router.post(version + '/config', function(req, res) {
if (req.session.data['user'] =='admin'){
    req.session.data['licencetypechoose'] = "ap";
    }
    req.session.data['user']
    res.redirect(version + '/details');
  });

//Create journey for v10+ save & exit routing
router.post(version + '/release-date-changed', function(req, res) {
    var route = req.session.data['submit'];
    if (route == "return"){
      res.redirect(version + '/list');
    }
    if (route == "approve"){
      res.redirect(version + '/approvals/approve');
    }
    else if (route == "continue"){
      res.redirect(version + '/meet');
    }
});

//Change the prison view on list for CA and prison approver v18+
router.post(version + '/change-location', function(req, res) {
    res.redirect(version + '/list');
});

//Create journey for v10 save & exit routing
router.post(version + '/question-activate', function(req, res) {
  var activatecreate = req.session.data['activatecreate'];
  if (activatecreate == "yes"){
    res.redirect(version + '/meet');
  }
  else if (activatecreate == "no"){
    res.redirect(version + '/list');
  }
});

//Create journey for v10 save & exit routing
router.post(version + '/meet', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/address');
  }
});

router.post(version + '/address', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/phone-number');
  }
});

router.post(version + '/phone-number', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/when');
  }
});

router.post(version + '/when', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/question');
  }
});

//question page - do they need additional conditions
router.post(version + '/question', function(req, res) {
    var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else {
    var needadditional = req.session.data['needadditional'];
    if (needadditional == "yes"){
      res.redirect(version + '/conditions');
    }
    else if (needadditional == "no"){
      res.redirect(version + '/bespoke');
    }
  }
});

router.post(version + '/question-change', function(req, res) {
  var needadditional = req.session.data['needadditional'];
  var change = req.session.data['changecycle'];
  req.session.data['a4done'] = "yes";

  if (needadditional == "yes"){
    res.redirect(version + '/conditions');
  }
  else if (needadditional == "no"){
     if (change == "yes"){
      res.redirect(version + '/check-your-answers');
    }
    else
    res.redirect(version + '/bespoke');
  }
});

//ADDITIONAL CONDITIONS
//additional conditions page
//GET VALUES FROM EACH Passed in form field
//check against if else which is true in order
//set a 'no' value as hidden form field in each rendered page
router.post(version +'/conditions', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  <!--If search bar is used-->
  if (saveexit == "search"){
    res.redirect(version + '/conditions-filtered');
  }
  else if (saveexit == "continue"){

   var a1 = req.session.data['1a'];
   var a2 = req.session.data['2a'];
   var a3 = req.session.data['3a'];
   var c3 = req.session.data['3c'];
   var c32 = req.session.data['3c2'];
   var e3 = req.session.data['3e'];
   var f3 = req.session.data['3f'];
   var g3 = req.session.data['3g'];
   var j3 = req.session.data['3j'];
   var a4 = req.session.data['4a'];
   var b4 = req.session.data['4b'];
   var h5 = req.session.data['5h'];
   var b6 = req.session.data['6b'];
   var a7 = req.session.data['7a'];
   var b7 = req.session.data['7b'];
   var a8 = req.session.data['8a'];
   var b8 = req.session.data['8b'];
   var c8 = req.session.data['8c'];
   var a9 = req.session.data['9a'];
   var b9 = req.session.data['9b'];
   var b9review = req.session.data['9breview'];
   var change = req.session.data['changecycle'];
   var varyjourney = req.session.data['vary'];

   if (a1 == "yes"){
    res.redirect(version +'/additional/1a');
    }
      else if (a2 == "yes"){
        res.redirect(version + '/additional/2a');
      }
      else if (a3 == "yes"){
        res.redirect(version + '/additional/3a');
      }
      else if (c3 == "yes"){
        res.redirect(version + '/additional/3c');
      }
      else if (c32 == "yes"){
        res.redirect(version + '/additional/3c2');
      }
      else if (e3 == "yes"){
        res.redirect(version + '/additional/3e');
      }
      else if (f3 == "yes"){
        res.redirect(version + '/additional/3f');
      }
      else if (g3 == "yes"){
        res.redirect(version + '/additional/3g');
      }
      else if (j3 == "yes"){
        res.redirect(version + '/additional/3j');
      }
      else if (a4 == "yes"){
        res.redirect(version + '/additional/4a');
      }
      else if (b4 == "yes"){
        res.redirect(version + '/additional/4b');
      }
      else if (h5 == "yes"){
        res.redirect(version + '/additional/5h');
      }
      else if (b6 == "yes"){
        res.redirect(version + '/additional/6b');
      }
      else if (a7 == "yes"){
        res.redirect(version + '/additional/7a');
      }
      else if (b7 == "yes"){
        res.redirect(version + '/additional/7b');
      }
      else if (a8 == "yes"){
        res.redirect(version + '/additional/8a');
      }
      else if (b8 == "yes"){
        res.redirect(version + '/additional/8b');
      }
      else if (c8 == "yes"){
        res.redirect(version + '/additional/8c');
      }
      else if (a9 == "yes"){
        res.redirect(version + '/additional/9a');
      }
      else if (b9 == "yes" && b9review !=="yes"){
          res.redirect(version + '/additional/9b');
      }
      else if (change == "yes"){
         res.redirect(version + '/check-your-answers');
       }
      else {
        res.redirect(version +'/bespoke');
      }
      //END ADDITIONAL CONDITIONS
    }
});

//bespoke page - do they need bespoke conditions
router.post(version +'/bespoke', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
    }
  else if (saveexit == "continue"){
    var needbespoke = req.session.data['needbespoke'];
      if (needbespoke == "yes"){
        res.redirect(version +'/bespoke-checked-PPCS');
        }
  else if (needbespoke == "no"){
    var licencetypechoose = req.session.data['licencetypechoose'];
    var change = req.session.data['changecycle'];
      if (change == "yes"){
        res.redirect(version +'/check-your-answers');
      }
    else if (licencetypechoose !== "ap"){
        res.redirect(version +'/pss');
      }
      else if (licencetypechoose == "ap"){
        res.redirect(version + '/check-your-answers');
      }
    }
  }
});

//bespoke page - do they need bespoke conditions - check PPCS
router.post(version +'/bespoke-checked-PPCS', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
    }
  else if (saveexit == "continue"){
    //var needbespoke = req.session.data['needbespoke'];
        res.redirect(version +'/bespoke2');
        }
});

//bespoke page from CYA page - do they need bespoke conditions - check PPCS
router.post(version +'/bespoke-checked-PPCS-change', function(req, res) {
    res.redirect(version +'/check-your-answers');
});

//bespoke2 page - do they need pss conditions
//Shows if they selected yes to bespoke conditions
router.post(version +'/bespoke2', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
    }
  else if (saveexit == "continue"){
    var licencetypechoose = req.session.data['licencetypechoose'];
    var change = req.session.data['changecycle'];

    if (change == "yes"){
      res.redirect(version +'/check-your-answers');
      }
      else if (licencetypechoose !== "ap"){
        res.redirect(version +'/pss');
        }
      else if (licencetypechoose == "ap"){
        res.redirect(version + '/check-your-answers');
      }
    }
});

//PSS Conditions
router.post(version +'/PSS', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
    }
    else if (saveexit == "continue"){
      var needpss = req.session.data['needpss'];
      if (needpss == "yes"){
        res.redirect(version +'/pss-choose');
      }
      else if (needpss == "no"){
      res.redirect(version +'/check-your-answers');
      }
    }
});


router.post(version +'/pss-choose', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
    }
    else if (saveexit == "continue"){
      var p1 = req.session.data['1p'];
      var p2 = req.session.data['2p'];

      if (p1 == "yes"){
        res.redirect(version +'/pss/1p');
      }
      else if (p2 == "yes"){
        res.redirect(version + '/pss/2p');
      }
      else {
        res.redirect(version +'/check-your-answers');
      }
    }
});

//Discard changes
router.post(version +'/check-your-answers', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
    }
  else if (saveexit == "discard"){
    res.redirect(version + '/vary/discard-changes-confirm');
  }
  else if (saveexit == "addnotes"){
    res.redirect(version + '/vary/vary-change-text');
  }
  else if (saveexit == "continue"){
    //normal create or edit journey
    //Submit or save and exit
    res.redirect(version + '/confirmation');
  }
});

router.post(version + '/edit/check-your-answers', function(req, res) {
    res.redirect(version + '/edit/question');
});

router.post(version + '/exit', function(req, res) {
  var saveexit = req.session.data['submit'];
  var vary = req.session.data['vary'];

  if (saveexit == "exit"){
    if (vary == "yes"){
      res.redirect(version + '/vary/list');
      }
      else{
      res.redirect(version + '/list');
      }
    }
    else if (saveexit == "continue"){
      res.redirect(version + '/check-your-answers');
    }
});

//EDIT SECTION
//edit check your answers
router.post(version + '/edit/check-your-answers', function(req, res) {
    res.redirect(version + '/edit/question');
});

//edit yes or no question
router.post(version + '/edit/question', function(req, res) {
  var edit = req.session.data['edit'];
  if (edit == "yes"){
    req.session.data['needadditional'] ='yes';
    req.session.data['needbespoke']='yes';
    req.session.data['needpss']='yes';
    res.redirect(version + '/check-your-answers');
  }
  else if (edit == "no"){
    res.redirect(version + '/edit/check-your-answers');
  }
});

//VARY SECTION
//VARY check your answers route to question
router.post(version + '/vary/licence-history', function(req, res) {
    res.redirect(version + '/vary/check-your-answers');
});

//VARY check your answers route to question
router.post(version + '/vary/check-your-answers', function(req, res) {
  res.redirect(version + '/vary/question');
});

//VARY check your answers route to add notes
router.post(version + '/vary/answers-to-notes', function(req, res) {
  res.redirect(version + '/vary/vary-change-text');
});

//VARY check your answers route to question
router.post(version + '/vary/vary-change-text', function(req, res) {
  var submit = req.session.data['submit'];
  if (submit == "exit"){
      res.redirect(version + '/exit');
    }
  else{
    //Amended for checklist new for v16questions - have you asked SPO etc
    res.redirect(version + '/vary/check-your-answers-to-notes');
  }
});

//VARY check your answers route to question
router.post(version + '/vary/check-your-answers-to-notes', function(req, res) {
  var submit = req.session.data['submit'];
  if (submit == "exit"){
    res.redirect(version + '/exit');
  }
  else{
    //Amended for checklist new for v16questions - have you asked SPO etc
    res.redirect(version + '/vary/confirmation');
  }
});

//edit yes or no question
router.post(version + '/vary/question', function(req, res) {
  //vary is set on question page as radio boolean
  var vary = req.session.data['vary'];
  var varycomplete = req.session.data['varycomplete'];
  var journey =  req.session.data['journey'];

  //If YES is selected on question page
  if (vary == "yes"){
    //To show conditions as selected on CYA page
    req.session.data['needadditional'] ='yes';
    req.session.data['needbespoke']='yes';
    req.session.data['needpss']='yes';

    //check if this is the time variation request or just completed a request so
    //do not show SPO VLO questions
    if (varycomplete == "yes"){
      res.redirect(version + '/check-your-answers');
    }
    else if (journey == "varynonapproved"){
      res.redirect(version + '/check-your-answers');
    }
    else{
      //Amended for checklist new for v16questions - have you asked SPO etc
      res.redirect(version + '/vary/question-checklist');
    }
  }
  //First time variation
  else if (vary == "no"){
    res.redirect(version + '/vary/vary-request-status');
  }
});

router.post(version + '/vary/question-checklist', function(req, res) {
 //If user selects they haven't consulted with anyone, send them to a page that asks them to explain why not
  //If other is selected route to other page_title
  //otherwise continue to CYA
  var checkOTHER = req.session.data['checkOTHER'];
  var checkNONE = req.session.data['checkNONE'];

  if (checkOTHER=="true"){
    res.redirect(version + '/vary/checklist-other');
  }

  else if (checkNONE=="true") {
    res.redirect(version + '/vary/reason-for-no-consultation');
  }

  else{
    res.redirect(version + '/review-additional-conditions/review-updated-additional-conditions');
  }
});


router.post(version + '/vary/reason-for-no-consultation', function(req, res) {
  //Route to check your answers page from page asking user to say why they haven't consulated with anyone about the licence variation
  res.redirect(version + '/review-additional-conditions/review-updated-additional-conditions');
});



//STEPH changed this '/check-your-answer

router.post(version + '/vary/checklist-other', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
      res.redirect(version + 'exit');
  }
  else{
    res.redirect(version + '/review-additional-conditions/review-updated-additional-conditions');
  }
});


//discard vary chnages
router.post(version + '/vary/discard-changes-confirm', function(req, res) {
  var varydiscard = req.session.data['varydiscard'];
  if (varydiscard == "yes"){
    res.redirect(version + '/vary/list');
  }
  else if (varydiscard == "no"){
    req.session.data['needadditional'] ='yes';
    req.session.data['needbespoke']='yes';
    req.session.data['needpss']='yes';
    req.session.data['vary']='yes';
    res.redirect(version + '/check-your-answers');
  }
});

//discard vary chnages
router.post(version + '/vary/discard-vary-confirm', function(req, res) {
  var varydiscard = req.session.data['varydiscard'];
  if (varydiscard == "yes"){
    res.redirect(version + '/vary/list');
  }
  else if (varydiscard == "no"){
    req.session.data['needadditional'] ='yes';
    req.session.data['needbespoke']='yes';
    req.session.data['needpss']='yes';
    req.session.data['vary']='yes';
    res.redirect(version + '/vary/vary-request-status');
  }
});


router.post(version + '/vary/discard-changes-confirm2', function(req, res) {
  var varydiscard = req.session.data['varydiscard'];
  if (varydiscard == "yes"){
    res.redirect(version + '/vary/list');
  }
  else if (varydiscard == "no"){
    res.redirect(version + '/vary/vary-change-text');
  }
});

//Vary print and activate varied licence for Helena Proved (Helen APPROVED!)
router.post(version + '/vary/licence-history-helena-proved', function(req, res) {
  var varyactivate = req.session.data['print'];
  if (varyactivate == "yes"){
    req.session.data['activateHelena'] = 'yes';
    res.redirect(version + '/vary/licence-history-helena-proved');
  }
  else{
    res.redirect(version + '/vary/licence-history-helena-proved2');
    req.session.data['activateHelena'] = 'no';
  }
});
}
