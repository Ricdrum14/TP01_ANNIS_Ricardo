function handleFormSubmission() {
    const form = document.querySelector('form')

    const name = document.getElementById('name')
    const note = document.getElementById('email')
    const adresse=document.getElementById('adresse')
    const message = document.getElementById('message')
    const phone_number=document.getElementById('number')
    const password = document.getElementById('password')
    const login = document.getElementById('login')
    const ville = document.getElementById('ville')
    const civilite= document.getElementById('civilite')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let errors = false;

        /[a-z0-9-_.]+@[a-z0-9-_.]+\.[a-z]{2,}/.test()

        const nameValue = name.value
        if (!nameValue || nameValue.length > 50) {
            name.classList.add('error')
            errors = true
        }


        const messageValue = message.value
        if (!messageValue) {
            message.classList.add('error')
            errors = true
        }

        if (!errors) {
            form.submit()
        }
    })
}
handleFormSubmission();

