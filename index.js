var contact = document.getElementById('contact')
var form = document.getElementsByClassName('form')
var submit = document.getElementById('submit')
var txt = document.getElementById('formtext')


contact.addEventListener('click', function(event) {
    event.preventDefault()
    console.log(form)
    form[0].classList.toggle('active')
    form[0].classList.toggle('disabled')


 
})

submit.addEventListener('click', function(event) {
    event.preventDefault()
    var name1 = document.getElementById('name').value
    var email = document.getElementById('email').value
   
    console.log(email ,name1)
    if(!email || !name ||!email.includes('@') ){
       
        txt.classList.toggle('valid')

        return;

    }
    alert('Form submitted successfully!')
    form[0].reset()
    form[0].classList.remove('active')
    form[0].classList.add('disabled')
 
})