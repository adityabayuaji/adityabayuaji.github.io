$(function(){



	$("#portfolio-btn").click(function(){ //btn portfolio kekita di klik apa yg terjadi
		$("#portfolio-01").show()
		$("#portfolio-02").hide()
		$("#portfolio-03").hide()
		$("#portfolio-04").hide()
		$(".portfolio").fadeIn()
	})
	$(".icn-close").click(function(){
		$(".portfolio").fadeOut()
		$("#page-number").data("x" , 1) // memasukan 1 sebagai value data x 
		$("#page-number").text("1")
	})
	$("#next").click(function(){

		var current_number = $("#page-number").data("x") // ngambil value data x
		var current_page = "#portfolio-0"+current_number
		
		var next_number = current_number+1
		var next_page = "#portfolio-0"+next_number

		// $.ajax({
		// 	url: 'https://jsonplaceholder.typicode.com/posts',
		// 	method: 'GET',
		// 	data: {},
		// 	success: function(response){
		// 		console.log(response);
		// 		$(next_page+' h3').html(response[next_number].title)
		// 	},
		// 	error: function(){

		// 	}
		// })

		if (current_number < 4) { // ketika angka current number dibwah 4 
			$(next_page).fadeIn() // halaman selanjutnya ditampilkan
			$(current_page).hide() // halaman yg skrg ditutup
			$("#page-number").data("x",next_number) // angka yg ditampilkan adalah yg selanjutnya
			$("#page-number").text(next_number) // angka di html
		}

		$("li#prev").removeClass('disabled')

		if (next_number == 4) {
			$("li#next").addClass('disabled')
		}
	})
	$("#prev").click(function(){
		
		$("li#next").removeClass('disabled')

		var current_page = $("#page-number").data("x")
		var selector = "#portfolio-0"+current_page

		var prev_page = current_page-1
		var prev_selector = "#portfolio-0"+prev_page

		if (current_page > 1) {
			$(prev_selector).fadeIn()
			$(selector).hide()
			$("#page-number").data("x",prev_page)
			$("#page-number").text(prev_page)
		}

		if (current_page === 2) {
			$("li#prev").addClass('disabled')
		}

	})
})