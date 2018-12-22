$(function(){
	function bottomNavHandler (target){
		if (target == "#section-4" || target == "section-4"){
			$(".bottom-navigation").addClass("show")
			$(".bottom-navigation").removeClass("hidden")
		} else {
			$(".bottom-navigation").removeClass("show")
			$(".bottom-navigation").addClass("hidden")
		}
	}

	function indicatorHandler (target){
		if (target !== "#section-1" && target !== "section-1"){
			$(".indicator a").addClass("c-blue-charcoal")
		} else {
			$(".indicator a").removeClass("c-blue-charcoal")
		}
	}

	var myFullpage = new fullpage('#portfolio-detail-01', {
			// sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
			afterLoad: function(origin, destination, direction){
				bottomNavHandler(destination.item.id)
			}, 
			onLeave: function(origin, destination, direction){
				console.log(destination);
				indicatorHandler(destination.item.id)
			}
		});

	$(".cta").click(function(){
		var target = $(this).data("target") //-> mengambil data dari action selector (target) = "#portfolio-detail-01(bisa beda beda tergantung data target)"
		$(target).show()
		$("#home").hide()
		$(".portfolio").hide()
		$(target+" .in-fadeInLeft").addClass("fadeInLeft") //-->menggabungkan 2 string (target which is #portfolio-detail-01(bisa beda beda)) dengan kelas in-fadeInLeft kemudian ditambahkan kelas fadeInLeft
		$(target+" .in-fadeInUp").addClass("fadeInUp")

	})

	$(".indicator a").click(function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		var position = $(target).offset().top
		// console.log(target)

		$('html body').animate(
			{
				scrollTop: position, //-->parameter: syarat biar animasinya jalan, apa yg dianimasiin misal kasi margin top dll
			},
			{
				duration: 500, //-->option: confignya animasi
				complete: function() {
					bottomNavHandler(target)
					
				}
			}
		);

		indicatorHandler(target)

		
		$(".indicator a").removeClass("active")
		$(this).addClass("active")

		$(".nav-fixed").addClass("nav-scrolled")
	})

	$(".indicator a").first().click(function(){
		$(".nav-fixed").removeClass("nav-scrolled")
	})

	
})