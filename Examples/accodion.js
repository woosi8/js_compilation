const btnCollapse = document.querySelector('#btn-collapse'),
    questions = document.querySelectorAll('.panel-question'),
    heading = document.querySelectorAll('.panel-heading'),
    pbody = document.querySelectorAll('.panel-body')

heading.forEach((e) => {
    e.addEventListener('click', (e) => {
        questions.forEach((elem) => {
            // remove active in added active panel-questions
            elem.classList.remove('active')
            // add active in clicked panel-questions
            e.target.parentNode.classList.add('active')
            activateBody()
        })
    })
})

// you can choose panel-body opened or closed at first
activateBody()
// closeElem()

// you can close opend panel-body
btnCollapse.addEventListener('click', () => {
    pbody.forEach((elem) => {
        elem.style.display = 'none'
    })
})

function closeElem() {
    for (var i = 0; i < pbody.length; i++) {
        pbody[i].style.display = 'none'
    }
}

// If panel-questions has active, change panel-body display's value into block.
function activateBody() {
    closeElem()
    const activePanel = document.querySelector('.panel-question.active .panel-body')
    const activeElem = document.querySelector('.panel-question.active')
    if (activeElem != null) {
        activePanel.style.display = 'block'
    }
}
