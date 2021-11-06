window.onload = () => {
    let cardCount = $('.albumImage').length
    let cardWidth = $('.albumImage').width()
    let cardHeight = $('.albumImage').height()
    let totalWidth = cardCount * cardWidth

    let delay = 1000

    // $('.albumImage:last-child').prependTo('.album-container')

    $('.album-container').css({
        width: totalWidth,
        // marginLeft: -cardWidth
    })

    $('.slider-mask').css({
        width: cardWidth,
        height: cardHeight
    })

    let current = 0
    $('#lsaquo').click(() => {
        current += cardWidth
        if (current == cardWidth) {
            current = -totalWidth + cardWidth
        }
        $('.album-container').animate({
            left: current
        }, delay, () => {
            // $('.albumImage:last-child').prependTo('.album-container')
            // $('.album-container').css('left', '0')
        })
    })

    $('#rsaquo').click(() => {
        current -= cardWidth
        if (current == -totalWidth) {
            current = 0
        }
        $('.album-container').animate({
            left: current
        }, delay, () => {
            // $('.albumImage:first-child').appendTo('.album-container')
            // $('.album-container').css('left', '0')
        })
    })
}