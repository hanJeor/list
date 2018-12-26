$(function(){


//全局的checkbox选中和未选中的样式
    var $allCheckbox = $('input[type="checkbox"]'),     //全局的全部checkbox
		$wholeChexbox = $('.all_check'),//全选
		$cartBox = $('.check_item');           //每个商铺下的商品的checkbox
	
    $wholeChexbox.click(function () {
        //var $checkboxs = $cartBox;
        if ($(this).is(':checked')) {
            $cartBox.prop("checked", true);
        } else {
            $cartBox.prop("checked", false);
        }
    });

    $cartBox.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                var len = $cartBox.length;
                var num = 0;
                $cartBox.each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $wholeChexbox.prop("checked", true);
                }
            } else {
                $wholeChexbox.prop("checked", false);
            }
        })
    })



});

