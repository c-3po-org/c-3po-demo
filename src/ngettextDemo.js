import React from 'react';
import { t, ngettext, msgid } from 'c-3po';

class NgettextDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.countInc = this.countInc.bind(this);
    }
    countInc() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        const n = this.state.count;
        return (
            <div>
                <h3>{ t`Ngettext demo` }</h3>
                <div>
                    { ngettext(msgid`time ${n} clicked`, `times ${n} clicked`, n) }
                </div>
                <button onClick={this.countInc}>{ t`Click me` }</button>
            </div>
        )
    }
}

export default NgettextDemo;