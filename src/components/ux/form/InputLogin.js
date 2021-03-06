// ============================================================
// Import packages
import PropTypes from 'prop-types';
import React from 'react';
import { translate } from 'react-i18next';
// ============================================================
// Import containers

import InputText from './InputText';

// ============================================================
// Scene
class InputLogin extends React.Component {
    /**
     * Return the login
     * @returns {string}
     * @public
     */
    getValue() {
        return this.inputText.getValue();
    }

    render() {
        const { t } = this.props;

        return (
            <InputText
                enabled={this.props.enabled}
                formName="login"
                label={t('loginLabel')}
                onChange={this.props.onChange}
                refs={(ref) => {
                    this.inputText = ref;
                }}
            />
        );
    }
}

InputLogin.defaultProps = {
    enabled: true,
    onChange: undefined,
};

InputLogin.propTypes = {
    enabled: PropTypes.bool,
    onChange: PropTypes.func,
    t: PropTypes.func.isRequired,
};

// ============================================================
// Exports
export default translate('form')(InputLogin);
