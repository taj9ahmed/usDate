function convertDate()
{
    var day, month, year;
    var input = document.getElementById("input").value;

    var temp;
    const month_alpha = ["january","february","march","april","may","june","july","august","september","october","november","december"];

var selected = 0;

        let ch = input[0]+input[1];
        if(input.indexOf("/") != -1 )
        {
            temp = input.split("/");
            month= temp[0];
        }
        else 
        {
            temp = input.split(" ");
            month= temp[0].toLowerCase();
            var alpha = month_alpha.indexOf(month);
            month = alpha +1;
        } 
    day = temp[1];
    year = temp[2];
    document.getElementById("output").innerHTML = day +"/"+month+"/"+year;
}

//************************************* */
//              Long Solution           //
//************************************ */

// function convertDate()
// {
//     var day, month, year;
//     var input = document.getElementById("input").value;

//     var temp;
//     const month_alpha = ["january","february","march","april","may","june","july","august","september","october","november","december"];

// var selected = 0;
// var node_list = document.getElementsByTagName("input");
// for(let node of node_list)
// {
//     if(node.getAttribute("type") == "radio")
//         if(node.checked)
//         {
//             selected = node.value;
            
//             // break;
//         }
// }

//     if(selected == "numeric")
//     {
//         temp = input.split("/");
//         month= temp[0];

//     }   
//     else
//     {
//         temp = input.split(" ");
//         month= temp[0].toLowerCase();
//         console.log(month);
//         var alpha = month_alpha.indexOf(month);
//         month = alpha +1;
        


//         // document.getElementById("output").innerHTML = +"/"+""+"/"+year;
//     }
//     day = temp[1];
//     year = temp[2];
//     document.getElementById("output").innerHTML = day +"/"+month+"/"+year;
// }

// function remove_disabled()
// {
//     document.getElementById("input").disabled = false;
// }