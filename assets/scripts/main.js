const currentDate = new Date()
let year = currentDate.getFullYear()

const currentYear = (document.getElementById('currentYear').innerText = year)

//Dark Theme - Light Theme;
let checkbox = document.getElementById('checkbox')

checkbox.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
})
