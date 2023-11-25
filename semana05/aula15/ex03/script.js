const primeiraSection = document.getElementById('primeiraSection')
const segundaSection = document.getElementById('segundaSection')
const terceiraSection = document.getElementById('terceiraSection')

document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 200) {
        primeiraSection.classList.add("vermelha")
    }

    if (document.documentElement.scrollTop > 401) {
        segundaSection.classList.add("azul")
    }

    if (document.documentElement.scrollTop > 650) {
        terceiraSection.classList.add("verde")
    }
})