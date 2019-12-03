$(document).ready(function(){
   $('button').on('click', function(){
    let name = $('#name').val();
    let num = $('#num').val();
    let text = $('#text').val();
    // var age = $('#num').val();
    // var isNum = /^\d+$/.test(age); 
    inert(name, num, text);
   });               
});

function setSuccess(success, label){
    $('#' + success).addClass('border-success').removeClass('border-danger');
    $('#' + label).addClass('text-success').removeClass('text-danger');
}

function setError(error, label){
    $('#' + error).addClass('border-danger').removeClass('border-success');
    $('#' + label).addClass('text-danger').removeClass('text-success');
}

function isname(n){
    n == ""? setError('name', 'n-label') :setSuccess('name', 'n-label');
}

function isnum(b){
    b == "" ? setError('num', 'b-label') :setSuccess('num', 'b-label');
}

function istext(t){
    t == "" ? setError('text', 't-label') :setSuccess('text', 't-label');
}

function inert(n, b, t){
    isname(n);
    isnum(b);
    istext(t);
}