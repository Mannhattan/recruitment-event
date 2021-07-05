const { validateParticipant } = require("./validator.service");



describe('Validator service', () => {
    it('Validates participant object correctly', () => {

        expect(validateParticipant({
            firstName: "test",
            lastName: "test",
            email: "test@test.com",
            eventDate: "2021-05-21"
        })).toEqual([]);

        expect(validateParticipant({
            firstName: "",
            lastName: "",
            email: "",
            eventDate: ""
        })).toEqual(["INVALID_FIRST_NAME", "INVALID_LAST_NAME", "INVALID_EMAIL", "INVALID_DATE"]);
    });
});