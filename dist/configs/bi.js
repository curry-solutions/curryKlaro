var klaroConfig = {
    version: 2,
    elementID: 'klaro',
    storageMethod: 'localStorage',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    lang: 'de',
    noNotice: false,
    noFloating: false,
    hideToggleAll: true,
    hideDeclineAll: false,
    acceptAll: true,
    default: false,
    translations: {
        de: {
            privacyPolicyUrl: '/datenschutz',
            listStatus: {
                open: 'Liste öffnen',
                closed: 'Liste schließen',
            },
            consentModal: {
                title: 'Wir verwenden folgende Drittanbieteranwendungen',
                description:
                    'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.',
                privacyPolicy: {
                    text: 'Mehr Informationen können Sie auf unserer {privacyPolicy} entnehmen.',
                    name: 'Datenschutzseite',
                },
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
                security: 'Sicherheit',
                accessibility: 'Nutzerzugänglichkeit',
                content: 'Inhalte',
                socialmedia: 'soziale Medien',
                interaction: 'Interaktion',
            },
            consentNotice: {
                changeDescription:
                    'Es gab Änderungen seit Ihrem letzten Besuch, bitte aktualisieren Sie Ihre Auswahl.',
                description:
                    'Über die zum Besuch unserer Seite technisch erforderlichen Cookies hinaus können auch solche zum Einsatz gelangen, welche der Besucherstatistik dienen sowie Funktionen von Drittanbietern. Bitte treffen Sie Ihre individuelle Entscheidung, welche Arten von Cookies Sie bei der Nutzung unserer Webseite zulassen möchten. Ihre Einwilligung können Sie jederzeit in den Cookie-Einstellungen widerrufen. Weitere Informationen finden Sie auf unserer {privacyPolicy}.',
                learnMore: 'Einstellungen',
            },
            ok: 'OK',
            save: 'Speichern',
            decline: 'Ablehnen',
            acceptSelected: 'Auswahl akzeptieren',
            acceptAll: 'Allen zustimmen',
            floatingButtonTitle: 'Cookie-Einstellungen',
            podigee: {
                description: 'Podigee stellt Audioinhalte zur Verfügung.',
            },
            googlerecaptcha: {
                description:
                    'ReCaptcha stellt Sicherheitsfunktionen zur Verfügung.',
            },
            youtube: {
                description: 'Stellt Videoinhalte per iFrame zur Verfügung',
            },
            matomo: {
                description: 'Sammeln von Besucherstatistiken',
            },
            Vimeo: {
                description: 'Stellt Videoinhalte per iFrame bereit.',
            },
            googlemaps: {
                description: 'Google Maps stellt Kartenmaterial zur Verfügung.',
            },
            facebook: {
                description:
                    'Facebook ermöglicht das Teilen und Liken von Beiträgen.',
            },
            userlike: {
                description:
                    'Stellt einen Chat mit den Ansprechpartnern von Bayern Innovativ bereit.',
            },
            soundcloud: {
                description: 'SoundCloud stellt Audioinhalte zur Verfügung.',
            },
        },
    },
    services: [
        {
            name: 'podigee',
            title: 'Podigee',
            purposes: ['content'],
            cookies: [],
            required: false,
            default: false,
        },
        {
            name: 'googlerecaptcha',
            title: 'Google ReCaptcha-Service',
            purposes: ['security'],
            cookies: [],
            required: true,
            default: true,
        },
        {
            name: 'youtube',
            title: 'YouTube',
            purposes: ['content'],
            cookies: [],
            required: false,
            default: false,
        },
        {
            name: 'matomo',
            title: 'Matomo',
            purposes: ['analytics'],
            cookies: [],
            required: false,
            default: false,
        },
        {
            name: 'Vimeo',
            title: 'Vimeo',
            purposes: ['content'],
            cookies: [],
            required: false,
            default: false,
        },
        {
            name: 'googlemaps',
            title: 'Google Maps',
            purposes: ['content'],
            cookies: [],
            required: false,
            default: false,
        },
        {
            name: 'facebook',
            title: 'Facebook',
            purposes: ['socialmedia'],
            cookies: [],
            required: false,
            default: false,
        },
        {
            name: 'userlike',
            title: 'Userlike (Chat)',
            purposes: ['interaction'],
            cookies: [],
            required: false,
            default: false,
        },
        {
            name: 'soundcloud',
            title: 'SoundCloud',
            purposes: ['content'],
            cookies: [],
            required: false,
            default: false,
        },
    ],
};
