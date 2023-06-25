// PRODUCT HUNT

// let huntBar = document.querySelector('#producthunt')
// let huntBarMobile = document.querySelector('#producthuntMobile')
// let huntClose = document.querySelector('#hunt__close')
// let huntCloseMobile = document.querySelector('#hunt__closeMobile')
//
// huntClose.addEventListener('click', function () {
//     huntBar.classList.add('closed')
// })
// huntCloseMobile.addEventListener('click', function () {
//     huntBarMobile.classList.add('closed')
// })

// /PRODUCT HUNT

/* MENU */
let header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});
/* /MENU */

/* MOBILE MENU */
let navToggle = document.querySelector('#nav__toggle');
let menuToggle = document.querySelector('#menuToggle');
let links = document.querySelectorAll('a');
let menuCheckbox = document.querySelector('.nav__checkbox');
let logoSvg = document.querySelector('#logo__link');

navToggle.onclick = function () {
    menuToggle.classList.toggle('menuShow');
}

links.forEach(function(link) {
    link.addEventListener("click", function () {
        menuToggle.classList.remove('menuShow');
        menuCheckbox.checked = false;
    })
});

logoSvg.addEventListener("click", function () {
    location.href='/'
})

/* /MOBILE MENU */

/* HERO YOUTUBE */

function findVideos() {
    let videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    let link = video.querySelector('.video__link');
    let media = video.querySelector('#video__media');
    let button = video.querySelector('.video__button');
    let id = parseMediaURL(media);

    video.addEventListener('click', async () => {
        let iframe = createIframe(id);
        link.remove();
        button.remove();

        await video.appendChild(iframe);

        const media = document.querySelector('#video__media')

        media.style.top = 0
        media.style.left = 0
        media.style.height = '100%'
        media.style.width = '100%'
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
}


function parseMediaURL(media) {
    let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/sddefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.id = 'video__media';
    return iframe;
}

let player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            events: {
            'onStateChange': onPlayerStateChange
            }
        });
    }
function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

let heroYoutubeLayer = document.querySelector('#hero__watch-video');
let heroYoutubeButtonOpen = document.querySelector('#hero__content-button-video')
let heroYoutubeButtonOpenMobile = document.querySelector('#hero__watch-video-mobile')
let heroYouTubeButtonClose = document.querySelector('#hero__video-close');

if (heroYoutubeButtonOpen) {

    heroYoutubeButtonOpen.addEventListener('click', (function (e) {
        console.log('deeper')
        heroYoutubeLayer.classList.add('show');
        dataLayer.push({'event': 'youtube'});
        fbq('track','ViewContent',{ content_name: 'YouTube__watch-video-button' });
    }))
}

if (heroYoutubeButtonOpenMobile) {
    heroYoutubeButtonOpenMobile.addEventListener('click', (function (e) {
        console.log('deeper')
        heroYoutubeLayer.classList.add('show');
        dataLayer.push({'event': 'youtube'});
        fbq('track','ViewContent',{ content_name: 'YouTube__watch-video-button' });
    }))
}

if (heroYouTubeButtonClose) {
    heroYouTubeButtonClose.addEventListener('click', (function (e) {
        heroYoutubeLayer.classList.remove('show')
        let frame = document.querySelector("#video__media");
        frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        this.pause()
    }))
}
/* /HERO YOUTUBE */

/* VIDEO */
const heroVideo = document.getElementById("hero__background-video-tag");

if (heroVideo) {
    heroVideo.addEventListener('canplay', function(e) {
        this.play();
    })
}

/* /VIDEO */


/* TRYON VIDEOS */
    const windowInnerWidth = window.innerWidth
    const sdkToggle = document.querySelector('#sdk__toggle')
    const sdkToggleIcon = document.querySelector('#sdk__toggle_icon')
    const desktopBtn = document.querySelector('#sdk__desktop')
    const mobileBtn = document.querySelector('#sdk__mobile')
    const desktopVideo = document.querySelector('.sdk__desktop_video_wrap')
    const mobileVideo = document.querySelector('.sdk__mobile_video_wrap')

    if (sdkToggle) {
        sdkToggle.addEventListener('click', () => {
            if (desktopBtn.classList.contains('isActive')) {
                desktopVideo.style.display = 'none'
                mobileVideo.style.display = 'block'

                desktopBtn.classList.remove('isActive')
                mobileBtn.classList.add('isActive')
                sdkToggleIcon.classList.toggle('toggled')
            } else {
                desktopVideo.style.display = 'block'
                mobileVideo.style.display = 'none'

                desktopBtn.classList.add('isActive')
                mobileBtn.classList.remove('isActive')
                sdkToggleIcon.classList.toggle('toggled')
            }

        })
    }

    if (desktopBtn) {
        desktopBtn.addEventListener('click', () => {
            if (!desktopBtn.classList.contains('isActive')) {
                sdkToggleIcon.classList.toggle('toggled')
            }

            desktopVideo.style.display = 'block'
            mobileVideo.style.display = 'none'

            desktopBtn.classList.add('isActive')
            mobileBtn.classList.remove('isActive')
        })
    }
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            if (!mobileBtn.classList.contains('isActive')) {
                sdkToggleIcon.classList.toggle('toggled')
            }

            desktopVideo.style.display = 'none'
            mobileVideo.style.display = 'block'

            desktopBtn.classList.remove('isActive')
            mobileBtn.classList.add('isActive')
        })
    }


    if (windowInnerWidth >= 768) {
        if (desktopBtn) {
            desktopBtn.innerHTML = "DESKTOP VERSION"
        }
        if (mobileBtn) {
            mobileBtn.innerHTML = "MOBILE VERSION"
        }
    }
/* /TRYON VIDEOS */

/* LINK TO APP STORE OR PLAY MARKET */
// let downloadApp = document.querySelector('#download__app');
// let buttonAppstore = document.querySelector('#button__appstore');
// let buttonPlaymarket = document.querySelector('#button__playmarket');
//
// downloadApp.addEventListener('click', function (e) {
//     e.preventDefault();
//     if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Macintosh/i))) {
//         gtag('event', 'button', 'download_hero');
//         dataLayer.push({'event': 'download_hero'});
//         window.location = "https://apps.apple.com/app/trillion-ar-jewelry-try-on/id1568660749";
//     }
//     if(navigator.userAgent.match(/android/i)) {
//         gtag('event', 'button', 'download_hero');
//         dataLayer.push({'event': 'download_hero'});
//         window.location = "https://play.google.com/store/apps/details?id=ru.horizonteam.trillion";
//     }
// })
//
// buttonAppstore.addEventListener('click', function (e) {
//     dataLayer.push({'event': 'download_appstore'});
// });
//
// buttonPlaymarket.addEventListener('click', function (e) {
//     dataLayer.push({'event': 'download_play'});
// });

/* /LINK TO APP STORE OR PLAY MARKET */

/* PARALLAX FOR TYPES */
// let ringsItem = document.querySelector('#rings__hover');
// let ringImage = document.querySelector('#ring__image');
// let parallaxHeight = 0;

// window.addEventListener('scroll', function() {
//     if (pageYOffset > 1530) {
//         parallaxHeight = Math.round(pageYOffset/10);
//         console.log(parallaxHeight)
//         ringImage.style.transform = 'rotate(-5.34deg) translateY(-' + (1.5*parallaxHeight-230) + 'px)';
//     };
// });
/* /PARALLAX FOR TYPES */ 

/* MODAL POPUPS */
    // let partnershipsModalOpen = document.querySelector('#partnerships__content-reveal1-button');
    // let partnershipsModalPopup1 = document.querySelector('#partnerships__content-item-reveal1');
    // let partnershipsModalClose1 = document.querySelector('#partnerships__content-reveal1-close');
    // let partnershipsModalOkButton1 = document.querySelector('#partnerships__content-reveal-button-Looks');
    //
    // let partnershipsModalOpenX = document.querySelector('#partnerships__content-reveal2-button');
    // let partnershipsModalPopupX = document.querySelector('#partnerships__content-item-reveal2');
    // let partnershipsModalCloseX = document.querySelector('#partnerships__content-reveal2-close');
    // let partnershipsModalOkButtonX = document.querySelector('#partnerships__content-reveal-button-X');
    
    let caseModalOpen = document.querySelector('#case__content-reveal-button');
    let caseModalPopup = document.querySelector('#case__content-item-reveal');
    let caseModalClose = document.querySelector('#case__content-reveal-close');
    let caseModalOkButton = document.querySelector('#case__content-reveal-button-ok');

let expertiseModalPopup = document.querySelector('#expertise__content-item-reveal');
let expertiseModalClose = document.querySelector('#expertise__content-reveal-close');
let expertiseModalOkButton = document.querySelector('#expertise__content-reveal-button-ok');
    
    

    // partnershipsModalOpen.addEventListener('click', (function (e) {
    //     partnershipsModalPopup1.classList.add('show')
    //     fbq('track','ViewContent',{ content_name: 'Partnerships__modal-open' });
    // }))

    // partnershipsModalClose1.addEventListener('click', (function () {
    //     partnershipsModalPopup1.classList.remove('show')
    // }))

    // partnershipsModalOkButton1.addEventListener('click', (function () {
    //     partnershipsModalPopup1.classList.remove('show')
    // }))

    // partnershipsModalOpenX.addEventListener('click', (function (e) {
    //     partnershipsModalPopupX.classList.add('show')
    //     fbq('track','ViewContent',{ content_name: 'Partnerships__trillion-X-modal-open' });
    // }))

    // partnershipsModalCloseX.addEventListener('click', (function () {
    //     partnershipsModalPopupX.classList.remove('show')
    // }))

    // partnershipsModalOkButtonX.addEventListener('click', (function () {
    //     partnershipsModalPopupX.classList.remove('show')
    // }))
if (caseModalOpen) {
    caseModalOpen.addEventListener('click', (function (e) {
        caseModalPopup.classList.add('show')
        fbq('track','ViewContent',{ content_name: 'Case__modal-open' });
    }))
}

if (caseModalClose) {
    caseModalClose.addEventListener('click', (function () {
        caseModalPopup.classList.remove('show')
    }))
}
if (caseModalOkButton) {
    caseModalOkButton.addEventListener('click', (function () {
        caseModalPopup.classList.remove('show')
    }))
}
if (expertiseModalClose) {
    expertiseModalClose.addEventListener('click', (function () {
        expertiseModalPopup.classList.remove('show')
    }))
}
if (expertiseModalOkButton) {
    expertiseModalOkButton.addEventListener('click', (function () {
        expertiseModalPopup.classList.remove('show')
    }))
}
/* /MODAL POPUPS */

/* SEND FORM */
let formResult = document.querySelector('#result');
let formResultClose = document.querySelector('#contacts__form-result-close')
let formResultOkButton = document.querySelector('#contacts__form-result-button')

if (formResultOkButton) {
    formResultOkButton.addEventListener('click', (function (e) {
        formResult.classList.remove('show')
    }))
}

if (formResultClose) {
    formResultClose.addEventListener('click', (function (e) {
        formResult.classList.remove('show')
    }))
}

// Contact form
    /* CAPTCHA GOOGLE */
    let inputs = document.querySelectorAll('input')
    let formWrap = document.querySelectorAll('form')
    let buttons = document.querySelectorAll('button')
    let x = 1;

    function reCaptchaScriptAdd() {
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LeEQGwdAAAAAACTKJAKrSdTTLIlEdotiI5MyJFW';
        head.append(script);
        x++
    }

    reCaptchaScriptAdd()


    if (inputs) {
        formWrap.forEach((form) => {
            form.addEventListener('submit', (e) => {
                console.log(form)
                e.preventDefault()

                    if (x === 1) {
                        reCaptchaScriptAdd()
                        x++
                    }

                    if (grecaptcha) {
                            grecaptcha.ready(function() {
                                grecaptcha.execute('6LeEQGwdAAAAAACTKJAKrSdTTLIlEdotiI5MyJFW', {action:'validate_captcha'})
                                    .then(function(token) {
                                            inputs.forEach((input) => {
                                                if (input.classList.contains('g-recaptcha-response')) {
                                                    input.value = token.toString()
                                                }
                                            })
                                    }).then((e) => {
                                        if (form.elements['g-recaptcha-response'].value){
                                            buttons.forEach((button) => {
                                                button.setAttribute('disabled', '')
                                            })
                                            fetch("./php/contact_form.php", {
                                                body: new FormData(form),
                                                method: "post",
                                            }).then(res => {
                                                if (res.ok) {
                                                    buttons.forEach((button) => {
                                                        button.removeAttribute('disabled')
                                                    })
                                                    dataLayer.push({'event': 'formsend'});
                                                    formResult.classList.add('show')
                                                    document.getElementById("result__submit").textContent = 'The email was sent successfully.'
                                                } else {
                                                    buttons.forEach((button) => {
                                                        button.removeAttribute('disabled')
                                                    })
                                                    formResult.classList.add('show')
                                                    document.getElementById("result__submit").textContent = 'Message was not send! Please contact us with your request at info@trillion.jewelry'
                                                }
                                                console.log(res)
                                            })
                                        }
                                })
                            });
                    }
            })
        })
    }
    /* /CAPTCHA GOOGLE */


    /* GEO IP */
    function geoip(json){
        let storyFeed = document.querySelector('#storyfeed')
        let userip = document.getElementById("user_ip");
        let countrycode = document.getElementById("country_code");

        if(storyFeed){
            if (json.country_code === 'RU' || json.country_code === 'BY') {
                storyFeed.style.display = 'none'
            } else {
                if (storyFeed) {
                    storyFeed.style.display = 'block'
                }
            }
        }

        countrycode.value = json.country_code;
        userip.value = json.ip;
    }


    /* ///GEO IP */

/* /SEND FORM */

/* SWIPERS INITIALIZATIONS */
let typesSwiperMenu = ['Rings', 'Earrings', 'Necklaces'];
const swiper = new Swiper('.types__swiper', {
    loop: false,
    slidesOffsetAfter: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (typesSwiperMenu[index]) + '</span>';
        },
    },
    breakpoints: {
        768: {
            loop: false,
            slidesPerView: 3,
            spaceBetween: 0,
            freeMode: true,
            pagination: false
        }
    }
});

const expertiseSwiper = new Swiper('.expertise__swiper', {
    loop: true,
    spaceBetween: 12,
    slidesPerView: 'auto',
    slidesOffsetAfter: 0,
    breakpoints: {
        1180: {
            loop: false,
            slidesPerView: 5,
            spaceBetween: 25,
            freeMode: true
        }
    }
});

const teamSwiper = new Swiper('.team__swiper', {
    loop: false,
    spaceBetween: 12,
    slidesPerView: 'auto',
    slidesOffsetAfter: 0,
    breakpoints: {
        768: {
            spaceBetween: 24,
        }
    }
});

const thumbsCaseSwiper = new Swiper('.thumb__case_swiper', {
    spaceBetween: 0,
    slidesPerView: '2',
    slideToClickedSlide: true,
    loop: false,
});
const caseSwiper = new Swiper('.case__swiper', {
    loop: false,
    spaceBetween: 12,
    slidesPerView: 'auto',
    slidesOffsetAfter: 0,
    thumbs: {
        swiper: thumbsCaseSwiper,
        slideThumbActiveClass: 'thumb-case-swiper-active'
    },
    breakpoints: {
        768: {
            spaceBetween: 24,
        }
    }
});

const pressSwiper = new Swiper('.press__swiper', {
    loop: true,
    spaceBetween: 12,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 4000
    },
    slidesPerView: 'auto',
    breakpoints: {
        768: {
            spaceBetween: 24,
        }
    }
});

const screenshotSwiper = new Swiper('.screenshot__swiper', {
    spaceBetween: 10,
    slidesPerView: 'auto',
})

const photoSwiper = new Swiper('.photo__swiper', {
    spaceBetween: 10,
    slidesPerView: 'auto',
})

const tryonSwiper = new Swiper('.tryon__swiper', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    breakpoints: {
        768: {
            spaceBetween: 25,
        }
    }
})

const viewerSwiper = new Swiper('.viewer__swiper', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    breakpoints: {
        768: {
            spaceBetween: 25,
        }
    }
})

/* /SWIPERS INITIALIZATIONS */


/* EXPERIENCE VIDEO */
let experienceVideo = document.querySelector('#experience__video');
let experienceOpenButton = document.querySelector('#experience__video-open');
let experienceOpenButtonStart = document.querySelector('#experience__video-start');
let experienceCloseButton = document.querySelector('#experience__video-close');
const experienceVideoTag = document.getElementById('experience__video-tag');

if (experienceOpenButton) {
    experienceOpenButton.addEventListener('click', (function (e) {
        dataLayer.push({'event': 'video_try'});
        const sourceElementMov = document.createElement('source');
        const sourceElementMp4 = document.createElement('source');
        const sourceElementWebm = document.createElement('source');
        const sourceElementOgv = document.createElement('source');
        sourceElementMov.src = "video/1.1_Rings_1.mov";
        sourceElementMp4.src = "video/1.1_Rings.mp4"
        sourceElementMp4.type = "video/mp4"
        sourceElementWebm.src = "video/1.1_Rings.webm"
        sourceElementWebm.type = "video/webm"
        sourceElementOgv.src = "video/1.1_Rings.ogv"
        sourceElementOgv.type = "video/ogg"
        experienceVideoTag.append(sourceElementMov);
        experienceVideoTag.append(sourceElementMp4);
        experienceVideoTag.append(sourceElementWebm);
        experienceVideoTag.append(sourceElementOgv);
        experienceVideoTag.play();
        experienceVideo.classList.add('experience__video-on');
        experienceOpenButton.classList.add('disable');
        experienceOpenButtonStart.classList.add('disable');
        experienceCloseButton.classList.add('experience__video-close-on');
    }));
}

if (experienceOpenButtonStart) {
    experienceOpenButtonStart.addEventListener('click', (function (e) {
        dataLayer.push({'event': 'video_try'});
        const sourceElementMov = document.createElement('source');
        const sourceElementMp4 = document.createElement('source');
        const sourceElementWebm = document.createElement('source');
        const sourceElementOgv = document.createElement('source');
        sourceElementMov.src = "video/1.1_Rings_1.mov";
        sourceElementMp4.src = "video/1.1_Rings.mp4"
        sourceElementMp4.type = "video/mp4"
        sourceElementWebm.src = "video/1.1_Rings.webm"
        sourceElementWebm.type = "video/webm"
        sourceElementOgv.src = "video/1.1_Rings.ogv"
        sourceElementOgv.type = "video/ogg"
        experienceVideoTag.append(sourceElementMov);
        experienceVideoTag.append(sourceElementMp4);
        experienceVideoTag.append(sourceElementWebm);
        experienceVideoTag.append(sourceElementOgv);
        experienceVideoTag.play();
        experienceVideo.classList.add('experience__video-on');
        experienceOpenButton.classList.add('disable');
        experienceOpenButtonStart.classList.add('disable');
        experienceCloseButton.classList.add('experience__video-close-on');
    }));
}

if (experienceCloseButton) {
    experienceCloseButton.addEventListener('click', (function (e) {
        experienceVideoTag.pause();
        experienceVideo.classList.remove('experience__video-on');
        experienceCloseButton.classList.remove('experience__video-close-on');
        experienceOpenButton.classList.remove('disable');
        experienceOpenButtonStart.classList.remove('disable');
    }));
}

/* /EXPERIENCE VIDEO */




/* TYPES VIDEOS */
let necklacesWrap = document.querySelector('.necklaces');

let ringsVideo = document.querySelector('#rings__video')
let earringsVideo = document.querySelector('#earrings__video')
let necklacesVideo = document.querySelector('#necklaces__video')

let ringsVideoButton = document.querySelector('#rings');
let earringsVideoButton = document.querySelector('#earrings');
let necklacesVideoButton = document.querySelector('#necklaces');

let ringsVideoButtonMobile = document.querySelector('#rings__button');
let earringsVideoButtonMobile = document.querySelector('#earrings__button');
let necklacesVideoButtonMobile = document.querySelector('#necklaces__button');

let ringsHover = document.querySelector('#rings__hover');
let earringsHover = document.querySelector('#earrings__hover');
let necklacesHover = document.querySelector('#necklaces__hover');

let ringsClose = document.querySelector('#rings__close');
let earringsClose = document.querySelector('#earrings__close');
let necklacesClose = document.querySelector('#necklaces__close');

if (ringsVideoButton) {
    ringsVideoButton.addEventListener('click', (function (e) {
        const sourceElementMov = document.createElement('source');
        const sourceElementMp4 = document.createElement('source');
        const sourceElementWebm = document.createElement('source');
        const sourceElementOgv = document.createElement('source');
        sourceElementMov.src = "video/1.2_Rings.mov";
        sourceElementMp4.src = "video/1.2_Rings.mp4"
        sourceElementMp4.type = "video/mp4"
        sourceElementWebm.src = "video/1.2_Rings.webm"
        sourceElementWebm.type = "video/webm"
        sourceElementOgv.src = "video/1.2_Rings.ogv"
        sourceElementOgv.type = "video/ogg"
        ringsVideo.append(sourceElementMov);
        ringsVideo.append(sourceElementMp4);
        ringsVideo.append(sourceElementWebm);
        ringsVideo.append(sourceElementOgv);
        ringsVideo.play()
        earringsVideo.pause()
        necklacesVideo.pause()
        dataLayer.push({'event': 'rings'});
        fbq('track','ViewContent',{ content_name: 'Types__rings-video-play' });
        ringsHover.classList.add('rings__content-video-on');
        earringsHover.classList.add('hide');
        earringsHover.classList.remove('earrings__content-video-on');
        necklacesHover.classList.remove('hide');
        necklacesHover.classList.remove( 'necklaces__content-video-on');
        necklacesWrap.style.background = 'radial-gradient(71.75% 71.75% at 50.61% -1.8%, #2B3A43 0%, #222D33 100%)';
    }));
}

if (ringsVideoButtonMobile) {
    ringsVideoButtonMobile.addEventListener('click', (function (e) {
        const sourceElementMov = document.createElement('source');
        const sourceElementMp4 = document.createElement('source');
        const sourceElementWebm = document.createElement('source');
        const sourceElementOgv = document.createElement('source');
        sourceElementMov.src = "video/1.2_Rings.mov";
        sourceElementMp4.src = "video/1.2_Rings.mp4"
        sourceElementMp4.type = "video/mp4"
        sourceElementWebm.src = "video/1.2_Rings.webm"
        sourceElementWebm.type = "video/webm"
        sourceElementOgv.src = "video/1.2_Rings.ogv"
        sourceElementOgv.type = "video/ogg"
        ringsVideo.append(sourceElementMov);
        ringsVideo.append(sourceElementMp4);
        ringsVideo.append(sourceElementWebm);
        ringsVideo.append(sourceElementOgv);
        ringsVideo.play()
        earringsVideo.pause()
        necklacesVideo.pause()
        dataLayer.push({'event': 'rings'});
        fbq('track','ViewContent',{ content_name: 'Types__rings-video-play' });
        ringsHover.classList.add('rings__content-video-on');
        earringsHover.classList.add('hide');
        earringsHover.classList.remove('earrings__content-video-on');
        necklacesHover.classList.remove('hide');
        necklacesHover.classList.remove( 'necklaces__content-video-on');
        necklacesWrap.style.background = 'radial-gradient(71.75% 71.75% at 50.61% -1.8%, #2B3A43 0%, #222D33 100%)';
    }));
}
if (ringsClose) {
    ringsClose.addEventListener('click', (function (e) {
        ringsVideo.pause()
        ringsHover.classList.remove('rings__content-video-on');
        earringsHover.classList.remove('hide');
    }));
}

if (earringsVideoButton) {
    earringsVideoButton.addEventListener('click', (function (e) {
        const sourceElementMov = document.createElement('source');
        const sourceElementMp4 = document.createElement('source');
        const sourceElementWebm = document.createElement('source');
        const sourceElementOgv = document.createElement('source');
        sourceElementMov.src = "video/5_Earrings.mov";
        sourceElementMp4.src = "video/5_Earrings.mp4"
        sourceElementMp4.type = "video/mp4"
        sourceElementWebm.src = "video/5_Earrings.webm"
        sourceElementWebm.type = "video/webm"
        sourceElementOgv.src = "video/5_Earrings.ogv"
        sourceElementOgv.type = "video/ogg"
        earringsVideo.append(sourceElementMov);
        earringsVideo.append(sourceElementMp4);
        earringsVideo.append(sourceElementWebm);
        earringsVideo.append(sourceElementOgv);
        earringsVideo.play()
        ringsVideo.pause()
        necklacesVideo.pause()
        dataLayer.push({'event': 'earrings'});
        fbq('track','ViewContent',{ content_name: 'Types__earrings-video-play' });
        earringsHover.classList.add('earrings__content-video-on');
        necklacesHover.classList.add('hide');
        earringsHover.classList.add('hide');
        ringsHover.classList.remove('rings__content-video-on');
        necklacesHover.classList.remove( 'necklaces__content-video-on');
        necklacesWrap.style.background = 'radial-gradient(71.75% 71.75% at 50.61% -1.8%, #2B3A43 0%, #222D33 100%)';
    }));
}

if (earringsVideoButtonMobile) {
    earringsVideoButtonMobile.addEventListener('click', (function (e) {
        const sourceElementMov = document.createElement('source');
        const sourceElementMp4 = document.createElement('source');
        const sourceElementWebm = document.createElement('source');
        const sourceElementOgv = document.createElement('source');
        sourceElementMov.src = "video/5_Earrings.mov";
        sourceElementMp4.src = "video/5_Earrings.mp4"
        sourceElementMp4.type = "video/mp4"
        sourceElementWebm.src = "video/5_Earrings.webm"
        sourceElementWebm.type = "video/webm"
        sourceElementOgv.src = "video/5_Earrings.ogv"
        sourceElementOgv.type = "video/ogg"
        earringsVideo.append(sourceElementMov);
        earringsVideo.append(sourceElementMp4);
        earringsVideo.append(sourceElementWebm);
        earringsVideo.append(sourceElementOgv);
        earringsVideo.play()
        ringsVideo.pause()
        necklacesVideo.pause()
        dataLayer.push({'event': 'earrings'});
        fbq('track','ViewContent',{ content_name: 'Types__earrings-video-play' });
        earringsHover.classList.add('earrings__content-video-on');
        necklacesHover.classList.add('hide');
        earringsHover.classList.add('hide');
        ringsHover.classList.remove('rings__content-video-on');
        necklacesHover.classList.remove( 'necklaces__content-video-on');
        necklacesWrap.style.background = 'radial-gradient(71.75% 71.75% at 50.61% -1.8%, #2B3A43 0%, #222D33 100%)';
    }));
}

if (earringsClose) {
    earringsClose.addEventListener('click', (function (e) {
        earringsVideo.pause()
        earringsHover.classList.remove('earrings__content-video-on');
        necklacesHover.classList.remove('hide');
        earringsHover.classList.remove('hide');
    }));
}

if (necklacesVideoButton) {
    necklacesVideoButton.addEventListener('click', (function (e) {
        const sourceElementMov = document.createElement('source');
        const sourceElementMp4 = document.createElement('source');
        const sourceElementWebm = document.createElement('source');
        const sourceElementOgv = document.createElement('source');
        sourceElementMov.src = "video/3_Necklace.mov";
        sourceElementMp4.src = "video/3_Necklace.mp4"
        sourceElementMp4.type = "video/mp4"
        sourceElementWebm.src = "video/3_Necklace.webm"
        sourceElementWebm.type = "video/webm"
        sourceElementOgv.src = "video/3_Necklace.ogv"
        sourceElementOgv.type = "video/ogg"
        necklacesVideo.append(sourceElementMov);
        necklacesVideo.append(sourceElementMp4);
        necklacesVideo.append(sourceElementWebm);
        necklacesVideo.append(sourceElementOgv);
        necklacesVideo.play()
        earringsVideo.pause()
        ringsVideo.pause()
        dataLayer.push({'event': 'necklaces'});
        fbq('track','ViewContent',{ content_name: 'Types__necklaces-video-play' });
        necklacesHover.classList.add('necklaces__content-video-on');
        necklacesHover.classList.add('hide');
        earringsHover.classList.remove('earrings__content-video-on');
        ringsHover.classList.remove('rings__content-video-on');
        earringsHover.classList.remove('hide');
        necklacesWrap.style.background = '#FFF';
    }));
}

if (necklacesVideoButtonMobile) {
    necklacesVideoButtonMobile.addEventListener('click', (function (e) {
        const sourceElementMov = document.createElement('source');
        const sourceElementMp4 = document.createElement('source');
        const sourceElementWebm = document.createElement('source');
        const sourceElementOgv = document.createElement('source');
        sourceElementMov.src = "video/3_Necklace.mov";
        sourceElementMp4.src = "video/3_Necklace.mp4"
        sourceElementMp4.type = "video/mp4"
        sourceElementWebm.src = "video/3_Necklace.webm"
        sourceElementWebm.type = "video/webm"
        sourceElementOgv.src = "video/3_Necklace.ogv"
        sourceElementOgv.type = "video/ogg"
        necklacesVideo.append(sourceElementMov);
        necklacesVideo.append(sourceElementMp4);
        necklacesVideo.append(sourceElementWebm);
        necklacesVideo.append(sourceElementOgv);
        necklacesVideo.play()
        earringsVideo.pause()
        ringsVideo.pause()
        dataLayer.push({'event': 'necklaces'});
        fbq('track','ViewContent',{ content_name: 'Types__necklaces-video-play' });
        necklacesHover.classList.add('necklaces__content-video-on');
        necklacesHover.classList.add('hide');
        earringsHover.classList.remove('earrings__content-video-on');
        ringsHover.classList.remove('rings__content-video-on');
        earringsHover.classList.remove('hide');
        necklacesWrap.style.background = '#FFF';
    }));
}

if (necklacesClose) {
    necklacesClose.addEventListener('click', (function (e) {
        necklacesVideo.pause()
        necklacesHover.classList.remove( 'necklaces__content-video-on');
        necklacesHover.classList.remove('hide');
        necklacesWrap.style.background = 'radial-gradient(71.75% 71.75% at 50.61% -1.8%, #2B3A43 0%, #222D33 100%)';
    }));
}
/* /TYPES VIDEOS */




/* SCROLL MAGIC */

let controller = new ScrollMagic.Controller();

    /* HERO */
new ScrollMagic.Scene({
    triggerElement: "#header_trigger",
    reverse: false,
})
    .setClassToggle("#hero__reveal", "visible") 
    .addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#header_trigger",
    reverse: false,
})
    .setClassToggle("#hero_title_reveal", "visible") 
    .addTo(controller);

    /* /HERO */




    /* EXPERIENCE */
    new ScrollMagic.Scene({
    triggerElement: "#experience__trigger1",
    triggerHook: 0.9, 
    offset: 50, 
    reverse: false,
})
    .setClassToggle("#reveal__item1", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#experience__trigger1",
    triggerHook: 0.9, 
    offset: 50, 
    reverse: false,
})
    .setClassToggle("#reveal__item2", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#experience__trigger1",
    triggerHook: 0.9, 
    offset: 50, 
    reverse: false,
})
    .setClassToggle("#reveal__item3", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#experience__trigger2",
    triggerHook: 0.9, 
    offset: 50, 
    reverse: false,
})
    .setClassToggle("#reveal__item4", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#experience__trigger3",
    triggerHook: 0.9,
    offset: 50,
    reverse: false,
})
    .setClassToggle("#reveal__item5", "visible")
    .addTo(controller);
    /* /EXPERIENCE */


    /* TYPE */
new ScrollMagic.Scene({
    triggerElement: "#type",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#type__reveal", "visible") 
    .addTo(controller);
    /* /TYPE */


    /* UNIQUE */
new ScrollMagic.Scene({
    triggerElement: "#unique__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#unique__reveal1", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#unique__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#unique__reveal2", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#unique__trigger2",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#unique__reveal3", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#unique__trigger2",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#unique__reveal4", "visible") 
    .addTo(controller);
    /* /UNIQUE */


/* PARTNERSHIPS */
new ScrollMagic.Scene({
    triggerElement: "#partnerships__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#partnerships__title", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#partnerships__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#partnerships__title1", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#partnerships__trigger_block",
    triggerHook: 0.7,
    offset: 100,
    reverse: false,
})
    .setClassToggle("#partnerships__block", "visible")
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#partnerships__trigger1",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#partnerships__reveal1", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#partnerships__trigger2",
    triggerHook: 0.6, 
    offset: 150, 
    reverse: false,
})
    .setClassToggle("#partnerships__reveal2", "visible") 
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#partnerships__trigger3",
    triggerHook: 0.7,
    offset: 100,
    reverse: false,
})
    .setClassToggle("#partnerships__reveal3", "visible")
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#partnerships__trigger4",
    triggerHook: 0.6,
    offset: 150,
    reverse: false,
})
    .setClassToggle("#partnerships__reveal4", "visible")
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#partnerships__email_id",
    triggerHook: 0.6,
    offset: 150,
    reverse: false,
})
    .setClassToggle("#partnerships__email_reveal", "visible")
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#partnerships__form_id",
    triggerHook: 0.6,
    offset: 150,
    reverse: false,
})
    .setClassToggle("#partnerships__form_reveal", "visible")
    .addTo(controller);
/* /PARTNERSHIPS */


    /* EXPERTISE */
new ScrollMagic.Scene({
    triggerElement: "#expertise__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#expertise__reveal1", "visible") 
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#expertise__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#expertise__reveal2", "visible") 
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#expertise__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#expertise__reveal3", "visible") 
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#expertise__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#expertise__reveal4", "visible") 
    .addTo(controller);
new ScrollMagic.Scene({
    triggerElement: "#expertise__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#expertise__reveal5", "visible") 
    .addTo(controller);

    /* /EXPERTISE */



    // TRYON
    
    new ScrollMagic.Scene({
        triggerElement: "#tryon__trigger",
        reverse: false,
    })
        .setClassToggle("#tryon__reveal", "visible") 
        .addTo(controller);

    // /TRYON 




    /* CASE */
new ScrollMagic.Scene({
    triggerElement: "#case__trigger",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#case__reveal", "visible") 
    .addTo(controller);
    /* /CASE */

    /* TEAM */
new ScrollMagic.Scene({
    triggerElement: "#team__trigger1",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__reveal1", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger1",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__reveal2", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger1",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__reveal3", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger2",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__reveal4", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger2",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__reveal5", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger2",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__reveal6", "visible") 
    .addTo(controller);




new ScrollMagic.Scene({
    triggerElement: "#team__trigger__desktop1",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__desktop-reveal1", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger__desktop1",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__desktop-reveal2", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger__desktop1",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__desktop-reveal3", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger__desktop2",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__desktop-reveal4", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger__desktop2",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__desktop-reveal5", "visible") 
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#team__trigger__desktop2",
    triggerHook: 0.7, 
    offset: 100, 
    reverse: false,
})
    .setClassToggle("#team__desktop-reveal6", "visible") 
    .addTo(controller);
    /* /TEAM */
/* /SCROLL MAGIC */