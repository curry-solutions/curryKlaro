// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var klaroConfig = {
    version: 2,
    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',
    lang: 'de',

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 365,

    // Defines the default state for servicelications (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party services.
    mustConsent: false,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptAll: true,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptDefault: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: true,

    noFloating: false,
    noNotice: false,
    hideToggleAll: true,

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    //lang: 'en',

    // You can overwrite existing translations and add translations for your
    // service descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
        // If you erase the "consentModal" translations, Klaro will use the
        // bundled translations.
        de: {
            privacyPolicyUrl: '/#privacy',
            closeButtonHTML:
                '<button class="btn btn-outline-light icon-only"><i class="icon icon-cross2"></i></button>',
            // Put a link to your privacy policy here (relative or absolute).
            consentModal: {
                title: 'Titel',
                description:
                    'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln. Einträge die als "Beispiel" gekennzeichnet sind dienen lediglich zu Demonstrationszwecken und werden nicht wirklich verwendet.',
                privacyPolicy: {
                    text: 'Hier können Sie Ihren eigenen Datenschutztext oder einen Link zur {privacyPolicy} hinterlegen.',
                    name: 'Datenschutzseite',
                },
            },
            consentNotice: {
                changeDescription:
                    'Etwas hat sich seit Ihrem letzten Besuch verändert.',
                description:
                    'Wir speichern und verarbeiten Ihre personenbezogenen Informationen für folgende Zwecke: {purposes}. Ihre Einwilligung können Sie jederzeit auf unserer {privacyPolicy} widerrufen.',
                learnMore: 'mehr erfahren',
            },
            inlineTracker: {
                description: 'Beispiel für ein Inline-Tracking Skript',
            },
            externalTracker: {
                description: 'Beispiel für ein externes Tracking Skript',
            },
            adsense: {
                description: 'Anzeigen von Werbeanzeigen (Beispiel)',
            },
            matomo: {
                description: 'Sammeln von Besucherstatistiken',
            },
            camera: {
                description:
                    'Eine Überwachungskamera (nur ein Beispiel zu IMG-Tags)',
            },
            cloudflare: {
                description: 'Schutz gegen DDoS-Angriffe',
            },
            intercom: {
                description:
                    'Chat Widget & Sammeln von Besucherstatistiken (nur ein Beispiel)',
            },
            mouseflow: {
                description: 'Echtzeit-Benutzeranalyse (nur ein Beispiel)',
            },
            googleFonts: {
                description: 'Web-Schriftarten von Google gehostet',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
                security: 'Sicherheit',
                livechat: 'Live Chat',
                advertising: 'Anzeigen von Werbung',
                styling: 'Styling',
            },
        },
        en: {
            consentModal: {
                title: 'Titel',
                description:
                    'Here you can see and customize the information that we collect about you. Entries marked as "Example" are just for demonstration purposes and are not really used on this website.',
                privacyPolicy: {
                    text: 'Here you can write your own data protection Text.',
                    name: 'data protection',
                },
            },
            inlineTracker: {
                description: 'Example of an inline tracking script',
            },
            externalTracker: {
                description: 'Example of an external tracking script',
            },
            adsense: {
                description: 'Displaying of advertisements (just an example)',
            },
            matomo: {
                description: 'Collecting of visitor statistics',
            },
            camera: {
                description:
                    'A surveillance camera (just an example for an IMG tag)',
            },
            cloudflare: {
                description: 'Protection against DDoS attacks',
            },
            intercom: {
                description:
                    'Chat widget & collecting of visitor statistics (just an example)',
            },
            mouseflow: {
                description: 'Real-Time user analytics (just an example)',
            },
            googleFonts: {
                description: 'Web fonts hosted by Google',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                livechat: 'Livechat',
                advertising: 'Advertising',
                styling: 'Styling',
            },
            consentNotice: {
                changeDescription: 'Something has changed',
                description:
                    'We collect and process your personal information for the following purposes: {purposes}. You can withdraw your consent at any time on our {privacyPolicy} website.',
                learnMore: 'learn more',
            },
        },
        tr: {
            consentModal: {
                description:
                    'Hakkınızda topladığımız bilgileri burada görebilir ve özelleştirebilirsiniz. "Örnek" olarak belirtilenler sadece gösterim amaçlıdır ve gerçekte bu site için kullanılmazlar.',
            },
            inlineTracker: {
                description: 'Satıriçi takip kodu için bir örnek',
            },
            externalTracker: {
                description: 'Dışarıdan çağırılan bir takip kodu için örnek',
            },
            adsense: {
                description: 'Reklam görüntüleme (sadece örnek)',
            },
            matomo: {
                description: 'Ziyaretçi istatistiklerini toplama',
            },
            camera: {
                description:
                    'İzleme kamerası (IMG tag icin saçma bir örnek daha)',
            },
            cloudflare: {
                description: 'DDoS saldırılarına karşı koruma',
            },
            intercom: {
                description:
                    'Sohbet aracı ve ziyaretçi istatistiklerini toplama (sadece bir örnek)',
            },
            mouseflow: {
                description:
                    'Gerçek zamanlı kullanıcı istatistiği (sadece bir örnek)',
            },
            googleFonts: {
                description:
                    'Google tarafından barındırılan Web Yazıtipi bilgileri',
            },
            purposes: {
                analytics: 'Analitik',
                security: 'Güvenlik',
                livechat: 'Canlı Sohbet',
                advertising: 'Reklam',
                styling: 'Biçimlendirme',
            },
        },
    },

    // This is a list of third-party services that Klaro will manage for you.
    services: [
        {
            // Each service should have a unique (and short) name.
            name: 'matomo',

            // If "default" is set to true, the service will be enabled by default
            // Overwrites global "default" setting.
            // We recommend leaving this to "false" for services that collect
            // personal information.
            default: true,

            // The title of you service as listed in the consent modal.
            title: 'Matomo/Piwik',

            // The purpose(s) of this service. Will be listed on the consent notice.
            // Do not forget to add translations for all purposes you list here.
            purposes: ['analytics'],

            // A list of regex expressions or strings giving the names of
            // cookies set by this service. If the user withdraws consent for a
            // given service, Klaro will then automatically delete all matching
            // cookies.
            cookies: [
                // you can also explicitly provide a path and a domain for
                // a given cookie. This is necessary if you have services that
                // set cookies for a path that is not "/" or a domain that
                // is not the current domain. If you do not set these values
                // properly, the cookie can't be deleted by Klaro
                // (there is no way to access the path or domain of a cookie in JS)
                [/^_pk_.*$/, '/', 'klaro.kiprotect.com'], //for the production version
                [/^_pk_.*$/, '/', 'localhost'], //for the local version
                'piwik_ignore',
            ],

            // An optional callback function that will be called each time
            // the consent state for the service changes (true=consented). Passes
            // the `service` config as the second parameter as well.
            callback: function (consent, service) {
                // This is an example callback function.
                console.log(
                    'User consent for service ' +
                        service.name +
                        ': consent=' +
                        consent
                );
            },

            // If "required" is set to true, Klaro will not allow this service to
            // be disabled by the user.
            required: true,

            // If "optOut" is set to true, Klaro will load this service even before
            // the user gave explicit consent.
            // We recommend always leaving this "false".
            optOut: false,

            // If "onlyOnce" is set to true, the service will only be executed
            // once regardless how often the user toggles it on and off.
            onlyOnce: true,
        },

        // The services will serviceear in the modal in the same order as defined here.
        {
            name: 'inlineTracker',
            title: 'Inline Tracker',
            purposes: ['analytics'],
            cookies: ['inline-tracker'],
            optOut: false,
        },
        {
            name: 'externalTracker',
            title: 'External Tracker',
            purposes: ['analytics', 'security'],
            cookies: ['external-tracker'],
        },
        {
            name: 'intercom',
            title: 'Intercom',
            default: true,
            purposes: ['livechat'],
        },
        {
            name: 'mouseflow',
            title: 'Mouseflow',
            purposes: ['analytics'],
        },
        {
            name: 'adsense',
            title: 'Google AdSense',
            purposes: ['advertising'],
        },
        {
            name: 'camera',
            title: 'Surveillance Camera',
            purposes: ['security'],
        },
        {
            name: 'googleFonts',
            title: 'Google Fonts',
            purposes: ['styling'],
        },
        {
            name: 'cloudflare',
            title: 'Cloudflare',
            purposes: ['security'],
            required: true,
        },
    ],
};
