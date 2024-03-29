import React from 'react';
import { Close } from './icons';
import Services from './services';
import Purposes from './purposes';
import Text from './text';

export default class ConsentModal extends React.Component {
    constructor(props) {
        super(props);
        const { manager } = props;
        manager.restoreSavedConsents();
    }

    componentDidMount() {
        this.consentModalRef.focus();
    }

    render() {
        const {
            hide,
            confirming,
            saveAndHide,
            acceptAndHide,
            declineAndHide,
            config,
            manager,
            lang,
            t,
        } = this.props;
        const { embedded } = config;
        const groupByPurpose =
            config.groupByPurpose !== undefined ? config.groupByPurpose : true;

        let closeLink;

        if (!config.mustConsent) {
            let closeHTML;
            const close = t(['!', 'config', 'close'])
                ? t(['config', 'close'])
                : t(['close']);
            closeHTML = t(['!', 'closeButtonHTML'], { lang: lang });
            if (closeHTML && closeHTML !== undefined) {
                closeLink = (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: closeHTML,
                        }}
                        title={close}
                        aria-label={close}
                        className="hide-custom"
                        type="button"
                        onClick={hide}
                        tabIndex="0"
                        ref={(div) => {
                            this.consentModalRef = div;
                        }}
                    ></div>
                );
            } else {
                closeLink = (
                    <button
                        title={close}
                        aria-label={close}
                        className="hide"
                        type="button"
                        onClick={hide}
                        tabIndex="0"
                        ref={(div) => {
                            this.consentModalRef = div;
                        }}
                    >
                        <Close t={t} />
                    </button>
                );
            }
        }

        let declineButton;

        if (!config.hideDeclineAll && !manager.confirmed)
            declineButton = (
                <button
                    disabled={confirming}
                    className="cm-btn btn btn-secondary cm-btn-decline cm-btn-danger cn-decline"
                    type="button"
                    onClick={declineAndHide}
                    tabIndex="0"
                >
                    {t(['decline'])}
                </button>
            );
        let acceptAllButton;
        const acceptButton = (
            <button
                disabled={confirming}
                className="cm-btn btn btn-primary cm-btn-success cm-btn-info cm-btn-accept"
                type="button"
                onClick={saveAndHide}
            >
                {t([manager.confirmed ? 'save' : 'acceptSelected'])}
            </button>
        );
        if (config.acceptAll && !manager.confirmed) {
            acceptAllButton = (
                <button
                    disabled={confirming}
                    className="cm-btn btn btn-primary cm-btn-success cm-btn-accept-all"
                    type="button"
                    onClick={acceptAndHide}
                >
                    {t(['acceptAll'])}
                </button>
            );
        }

        let ppUrl;
        // to do: deprecate and remove this (also, this is duplicated from the notice)

        if (config.privacyPolicy !== undefined) {
            if (typeof config.privacyPolicy === 'string')
                ppUrl = config.privacyPolicy;
            else if (typeof config.privacyPolicy === 'object') {
                ppUrl =
                    config.privacyPolicy[lang] || config.privacyPolicy.default;
            }
        } else {
            // this is the modern way
            ppUrl = t(['!', 'privacyPolicyUrl'], { lang: lang });
            if (ppUrl !== undefined) ppUrl = ppUrl.join('');
        }

        let ppLink;
        if (ppUrl !== undefined)
            ppLink = (
                <a key="ppLink" href={ppUrl} target="_blank" rel="noopener">
                    {t(['privacyPolicy', 'name'])}
                </a>
            );

        let servicesOrPurposes;

        if (groupByPurpose)
            servicesOrPurposes = (
                <Purposes t={t} config={config} manager={manager} lang={lang} />
            );
        else
            servicesOrPurposes = (
                <Services t={t} config={config} manager={manager} lang={lang} />
            );

        const innerModal = (
            <div
                className="cm-modal cm-klaro"
                role="dialog"
                aria-labelledby="cookie-modal-header"
                aria-describedby="cookie-modal-description"
            >
                <div className="cm-header">
                    {closeLink}
                    <h2 className="title" id="cookie-modal-header">
                        <Text
                            config={config}
                            text={t(['consentModal', 'title'])}
                        />
                    </h2>
                    <p id="cookie-modal-description">
                        <Text
                            config={config}
                            text={[t(['consentModal', 'description'])].concat(
                                (ppLink &&
                                    [' '].concat(
                                        t(['privacyPolicy', 'text'], {
                                            privacyPolicy: ppLink,
                                        })
                                    )) ||
                                    []
                            )}
                        />
                    </p>
                </div>
                <div className="cm-body">{servicesOrPurposes}</div>
                <div className="cm-footer">
                    <div className="cm-footer-buttons">
                        {declineButton}
                        {acceptButton}
                        {acceptAllButton}
                    </div>
                    {!config.disablePoweredBy && (
                        <p className="cm-powered-by">
                            <a
                                target="_blank"
                                href={
                                    config.poweredBy ||
                                    'https://github.com/curry-solutions/curryKlaro'
                                }
                                rel="noopener"
                            >
                                {t(['poweredBy'])}
                            </a>
                        </p>
                    )}
                </div>
            </div>
        );

        if (embedded)
            return <div className="cookie-modal cm-embedded">{innerModal}</div>;

        document.body.classList.add('modal-open');

        return (
            <div className="cookie-modal">
                <div className="cm-bg" onClick={hide} />
                {innerModal}
            </div>
        );
    }
}
