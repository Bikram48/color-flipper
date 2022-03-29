let color_generator_btn = document.querySelector( '.click-btn' );
color_generator_btn.addEventListener( 'click', generate_color );

function generate_color() {
    let color = Math.floor( Math.random() * 16777215 ).toString( 16 );
    display_color( color );
    apply_background_color( color );
}

function display_color( color ) {
    let display_color_btn = document.querySelector( '.btn-display' );
    display_color_btn.innerHTML = "Background Color : #" + color;
}

function apply_background_color( color ) {
    let element = document.querySelector( '.container' );
    element.style.backgroundColor = '#' + color;
}
