// - 1 -
$('input:submit').hide();
let check = $('input:checkbox');
check.click(function (){
    // console.log( check.get(0).checked )
    if(check.get(0).checked === true){
        $('input:submit').show();
    }
})

// - 2 -


// -3 -
// setInterval(function (){
//     $('#noel').fadeToggle(500);
// }, 1000)

// -4 -
$('table')


// - 5 -

// - 6 -

// - 7 -
let str = $('#text');
let str2 = $('#text2');

firstBold(str);
firstBold(str2)

function firstBold (para) {
    // get all string
    let all = para.get(0).innerHTML.split(" ");

    // get first word
    let word = all.shift();
    console.log(all)

    // set para
    para.text("").append("<b>" + word + "</b>");
    para.append(" " + all)
}
