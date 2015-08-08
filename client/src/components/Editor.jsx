'use strict';

let React = require('react');
let Input = require('react-bootstrap/lib/Input');

require('./Editor.less');

let Editor = React.createClass({
    handleChange() {
        if (this.props.onChange) {
            this.props.onChange( this.refs.input.getValue() );
        }
    },

    render() {
        return (
           <Input type="textarea"
                value={this.props.value}
                label={this.props.label}
                ref="input"
                bsStyle={this.props.bsStyle}
                wrapperClassName="Editor wrapper-class"
                labelClassName="label-class"
                onChange={this.handleChange} />
        );
    }
});

module.exports = Editor;