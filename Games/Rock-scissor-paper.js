const pic = document.querySelector('.pic')
//1
let ImgElem = '0'

//  Pic's Location
const rsp = {
    rock: '0',
    scissor: '-142px',
    paper: '-284px',
}

// set computer choice
function computer(ImgElem) {
    return Object.entries(rsp).find(function (v) {
        return v[1] === ImgElem
    })[0]
}

// transition Img
function intervalMaker() {
    IntervalElem = setInterval(function () {
        if (ImgElem === rsp.rock) {
            ImgElem = rsp.scissor
        } else if (ImgElem === rsp.scissor) {
            ImgElem = rsp.paper
        } else {
            ImgElem = rsp.rock
        }
        document.querySelector('#computer').style.background =
            'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + ImgElem + ' 0'
    }, 100)
}

const startButton = document.querySelector('#start')

startButton.addEventListener(
    'click',
    () => {
        intervalMaker()
    },
    { once: true }
)
// intervalMaker()

// Set score value
const score = {
    scissor: 1,
    rock: 0,
    paper: -1,
}

//click Event
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        //이미지 잠시 멈춰서 결과보기
        clearInterval(IntervalElem)
        setTimeout(function () {
            intervalMaker()
        }, 1000)

        let myPick = this.textContent
        const myScore = score[myPick]
        const computerScore = score[computer(ImgElem)]
        //결과 내기위한 변수
        const scoreGap = myScore - computerScore
        if (scoreGap === 0) {
            pic.innerHTML = 'even'
            pic.style.color = 'grey'
        } else if ([-1, 2].includes(scoreGap)) {
            pic.innerHTML = 'win'
            pic.style.color = 'dodgerblue'
        } else {
            pic.innerHTML = 'lost'
            pic.style.color = 'red'
        }
    })
})
