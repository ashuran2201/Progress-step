const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
// line 1 - 4 used to select element which used for the behavior.
// getElementById if there are only one Id
// querySelectorAll if there are more than one same element.
let currentActive = 1
// line 8 let currentActive equal 1, this used in other function
next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive =  circles.length
    }
    update()
})
// line 10 the id next will have an event (click) added and it will behave the way it already determined
// line 11 if next clicked then currentActive will be added by one
// line 13 we use if else loop here, if the data stored in currentActive more than the data stored in circles (4)
// then the data stored currentActive equal the data stored in circles
// this set this way so that the data within curentActive won't increase after having the same ammount as circles
// line 16 will be explained in line 60
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})
// line 24 mean an event (click) will be added to id prev.
// line 25 mean that if prev clicked then currentActive will be decreased by one.
// line 27 if currentActive less than 1 then,
// currentActive will be equal 1
// this is so that the ammount of currentActive would be less than 1
// line 30 wil be explaiend in line 60
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled =  true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
// this is where the computation for the update function which called in both next and prev loop.
// line 39 we will using forEach and we select 2 stuff, one is the class circle, 
// the other is idx which mean the index of circle.
// line 40 here we use if else loop whic mean if idx less than current active then
// a class (active) will be added to circle.
// while in else it will be removed.
// line 47 here we will call class active to be set it behavior.
// line 49 are where the computation created. the reason why we used the computation is,
// if we not use it the when the next button clicked, the blue line will pass through more than needed.
// so here we set so that the class progress will have it width behave within computation.
// line 51 here we use if else if loop.
// if currentActive equal 1 then prev butten will be disabled.
// it mean that prev button can't be clicked as long as next button aren't clicked or if it in the initial state.
// else if currentActive equal the data stored in circles (4).
// then next button will be disabled.
// it mean if the progress already reach the l;ast step, the button next will be disabled.
// else here if both condition above are invalid or wrong.
// which mean if the progress wan in between 1 and 4 (2 or 3) then both button will be active