/**
 * Created by lizhiwen on 16/6/18.
 *
 */

        //        $(document).ready(function(){
        //            alert("Hello World!");
        //        });
        //
        //        $(function(){
        //            alert("Hello World again!");
        //        });


//    function clickMe(){
//        alert("you clicked me?")
//    }

//    $("#toClickId").click(function(){
//        alert("you clicked clickMe!")
//    });

//    $("div").click(function(){
//        alert("click div");
//    });


//表格奇偶数行显示颜色不一样
$("#tbodyId tr:even").css("background","gray");
$("#tbodyId tr:odd").css("background","green");

// 提示勾选的个数
$("#btn").click(function(){
    //var items = $("#checkBoxId input:checked");
    var items = $("input[name='check']:checked");
    alert(items.length);
});

$("#selectBtn").click(function(){
    //var selectedItem = $("#selectId select:selected");
    alert($("#selectId select option:selected").text());
});
