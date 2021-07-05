const { registerParticipant } = require("./registration.controller");

const REGISTRATION_MODEL = require(__models + "/registration.model");



describe('Registration controller', () => {
    it('Registers participant correctly', async () => {
        jest.spyOn(REGISTRATION_MODEL.prototype, 'save')
            .mockImplementationOnce(() => Promise.resolve({
                _id: "testid",
                firstName: "name",
                lastName: "surname",
                email: "test@test.com",
                eventDate: "2021-05-21"
            }));

        expect(await registerParticipant(
            "name",
            "surname",
            "test@test.com",
            "2021-05-21"
        )).toEqual({
            _id: "testid",
            firstName: "name",
            lastName: "surname",
            email: "test@test.com",
            eventDate: "2021-05-21"
        });
    });

    it('Throws error when saving document fails', async () => {
        jest.spyOn(REGISTRATION_MODEL.prototype, 'save')
            .mockImplementationOnce(() => Promise.reject());

        try {
            await registerParticipant(
                "name",
                "surname",
                "test@test.com",
                "2021-05-21"
            )
        } catch (error) {
            expect(error).toEqual("ERROR_CREATING_RECORD");
        }
    });

    it('Throws when bad data is provided', async () => {
        jest.spyOn(REGISTRATION_MODEL.prototype, 'save')
            .mockImplementationOnce(() => Promise.resolve());

        try {
            await registerParticipant(
                "",
                "",
                "",
                ""
            )
        } catch (error) {
            expect(error).toEqual(["INVALID_FIRST_NAME", "INVALID_LAST_NAME", "INVALID_EMAIL", "INVALID_DATE"]);
        }
    });
});