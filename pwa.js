(function () {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/sw.js').catch(function () {});
        });
    }

    function showWelcomeNotification() {
        if (!('Notification' in window)) return;

        var title = 'ShokherSrity';
        var options = {
            body: 'Premium wedding photography in Bangladesh. Book your date today!',
            icon: '/attached_assets/logo.webp',
            badge: '/attached_assets/logo.webp',
            tag: 'shokhersrity-welcome',
            renotify: false,
        };

        if (Notification.permission === 'granted') {
            new Notification(title, options);
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    new Notification(title, options);
                }
            });
        }
    }

    window.addEventListener('load', function () {
        setTimeout(showWelcomeNotification, 3000);
    });
})();
