// creating element
let h2 = $("<h2></h2>").text("Heading created using jQuery");
// Adding attribute
h2.attr('class', 'blue');
h2.addClass('bgGrey');
$('h1').after(h2)

// create an image inside div
// let image = document.createElement('img');
// image.setAttribute('src', 'camera.jpeg')
// image.setAttribute('width', '100px')
let image = $('<img>').attr('src','./camera.jpeg').css('width','100px')

$('#div1').append(image);
// changing to list
function createUl() {

    let ul = document.createElement('ul');
    $('td').each((index, ele) => {
        let li = document.createElement('li');
        li.innerText = $(ele).text();
        ul.append(li);
    })
    return ul;
}

// add event to the button
$('#toList').click(function () {
    $('table').replaceWith(createUl())
    $('#delete').remove();
})

$('img').mouseover(function(){
    $('img').toggleClass('inlarge');
})
$('#delete').click( function(){
    let length = $('td').length;
    $('td')[length-1].remove();
})

let divs = $('#div3').children();
if(window.innerWidth < 1000){
   
            $(divs[2]).addClass('hide')
        }
        else{
            $(divs[2]).removeClass('hide')
        }

// Manipulating the form 
$('#addBtn').click(function(){
    let fname = $('#nameField').val();
    let gender =$("[name='gender']:checked").val();
    let skills = $("[name='skill']").val();
    fname = fname.toUpperCase();
    gender = gender.toUpperCase();
    skills =skills.join(",").toUpperCase()
   
    let str =" <tr><td>"+fname+"</td><td>"+gender+"</td><td>"+skills+"</td></tr>";
    $('#div6 tbody').append(str);

    $('#nameField').val(null);
    $("[value='Male']").prop('checked', true);
    $("[name='skill']").val(null);
    
})



