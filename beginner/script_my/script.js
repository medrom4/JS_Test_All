(() => {

    document.querySelector('.tabs-header').addEventListener('click', fTabs);

    function fTabs(event) {

        if (event.target.className == 'tab-h') {
            var dataTab = event.target.getAttribute('data-tab');

            //отключаю класс active            
            var tabH = document.getElementsByClassName('tab-h');
            for (i = 0; i < tabH.length; i++) {
                tabH[i].classList.remove('active');
            }
            event.target.classList.add('active');

            // daTab - номер вкладки, которую отображаем
            var tabBody = document.getElementsByClassName('tab-b');

            //все вкладки с содержимым
            for (var i = 0; i < tabBody.length; i++) {
                if (dataTab == i) {
                    tabBody[i].style.display = 'block';
                } else {
                    tabBody[i].style.display = 'none';
                }
            }

        }
    }

})();
