(function() {
    'use strict';

    var assert = chai.assert;

    var KEY_I = 73;

    describe('ButtonEmbedEdit', function() {
        this.timeout(35000);

        before(Utils.createAlloyEditor);

        after(Utils.destroyAlloyEditor);

        beforeEach(Utils.beforeEach);

        afterEach(Utils.afterEach);

        it('should button embed edit appears when embed area is selected', function() {
            bender.tools.selection.setWithHtml(this.nativeEditor, 'A <div data-widget="ae-embed">{selection}</div> made embed area.');

            var buttonEmbedEdit = ReactDOM.render(<AlloyEditor.ButtonEmbedEdit editor={this.editor} />, this.container);

            var buttonDOMNode = ReactDOM.findDOMNode(buttonEmbedEdit);

            assert.isDefined(buttonDOMNode);
        });

        it('should button embed edit appears with embed remove button', function() {
            bender.tools.selection.setWithHtml(this.nativeEditor, 'A <div data-widget="ae-embed">{selection}</div> made embed area.');

            var buttonEmbedEdit = ReactDOM.render(<AlloyEditor.ButtonEmbedEdit editor={this.editor} />, this.container);

            var buttonDOMNode = ReactDOM.findDOMNode(buttonEmbedEdit);

            assert.equal(1, $(buttonDOMNode).find("[data-type='button-embed-remove']").length);
        });
    });
}());
