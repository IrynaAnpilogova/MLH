const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
                expect(name).toEqual(true);
        });

        it('TC-015 Gender(he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender(she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender(it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-019 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-020 Create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-021 Create ', function () {
            const label = $(sel.create).getText();
            expect(label).toEqual(exp.button);
        });

    });

    describe('Placeholders are correct', function () {

        it('TC-022 Placeholder for Name is Hero\'s name', function () {
            const placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.placeholderName);
        });

        it('TC-023 Placeholder for Age is Hero\'s age', function () {
            const placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.placeholderAge);
        });

        it('TC-024 Placeholder for Type of story is Type of the story', function () {
            const placeholder = $(sel.story).getText();
            expect(placeholder).toEqual(exp.placeholderStory);
        });

        it('TC-025 Placeholder for she', function () {
            const placeholder = $$('.ant-radio-input')[1].getValue();
            expect(placeholder).toEqual(exp.placeholderShe);
        });

        it('TC-026 Placeholder for he', function () {
            const placeholder = $$('.ant-radio-input')[0].getValue();
            expect(placeholder).toEqual(exp.placeholderHe);
        });

        it('TC-027 Placeholder for it', function () {
            const placeholder = $$('.ant-radio-input')[2].getValue();
            expect(placeholder).toEqual(exp.placeholderIt);
        });

    });
});
