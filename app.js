function openMenu() {
    const body = document.body

    body.classList.add("open")
}

function closeMenu() {
    const body = document.body

    body.classList.remove("open")
}

// template_8xgjj4c
// service_fuyyalj
// cOrlIMtEjLOY1ffJ-

async function sendEmail(event) {
    event.preventDefault();
    const body = document.body;
    const loading = document.querySelector('.contact__form__loading')
    const form = document.querySelector('.contact__form')

    try {
        loading.classList.remove('hidden')


        await emailjs.sendForm("service_fuyyalj", "template_8xgjj4c", event.target, "cOrlIMtEjLOY1ffJ-");

        form.reset();

        loading.classList.add('hidden')
        body.classList.add('success-open')
        setTimeout(() => {
            body.classList.remove('success-open')
        }, 5000)
    console.log('sent')
    } catch (error) {
        alert("error with emailjs site")
    }


}