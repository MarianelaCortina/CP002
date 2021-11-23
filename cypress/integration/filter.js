describe('Filtrar por', ()=>{
    it('filter for elements with multiple results', ()=>{
        cy.visit('/')
        cy.fixture('index').then((index)=>{
            cy.get(index.filterfor).click(); 
        })
        cy.fixture('filterResultPrice').then((filterResultPrice)=>{
            cy.get(filterResultPrice.filterResultPriceClick).click();
            cy.get(filterResultPrice.filterResultPriceBanner).should('contain', '2');
        })
    })
})


