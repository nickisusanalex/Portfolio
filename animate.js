const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.querySelectorAll(".fancy-columns-illustration-01")[0].classList.add("fadeInRight")
            document.querySelectorAll(".fancy-columns-illustration-02")[0].classList.add("fadeInRight")
        }
    })

})

observer.observe(document.querySelector(".left"));