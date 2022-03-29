let color_generator_btn = document.querySelector( '.click-btn' );
color_generator_btn.addEventListener( 'click', generate_color );

const colors = {
    color: [ "red", "green", "#4287f5","#42f5b6","#d4f542" ]
}

function generate_color() {
    let randomNumber = Math.floor( Math.random() * colors.color.length );
    let color = colors.color[ randomNumber ];
    display_color( color );
    apply_background_color( color );
}

function display_color( color ) {
    let display_color_btn = document.querySelector( '.btn-display' );
    display_color_btn.innerHTML = "Background Color : " + color;
}

function apply_background_color( color ) {
    let element = document.querySelector( '.container' );
    element.style.backgroundColor = color;
}
