/* eslint-disable no-undef */
describe('Testing Service FrontEnd area', () => {
    const baseUrl = 'https://portfolio-react-nine-red.vercel.app';
    const servicesPageUrl = '#services';
    const homePageUrl = 'Home';
    const openModal = ':nth-child(1) > .services__modal > .services__modal-content > .services__modal-description';
    const closeModal = ':nth-child(1) > .services__modal > .services__modal-content > .uil-times';

    function ModalTest() {
        cy.get(openModal)
          .get(closeModal)
      }

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.contains('Services').click();
        cy.url().should('include', servicesPageUrl);
        cy.contains('What i offer').should('be.visible');
      });

    it('Opens Front-End modal successfully', () => {
        ModalTest()
    });

    it('Opens Back-End modal successfully', () => {
        ModalTest()
    });

    it('Opens QA Engineer modal successfully', () => {
        ModalTest()
    });

    afterEach(() => {
        cy.contains(homePageUrl).click();
      });
});
