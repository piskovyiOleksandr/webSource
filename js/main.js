$(function(){
	
   $(".open").show(); $('#book_marks').delegate('#book_mark:not(.current)', 'click', function(){
		$(this).addClass('current').siblings().removeClass('current')
		 .parents('#book_marksbox').find('.book_markbox').hide().eq($(this).index()).fadeIn(500);
	});
});