   (function(){
        new InstagramFeed({
            'username': 'camillafitness_pt',
            'container': document.getElementById("instagram-feed"),
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'display_captions': false,
            'callback': null,
            'styling': true,
            'items': 4,
            'items_per_row': 4,
            'margin': 1,
            'lazy_load': true,
            'on_error': console.error
        });
    })();


const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  console.log('hi');
});
