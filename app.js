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

/** img with no src  **/

// -3 -

setInterval(function (){
    $('#noel').fadeToggle(500);
}, 1000)

// -4 -
$('tr:even').css('background', 'lightBlue');

// - 5 -

/** impr text   **/

// - 6 -
let userMessage = $('textarea');
userMessage.keypress(function (){
    console.log()
    if(userMessage.val().length === userMessage.get(0).maxLength){
        alert('Vous avez atteint le nombre maximum de caracteres')
    }
})

// - 7 -
let str = $('#text');
let str2 = $('#text2');

firstBold(str);
firstBold(str2)

function firstBold (para) {
    // get all string
    let all = para.get(0).innerHTML.split(" ");

    // get first word in word & suppr first word in all with shift
    let word = all.shift();

    // add first word in bold tag
    para.text("").append("<b>" + word + "</b>");

    // add rest of string
    para.append(" " + all)
}

// - 8 -
$('#colorChange').html("<div>Créer un div en utilisant jQuery avec la possibilité de lui ajouter dynamiquement une " +
    "couleur de fond et une couleur d'écriture</div>").hover(
    ()=>{
    $('#colorChange').css({
    "color" : "white",
    "backgroundColor" : "blue"})},
    ()=>{
    $('#colorChange').css({
        "color" : "black",
        "backgroundColor" : ""})
    })

// - 9 -
$('#out').css({
    border : "1px black solid",
    padding : "1rem"
});

$('#in').css("border", "1px black solid").appendTo('#out');

//

