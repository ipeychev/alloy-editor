(function() {
    'use strict';

    var assert = chai.assert;
    var Simulate = React.addons.TestUtils.Simulate;

    describe('ButtonEmbedRemove', function() {
        this.timeout(35000);

        before(Utils.createAlloyEditor);

        after(Utils.destroyAlloyEditor);

        beforeEach(Utils.beforeEach);

        afterEach(Utils.afterEach);

        it.only('should embed area is removed when embed remove button is clicked', function() {

            var embedDiv = '<div data-cke-widget-wrapper="1"> '+
                '<data-widget="ae-embed">{selection}</div>' +
                '</div>';

            bender.tools.selection.setWithHtml(this.nativeEditor, embedDiv);

            var buttonEmbedRemove = ReactDOM.render(<AlloyEditor.ButtonEmbedRemove editor={this.editor} />, this.container);

            var buttonDOMNode = ReactDOM.findDOMNode(buttonEmbedRemove);

            Simulate.click(buttonDOMNode);

            assert.isDefined(buttonDOMNode);

            var data = bender.tools.getData(this.nativeEditor, {
                fixHtml: true,
                compatHtml: true
            });

            assert.strictEqual(data, '');
        });
    });
}());