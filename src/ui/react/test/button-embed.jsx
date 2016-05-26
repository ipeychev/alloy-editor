(function() {
    'use strict';

    var assert = chai.assert;
    var Simulate = React.addons.TestUtils.Simulate;

    describe('ButtonEmbed', function() {
        this.timeout(35000);

        before(Utils.createAlloyEditor);

        after(Utils.destroyAlloyEditor);

        beforeEach(Utils.beforeEach);

        afterEach(Utils.afterEach);

        it('should invoke requestExclusive when clicking on the button', function() {
            var requestExclusiveListener = sinon.stub();

            var buttonEmbed = ReactDOM.render(<AlloyEditor.ButtonEmbed editor={this.editor} requestExclusive={requestExclusiveListener} />, this.container);

            Simulate.click(ReactDOM.findDOMNode(buttonEmbed));

            assert.isTrue(requestExclusiveListener.calledOnce);
        });
    });
}());
