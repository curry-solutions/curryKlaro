var klaroConfig = {
    version: 2,
    elementID: 'klaro',
    storageMethod: 'localStorage',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 243,
    lang: 'de',
    noNotice: false,
    noFloating: false,
    hideDeclineAll: true,
    acceptAll: true,
    default: false,
    translations: {
        de: {
            privacyPolicyUrl: '/#privacy',
            consentModal: {
                title: 'Wir verwenden folgende Drittanbieteranwendungen',
                description:
                    'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.',
                privacyPolicy: {
                    text:
                        'Dies ist der Text mit einem Link zu Ihrer {privacyPolicy}.',
                    name: 'Datenschutzseite',
                },
            },
            consentNotice: {
                changeDescription:
                    'Es gab Änderungen seit Ihrem letzten Besuch, bitte aktualisieren Sie Ihre Auswahl.',
                description:
                    'Wir speichern und verarbeiten Ihre personenbezogenen Informationen für folgende Zwecke: {purposes}. Ihre Einwilligung können Sie jederzeit auf unserer {privacyPolicy} widerrufen.',
                learnMore: 'Einstellungen',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
                security: 'Sicherheit',
                accessibility: 'Nutzerzugänglichkeit',
                content: 'Inhalte',
                functionality: 'Funktionsfähigkeit',
            },
            ok: 'OK',
            save: 'Speichern',
            decline: 'Ablehnen',
            close: 'Schließen',
            acceptSelected: 'Auswahl akzeptieren',
            acceptAll: 'Allen zustimmen',
            floatingButtonTitle: 'Cookie-Einstellungen',
            ryveCookies: {
                description:
                    'Notwendige Cookies, um die Funktionsfähigkeit der Website sicherzustellen.',
            },
        },
    },
    services: [
        {
            name: 'ryveCookies',
            title: 'RYVE Cookies',
            purposes: ['functionality'],
            cookies: [],
            required: true,
            default: false,
        },
    ],
};
