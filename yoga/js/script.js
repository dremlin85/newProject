window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
        function hideContentTab(a) {
            for ( let i = a; i < tabContent.length; i++ ) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
    
            }
        }
        hideContentTab(1);
        function showContentTab(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');

            }
        }
        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideContentTab(0);
                        showContentTab(i);
                        break;
                    }
                }
            }
        });

        let deadline = '2019-09-11';

        function getTimeRemaining (endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)));
                return {
                    'total': t,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
        }
        function setClock(id, endtime) {
            let timer = document.getElementById('timer'),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);
                
                function updateClock () {
                    let t = getTimeRemaining(endtime);

                    function addZero(num) {
                        if (num <=9) {
                            return '0' + num;
                        } else {
                            return num
                        }
                    
                                              
                    };

                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
                    if (t.total <= 0) {
                        clearInterval(timeInterval);
                        timer.textContent = '00:00:00';
                    }    
                } 
                

        }
        setClock('timer', deadline);


        let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('.more-splash');
        document.body.style.overflow = 'hidden';
    });
<<<<<<< HEAD
    
=======
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('.more-splash');
        document.body.style.overflow = '';
    });    
    });
>>>>>>> 9d0d56f876e8ee5656687a7c14df180fdf22236c

    
    