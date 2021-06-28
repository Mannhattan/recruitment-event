const REGISTRATION_MODEL = require(__models + "/registration.model");



module.exports = {
    resource: REGISTRATION_MODEL,
    options: {
        properties: {
            _id: {
                isVisible: false
            },
            createdAt: { isVisible: false },
            updatedAt: { isVisible: false },

        },
        navigation: {
            name: null,
            icon: 'User',
        },
        actions: {

        }
    }
};