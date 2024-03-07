module.exports = function (router) {

var version = '/v23';

//Early Release - Approver view from approve licence page to approve and back to case list
router.post(version + '/approvals/approve-earlyrelease', function(req, res) {
  var route = req.session.data['approve-a-licence'];
  if (route == "approvenow"){
    res.redirect(version + '/approvals/confirmation-earlyrelease');
  }
  else if (route == "returntocases"){
    res.redirect(version + '/list');
  }
});
//Timeserved - Approver view from confirmation list to approve another licence
router.post(version + '/approvals/confirmation-timeserved', function(req, res) {
  res.redirect(version + '/list');
});

//Time served - from confirmation back to case list
router.post(version + '/timeserved/confirmation', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "continue"){
    res.redirect(version + '/list#releases-two-days');
  }
});


//////////

//ECSL bespoke page - do they need bespoke conditions

//ECSL

router.post(version + '/ecsl/meet', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/ecsl/address');
  }
});
router.post(version + '/ecsl/address', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/ecsl/phone-number');
  }
});
router.post(version + '/ecsl/phone-number', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/ecsl/when');
  }
});
router.post(version + '/ecsl/when', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/ecsl/question');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/ecsl/question');
  }
});

//question page - do they need additional conditions
router.post(version + '/ecsl/question', function(req, res) {
    var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else {
    var needadditional = req.session.data['needadditional'];
    if (needadditional == "yes"){
      res.redirect(version + '/ecsl/conditions');
    }
    else if (needadditional == "no"){
      res.redirect(version + '/ecsl/bespoke');
    }
  }
});
//bespoke page - do they need bespoke conditions
router.post(version +'/ecsl/bespoke', function(req, res) {
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
        res.redirect(version +'/ecsl/check-your-answers');
      }
    else if (licencetypechoose !== "ap"){
        res.redirect(version +'/pss');
      }
      else if (licencetypechoose == "ap"){
        res.redirect(version + '/ecsl/check-your-answers');
      }
    }
  }
});
router.post(version + '/ecsl/check-your-answers', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/list');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/ecsl/confirmation');
  }
});

//Timeserved - Prison admin creating a new licence
router.post('/ca-new-licence-timeserved', function (req, res) {
  var CAnewlicenceTimeserved = req.session.data['activatecreate']

  // Check whether the variable matches a condition
  if (CAnewlicenceTimeserved == "yes"){
   
   // Send user to next page
    res.redirect(version + '/timeserved/meet')
  } else {
    // Send user to ineligible page
    res.redirect(version + '/list')
  }

});




//Timeserved - Approver view from approve licence page to approve and back to case list
router.post(version + '/approvals/approve-timeserved', function(req, res) {
  var route = req.session.data['approve-a-licence'];
  if (route == "approvenow"){
    res.redirect(version + '/approvals/confirmation-timeserved');
  }
  else if (route == "returntocases"){
    res.redirect(version + '/list');
  }
});
//Timeserved - Approver view from confirmation list to approve another licence
router.post(version + '/approvals/confirmation-timeserved', function(req, res) {
  res.redirect(version + '/list');
});

//Time served - from confirmation back to case list
router.post(version + '/timeserved/confirmation', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "continue"){
    res.redirect(version + '/list#releases-two-days');
  }
});










//Hardstop - edit confirmation
router.post(version + '/edit/check-your-answers-edit', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/list#releases-two-days');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/confirmation');
  }
});

//hardstop edit yes or no question
router.post(version + '/edit/question', function(req, res) {
  var edit = req.session.data['edit'];
  if (edit == "yes"){
    req.session.data['needadditional'] ='yes';
    req.session.data['needbespoke']='yes';
    req.session.data['needpss']='yes';
    res.redirect(version + '/edit/check-your-answers-edit');
  }
  else if (edit == "no"){
    res.redirect(version + '/edit/check-your-answers');
  }
});



//Hardstop - from confirmation back to case list
router.post(version + '/hardstop/confirmation', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "continue"){
    res.redirect(version + '/list#releases-two-days');
  }
});


//Hardstop - confirmation
router.post(version + '/hardstop/check-your-answers', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/list#releases-two-days');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/confirmation');
  }
});


//Hardstop - check licence details
router.post(version + '/hardstop/when', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/check-your-answers');
  }
});

//Hardstop - when the initial appointment is
router.post(version + '/hardstop/phone-number', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/when');
  }
});

//Hardstop - entering an address
router.post(version + '/hardstop/address', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/phone-number');
  }
});





//Hardstop - edit initial appointmemnt
router.post(version + '/hardstop/meet-change', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/check-your-answers');
  }
});












///////////


//Time served
//Vary journey
//Review licence

router.post('/review-licence-timeserved', function (req, res) {
  var licenceReviewed = req.session.data['licence-review-variation']

  // Check whether the variable matches a condition
  if (licenceReviewed == "yes"){
   
   // Send user to next page
    res.redirect(version + '/vary/question')
  } else {
    // Send user to ineligible page
    res.redirect(version + '/vary/timeserved/licence-history-review')
  }

});

//Time served
//Vary journey
//Review licence - Case 2

router.post('/review-licence-timeserved-case2', function (req, res) {
  var licenceReviewedcasetwo = req.session.data['licence-review-variation']

  // Check whether the variable matches a condition
  if (licenceReviewedcasetwo == "yes"){
   
   // Send user to next page
    res.redirect(version + '/vary/question')
  } else {
    // Send user to ineligible page
    res.redirect(version + '/vary/timeserved/licence-history-review-case2')
  }

});





//Hardstop
//Vary journey
//Review licence

router.post('/review-licence', function (req, res) {
  var licenceReviewed = req.session.data['licence-review-variation']

  // Check whether the variable matches a condition
  if (licenceReviewed == "yes"){
   
   // Send user to next page
    res.redirect(version + '/vary/question')
  } else {
    // Send user to ineligible page
    res.redirect(version + '/vary/licence-history-review')
  }

});



//Hardstop - edit confirmation
router.post(version + '/edit/check-your-answers-edit', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/list#releases-two-days');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/confirmation');
  }
});

//hardstop edit yes or no question
router.post(version + '/edit/question', function(req, res) {
  var edit = req.session.data['edit'];
  if (edit == "yes"){
    req.session.data['needadditional'] ='yes';
    req.session.data['needbespoke']='yes';
    req.session.data['needpss']='yes';
    res.redirect(version + '/edit/check-your-answers-edit');
  }
  else if (edit == "no"){
    res.redirect(version + '/edit/check-your-answers');
  }
});



//Hardstop - from confirmation back to case list
router.post(version + '/hardstop/confirmation', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "continue"){
    res.redirect(version + '/list#releases-two-days');
  }
});


//Hardstop - confirmation
router.post(version + '/hardstop/check-your-answers', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/list#releases-two-days');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/confirmation');
  }
});


//Hardstop - check licence details
router.post(version + '/hardstop/when', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/check-your-answers');
  }
});

//Hardstop - when the initial appointment is
router.post(version + '/hardstop/phone-number', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/when');
  }
});

//Hardstop - entering an address
router.post(version + '/hardstop/address', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/phone-number');
  }
});

//Hardstop - initial appointment
router.post(version + '/hardstop/meet', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/address');
  }
});

//Hardstop - Prison admin creating a new licence
router.post('/ca-new-licence', function (req, res) {
  var CAnewlicence = req.session.data['activatecreate']

  // Check whether the variable matches a condition
  if (CAnewlicence == "yes"){
   
   // Send user to next page
    res.redirect(version + '/hardstop/meet')
  } else {
    // Send user to ineligible page
    res.redirect(version + '/list')
  }

});

//Hardstop - edit initial appointmemnt
router.post(version + '/hardstop/meet-change', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
    res.redirect(version + '/exit');
  }
  else if (saveexit == "continue"){
    res.redirect(version + '/hardstop/check-your-answers');
  }
});


//Freedom of movement - multiple addresses
//Add another address

router.post('/new-addresslocation', function (req, res) {
  var addresslocationAddAnother = req.session.data['addanotheraddresslocation']

  // Check whether the variable matches a condition
  if (addresslocationAddAnother == "yes"){
   
   // Send user to next page
    res.redirect('v22/additional/8b-location2')
  } else {
    // Send user to ineligible page
    res.redirect('v22/check-your-answers')
  }

});

//Freedom of movement - multiple addresses
//Delete this condition

// Run this code when a form is submitted to 'parole-outcome-letter-answer'
router.post('/delete-location', function (req, res) {

  // Make a variable and give it the value from 'how-many-letters'
  var locationNotNeeded = req.session.data['location-not-needed']

  // Check whether the variable matches a condition
  if (locationNotNeeded == "yes"){
    // Send user to next page
    res.redirect(version + '/additional/8b-overview')
  } else {
    // Send user to ineligible page
    res.redirect(version + '/additional/8b-overview')
  }

});

//Hardstop Approver view from approve licence page to approve and back to case list
router.post(version + '/approvals/approve-hardstop', function(req, res) {
  var route = req.session.data['approve-a-licence'];
  if (route == "approvenow"){
    res.redirect(version + '/approvals/confirmation');
  }
  else if (route == "returntocases"){
    res.redirect(version + '/list');
  }
});

//Approver view from approve licence page to approve and back to case list
router.post(version + '/approvals/approve', function(req, res) {
  var route = req.session.data['approve-a-licence'];
  if (route == "approvenow"){
    res.redirect(version + '/approvals/confirmation');
  }
  else if (route == "returntocases"){
    res.redirect(version + '/list');
  }
});

//Approver view from confirmation list to approve another licence
router.post(version + '/approvals/confirmation', function(req, res) {
  res.redirect(version + '/list');
});

//Create - From admin to search results page
router.post(version + '/list-ca', function(req, res) {
  res.redirect(version + '/list-search-results');
});

//Create - From approver cases list to search results page
router.post(version + '/list-recently-approved', function(req, res) {
  res.redirect(version + '/list-search-results');
});

//Create - From team cases list to search results page
router.post(version + '/list-team-view', function(req, res) {
  res.redirect(version + '/list-search-results');
});

//Vary - From my cases list to search results page
router.post(version + '/vary/list', function(req, res) {
  res.redirect(version + '/list-search-results');
});

//Create - From team cases list to search results page
router.post(version + '/vary/list-team-view', function(req, res) {
  res.redirect(version + '/list-search-results');
});

//Start of the journey right after the config page
router.post(version + '/config', function(req, res) {
if (req.session.data['user'] =='admin'){
    req.session.data['licencetypechoose'] = "ap";
    }
    req.session.data['user']
    res.redirect(version + '/details');
  });

  //IS91 page routing for create journey
router.post(version + '/create-immigration-detention-licence', function(req, res) {
  var route = req.session.data['submit'];
  if (route == "continue"){
    res.redirect(version + '/question-activate');
  }
  else if (route == "cancel"){
    res.redirect(version + '/list');
  }
});

  //IS91 page routing for vary journey
  router.post(version + '/vary/is91-vary/vary-immigration-detention-licence-cody', function(req, res) {
    var route = req.session.data['submit-is91-vary'];
    if (route == "continue"){
      res.redirect(version + '/vary/question');
    }
    else if (route == "cancel"){
      res.redirect(version + '/vary/is91-vary/check-your-answers-cody');
    }
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
  //If other is selected route to other page_title
  //otherwise continue to CYA
  var checkOTHER = req.session.data['checkOTHER'];

  if (checkOTHER=="true"){
    res.redirect(version + '/vary/checklist-other');
  }
  else{
    res.redirect(version + '/check-your-answers');
  }
});

router.post(version + '/vary/checklist-other', function(req, res) {
  var saveexit = req.session.data['submit'];
  if (saveexit == "exit"){
      res.redirect(version + 'exit');
  }
  else{
    res.redirect(version + '/check-your-answers');
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
