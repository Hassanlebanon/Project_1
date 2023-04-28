
// $(document).on("click", ".cat", function () {
//     ids =$(this).attr('data-id');
//     $.ajax({
// 		url: "load.php",
// 		method: "post",
// 		data: {
//             id:ids,
//             name:'mahnmoud',
//             type:'loadpro'
//         },
//         dataType: 'JSON'
// 	}).done(function (r) {
// 			$('#loaddata').append(r.html);
// 	})
// })



function loadAjaxData(xurl, xdata, xtarget) {
	if (xtarget != "") {
		$(xtarget).html(
			'<i class="fas fa-spinner fa-spin" style="padding:5px;"></i> Loading...'
		)
	}
	$.ajax({
		url: xurl,
		method: "post",
		data: xdata
	}).done(function (res) {
		if (xtarget != "") {
			$(xtarget).html(res)
		}
	})
}


$('.viewmorefaq').on("click", function () {
	var page=$(this).attr('page');
	var that=$(this);
	

    $.ajax({
		
		url: "load.php",
		method: "post",
		data: {
			currpage: page,
            type:'loadmorefaq'
        },
        dataType: 'JSON'
	}).done(function (r) {
		if(r.html==''){
			$("#viewmorefaq").hide("slow");

		}else{
			$('#faq-list').append(r.html);
         page++;
                    that.attr('page',page);
		}
			
			
	})
    
}) 

	
	










// $('#categoriesForm').submit(function (e) {

// 	e.preventDefault();
//     var categoryy = $('#categoryval').val();

//     $.ajax({
// 		url: "load.php",
// 		method: "post",
// 		type:'categorySubmit',
// 		data: {
// 			category:categoryy,
//             type:'submitCategory'
//         },
//         dataType: 'JSON'
// 	}).done(function (r) {
		
// 	})
// }) 

// $(document).ready(function() {
// 	debugger;
// 	$('#categoriesForm').submit(function(event) {
// 	  // Prevent the default form submission
// 	  event.preventDefault();
	  
// 	  // Get the input value
// 	  var categoryy = $('#categoryval').val();
	  
// 	  // Send an AJAX request
// 	  $.ajax({
// 		type: 'POST',
// 		url: 'load.php',
// 		data: { category: categoryy },
// 		success: function(response) {
// 		  // Handle successful AJAX response
// 		  console.log('Response:', response);
// 		},
// 		error: function(xhr, status, error) {
// 		  // Handle errors
// 		  console.log('Error:', error);
// 		  $('#error-message').text('An error occurred: ' + error);
// 		}
// 	  });
// 	});
//   });
  
// $(document).ready(function() {
//     $('#categoriesForm').submit(function(event) {
//       // Prevent the default form submission
// 	  debugger;
//       event.preventDefault();

//       // Get the input value
//       var category = $('#categoryval').val();

//       // Send an AJAX request
//       $.ajax({
//         type: 'POST',
//         url: 'load.php',
//         data: { category: category },
		
//         success: function(response) {
//           // Handle successful AJAX response
//           console.log('Response:', response);
//         },
//         error: function(xhr, status, error) {
//           // Handle errors
//           console.log('Error:', error);
//         }
//       });
//     });
//   });