/**
 * Created by pierremarot on 19/11/2013.
 */

var util = require('util');

describe('blog home page', function() {
    var ptor = protractor.getInstance();

    beforeEach(function () {
        ptor = protractor.getInstance();

    });
    it("number of initial post must be 3", function () {
        ptor = protractor.getInstance();
        ptor.get('#/');
        ptor.waitForAngular();
        ptor.findElements(protractor.By.tagName('tr')).then(function(rows){
          expect(rows.length).toBe(2+2); // 2 for the up and down form and X for the posts
        });

    });
    it("click add new post button must display the form", function () {
        ptor = protractor.getInstance();
        ptor.findElements(protractor.By.partialLinkText('Add')).then(function(links){
            expect(links.length).toBe(2);
            links[0].click();
            expect(links[0].isDisplayed()).toBe(false);
            expect(links[1].isDisplayed()).toBe(false);
        });
    });

    it("fill the form and submit must add a new post", function () {
        ptor = protractor.getInstance();
        ptor.findElements(protractor.By.model('newPost.title')).then(function(titleInputs){
            titleInputs[0].sendKeys("Protractor");
        })
        //have to find by id because my directives alter the css class. Limitation from protractor as far as i know
        ptor.findElements(protractor.By.id('postcontent')).then(function(contentTAs){
            contentTAs[0].sendKeys("is a great Angular testing Framework");
        })

        ptor.findElements(protractor.By.partialLinkText('Save')).then(function(links){
            expect(links.length).toBe(2);
            links[0].click();
            expect(links[0].isDisplayed()).toBe(false);
            expect(links[1].isDisplayed()).toBe(false);
        });
        ptor.findElements(protractor.By.tagName('tr')).then(function(rows){
            expect(rows.length).toBe(2+3); // 2 for the up and down form and X for the posts
        });

    });

});