$(document).ready(function () {
    if (screen.width <= 768) {

        $('.nut-search').on('click', function(){
            $('[name=domain-mp]').val("");
            $("#message").html(htmlStringDefault);
        });

        // $('.handle').show();
        // $('.wp-form-mp').show();
        var htmlStringDefault = `Hiện tại xuất hiện nhiều website giả mạo giao diện Jun88 nhằm bôi nhọ và làm giảm uy tín của Jun88. Hội
                viên khi tham gia cần chú ý kiểm tra xác minh đường link để bảo đảm truy cập đúng đường link của hệ
                thống. Link an toàn: Jun88.com - JJun88.com`;
       

        $('.handle').on('click', function () {
            $('.wp-form-mp').show();
            $('.handle').hide();
        });

        $('.icon-close').on('click', function () {
            $('.handle').show();
            $('.wp-form-mp').hide();
            $('[name=domain-mp]').val("");

            $("#message").html(htmlStringDefault);
        });
    }
});

$(document).ready(function () {
    $('.icon-close').on('click', function () {
        $('.content-popup').hide();
        showTab('tab1-tab');
        $('.tab-content').addClass('active');
    });

    $('.btn-content').each(function () {
        var _this = $(this);
        _this.on('click', function () {
            var tabIdControl = $(this).data('tab-control');

            $('#show-iframe-open .code-iframe').each(function () {
                var tabContentId = $(this).data('content-tab');

                if (tabIdControl == tabContentId) {

                    $(this).addClass('active');
                    // $('#box-iframe').css("display: block;");
                    $('#box-iframe').show();
                    $('#btn-tawk-small').show();
                } else {
                    $(this).removeClass('active');
                }
            });
        });
    });

    $(".close-customer").click(function () {
        $("#imageModal").modal('hide');
    });

    $('#btn-tawk-small').hide();
    $('#box-iframe').hide();

    $('#btn-tawk-small').on('click', function () {
        $(this).hide();
        $('#box-iframe').hide();
  
    });

    $('#draggable .chat-dialog').css('display', 'none');
    $('#draggable .chat-dialog').each(function (index, value) {
        if ($(this).hasClass('active')) {
            $(this).css('display', 'block');
            $(this).parent().hide();
        }
    });
});