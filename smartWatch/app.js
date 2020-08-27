$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("header").removeClass("active");
    }
});

function changeDotOrder(i, placement){
    let dotsArr = Array.from($('.dots img'))
    let number = 0
    switch(placement){
        case 4:
            number = 1
            break;
        case 3: 
            number = 2
            break;
        case 2: 
            number = 3
            break;
        case 1: 
            number = 4
            break;
        default:
            number = 0
            break;
    }
    for(let i=0; i<number; i++){
        let last = dotsArr.pop()
        dotsArr.unshift(last)
    }
    $('.dots').empty()
    for(let dot of dotsArr){
        $('.dots').append(dot)
    }
}
function findPlacement(list, self){
    let p = 0
    for(let i=0; i<list.length; i++){
        if(self === list[i]){
            if(i === 3){
                p = 4
            } else if(i === 4){
                p = 3
            } else {
                p = 2 - i
            }
            changeDotOrder(i, p)
        }
    }
    return p
}

function rotateOrder(list, placement){
    let arr = Array.from(list)
            
    while(placement > 0){
        let imgLast = arr.pop()
        arr.unshift(imgLast)
        placement -=1
    }
    return arr
}

function changeImageOrder(){
    const list = $('.screenGallery img');
    list.eq(2).removeClass('imgActive')
    let placement = findPlacement(list, this)

    let listArr = rotateOrder(list, placement)
    
    $('.screenGallery').empty()
    for (let item of listArr){
        $('.screenGallery').append(item)
    }
    $('.screenGallery img').eq(2).addClass('imgActive')
    $('.screenGallery img').click(changeImageOrder)
}
const screenshot = $(".screenGallery img")
screenshot.click(changeImageOrder)
