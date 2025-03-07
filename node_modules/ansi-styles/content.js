(function () {
    'use strict';

    function createButtons() {
        const buttonContainer = document.createElement('div');
        buttonContainer.style.position = 'fixed';
        buttonContainer.style.bottom = '20px';
        buttonContainer.style.right = '20px';
        buttonContainer.style.zIndex = '9999';
        buttonContainer.style.display = 'flex';
        buttonContainer.style.flexDirection = 'column';
        buttonContainer.style.gap = '10px';

        const emailProviders = [
            { name: 'Gmail', value: 'gmail.com', color: '#4285F4' },
            { name: 'Yahoo', value: 'yahoo.com', color: '#720E8C' },
            { name: 'Comcast', value: 'comcast.net', color: '#00A3E0' },
            { name: 'AOL', value: 'aol.com', color: '#FFCC00' },
            { name: 'Hotmail', value: 'hotmail.com', color: '#0072C6' },
            { name: 'Outlook', value: 'outlook.com', color: '#0072C6' },
        ];

        emailProviders.forEach(provider => {
            let button = document.createElement('button');
            button.innerText = provider.name;
            button.style.backgroundColor = provider.color;
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.padding = '10px 15px';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';

            button.addEventListener('click', () => {
                const firstActiveCard = document.querySelector('.leads-list-item-card[data-cy="lead-card-is-active-true"]');
                let name = '', location = '';

                if (firstActiveCard) {
                    const nameElement = firstActiveCard.querySelector('p.tw-m-0');
                    const locationElement = firstActiveCard.querySelector('.tw-font-gordita-regular.tw-text-xs');
                    name = nameElement ? nameElement.innerText.trim() : '';
                    location = locationElement ? locationElement.innerText.trim() : '';
                }

                if (name && location) {
                    const searchQuery = `${name} in "${provider.value}" in ${location}`;
                    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&num=100`;
                    window.open(googleSearchUrl, '_blank');
                } else {
                    alert('Name or location not found in the active lead card.');
                }
            });

            buttonContainer.appendChild(button);
        });

        const customSearchEngines = [
            { name: 'TPS', color: '#FF5733', cx: 'd7aeeaafdf82a4083' },
            { name: 'E2', color: '#28A745', cx: '464b8de3b25134dd5' },
            { name: 'LKS', color: '#FFC107', cx: 'a41e29f69625e4b3b' }
        ];

        customSearchEngines.forEach(engine => {
            const button = document.createElement('button');
            button.innerText = engine.name;
            button.style.backgroundColor = engine.color;
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.padding = '10px 15px';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';

            button.addEventListener('click', () => {
                const firstActiveCard = document.querySelector('.leads-list-item-card[data-cy="lead-card-is-active-true"]');
                let name = '', location = '';

                if (firstActiveCard) {
                    const nameElement = firstActiveCard.querySelector('p.tw-m-0');
                    const locationElement = firstActiveCard.querySelector('.tw-font-gordita-regular.tw-text-xs');
                    name = nameElement ? nameElement.innerText.trim() : '';
                    location = locationElement ? locationElement.innerText.trim() : '';
                }

                if (name && location) {
                    const searchQuery = `${name} ${location}`;
                    const searchUrl = `https://cse.google.com/cse?cx=${engine.cx}#gsc.tab=0&gsc.q=${encodeURIComponent(searchQuery)}`;
                    window.open(searchUrl, '_blank');
                } else {
                    alert('Name or location not found in the active lead card.');
                }
            });

            buttonContainer.appendChild(button);
        });

        document.body.appendChild(buttonContainer);
    }

    window.addEventListener('load', () => {
        setTimeout(createButtons, 3000);
    });
})();
