$(document).ready(function(){
  var showTotal = 0;
  var displayTotal_page1 = 0;
  var valueSaved = window.location.search.substring(1);

  $(window).on('keyup',function(e){
    saveAll()
    var total = calculateTotal()
    $('.a000').text('$ ' + total);
    showTotal = total;
  })

  $('.button-help-cal').click(function(){
     window.location.href='a12rewardsavercrosssellproposed1fillbefore.html';
  });


    $('.a12-reward-saver-cross-sell-proposed1-fill-before .view22 .group4').click(function(){
       window.location.href='index.html?showTotal=' +showTotal;
    });

    $('.a12-reward-saver-cross-sell-proposed1-fill-before .group5 .rectangle6-copy').click(function(){
       window.location.href='index.html';
    });




    $('.a10-reward-saver-cross-sell-proposed2-blank .group5 .rectangle6-copy').click(function(){

        $("input[type=number]").val("");
        $('.a000').text('$ ' + '0.00');
        total = 0;

    });


    $( '.field-border' ).keyup(function() {
      displayTotal_page1 = $('.field-border').val();
      if(displayTotal_page1 != ''){

      $('.a000_page1').text('$  '+ displayTotal_page1);
      } else {
        $('.a000_page1').text('$  '+ '0.00');
      }

    });


  loadAll()
  var total = calculateTotal()
  $('.a000').text('$ ' + total);

  if(valueSaved){
    testCall()
  }
})


function calculateTotal(){
  var total = 0
  $('input[type="number"]').each(function(i,v){
    total += +$(v).val();
  });
  return total
}

function saveAll(){
  $('input[type="number"]').each(function(i,v){
    sessionStorage.setItem($(v).attr('name'), $(v).val());
  });
}

function loadAll(){
  //var fields = ["field1", "field2"]
  //$.each(fields, function( index, value ) {

    $('input[type="number"]').each(function(i,v){
      var value = sessionStorage.getItem($(v).attr('name'));

      if (value !== null){
          $(v).val(value)
      }
    });

  //}
}





function testCall(){
  var valueSaved = window.location.search.substring(1);
  var savedTotal = valueSaved.split("=").pop();
  $('.a000_page1').text('$  '+ savedTotal);
}




//
//   window.onbeforeunload = function() {
//   sessionStorage.clear();
//   return '';
// };




// var qsParm = new Array();
// function qs() {
//     var query = window.location.search.substring(1);
//     var parms = query.split('&');
//     for (var i=0; i < parms.length; i++) {
//         var pos = parms[i].indexOf('=');
//         if (pos > 0) {
//             var key = parms[i].substring(0, pos);
//             var val = parms[i].substring(pos + 1);
//             qsParm[key] = val;
//             console.log(qsParm)
//         }
//     }
// }
