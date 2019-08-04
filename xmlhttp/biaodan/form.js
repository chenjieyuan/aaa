// <script>
// $(      //页面加载完执行
//     $("#ajaxForm").on("submit",function () {    //表单提交时监听提交事件
//         $(this).ajaxSubmit(options);    //当前表单执行异步提交，optons 是配置提交时、提交后的相关选项
//         return false;   //  必须返回false，才能跳到想要的页面
//     })
// )
// //配置 options 选项
// var options = {
//     url: "/postform",       //提交地址：默认是form的action,如果申明,则会覆盖
//     type: "post",           //默认是form的method（get or post），如果申明，则会覆盖
//     success: successFun,    //提交成功后的回调函数，即成功后可以定页面跳到哪里
//     dataType: "json",       //接受服务端返回的类型
//     clearForm: true,        //成功提交后，清除所有表单元素的值
//     resetForm: true,        //成功提交后，重置所有表单元素的值
//     timeout: 3000           //设置请求时间，超过该时间后，自动退出请求，单位(毫秒)
// }
// //设置提交成功后返回的页面
// function successFun(data,status) {
//     $("#showForm").html(data.msg);      //提交表单后从后台接收到的返回来的数据，我保存到了msg里
//     // $("#showForm").html("或者这里可以直接写想要显示的内容")
// }
// </script>
//
//
// app.post("/postform",function (req, res) {
//     console.log(req.body);
//     userLink.create({
//         "name": req.body.user,
//         "age": req.body.age
//     },function (err) {
//         if(err) throw err;
//         res.status(200).json({success: true,msg: "提交成功，这是你想要返回的页面。"});
//     })
// })



$(document).ready(function() {
    var buttonId;

    $('#patentEditForm').validator().on('submit', function (e) {
        if (buttonId == "but_sub") {
            var formData = new FormData($("#patentEditForm")[0]);
            $.ajax({
                type: "POST",
                url: "/biz/",
                data: formData,
                dataType: "JSON",
                nsync: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (date) {
                    switch (date.status) {
                        case 1:
                            $success("保存成功！");
                            break;
                        case 1009:
                            $error("保存失败！");
                            break;
                        default :
                            $error("没有提交信息");
                    }
                },
                error: function () {
                    $error("没有提交信息");
                }
            });
        }
    });

    $(".btn-primary").click(function () {
        buttonId = $(this).attr("id");
        $('#patentEditForm').trigger('submit');
    });
}


