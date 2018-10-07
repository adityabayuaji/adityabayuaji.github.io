$(function(){
	$(".cta").click(function(){
		var target = $(this).data("target") //-> mengambil data dari action selector (target) = "#portfolio-detail-01(bisa beda beda tergantung data target)"
		$(target).show()
		$("#home").hide()
		$(".portfolio").hide()
		$(target+" .in-fadeInLeft").addClass("fadeInLeft") //-->menggabungkan 2 string (target which is #portfolio-detail-01(bisa beda beda)) dengan kelas in-fadeInLeft kemudian ditambahkan kelas fadeInLeft
		$(target+" .in-fadeInUp").addClass("fadeInUp")

	})





	
})