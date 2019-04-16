import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    perPage: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    showFirstButton: PropTypes.boolean,
    showLastButton: PropTypes.boolean
}

const defaultProps = {
    showFirstButton: true,
    showLastButton: true
}

class Paginate extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(page) {
        this.props.onChange(page);
    }

    render() {
        const { total, perPage, current, showFirstButton, showLastButton } = this.props
        const previous_btn = true,
            next_btn = true,
            first_btn = showFirstButton ? showFirstButton : true,
            last_btn = showLastButton ? showLastButton : true;
        let count = total;
        let start_loop = 0;
        let end_loop = 0;
        const no_of_paginations = Math.ceil(count / perPage);

        if (current >= 7) {
            start_loop = current - 3;
            if (no_of_paginations > current + 3)
                end_loop = current + 3;
            else if (current <= no_of_paginations && current > no_of_paginations - 6) {
                start_loop = no_of_paginations - 6;
                end_loop = no_of_paginations;
            } else {
                end_loop = no_of_paginations;
            }
        } else {
            start_loop = 1;
            if (no_of_paginations > 7)
                end_loop = 7;
            else
                end_loop = no_of_paginations;
        }
        let btn = Array.apply(null, new Array(end_loop + 1 - start_loop));
        return (
            <div>
                {count > 0 && <div>
                    <div className="paginate">
                        <div className="paginate-summary">
                            <div>Page <strong>{current}</strong> of <strong>{no_of_paginations}</strong> Pages     <span>Total Records <strong>{count}</strong></span></div>
                        </div>
                        <div className="paginate-action">
                            <ul className="paginate-pagination">
                                {(first_btn && current > 1) ? <li onClick={() => this.handleChange(1)} className="active"><span>First</span></li> : (first_btn) ? <li className="inactive"><span>First</span></li> : ''}
                                {(previous_btn && current > 1) ? <li onClick={() => this.handleChange(current - 1)} class="active"><span>Prev</span></li> : (first_btn) ? <li className="inactive"><span>Prev</span></li> : ''}
                                {btn.map((x, n) => {
                                    let i = start_loop + n;
                                    if ((current == i))
                                        return (<li className="inactive cpageval" key={n}><span>{i}</span></li>)
                                    else
                                        return (<li onClick={() => handleChange(i)} className="active" key={n}><span>{i}</span></li>)
                                })}
                                {(next_btn && current < no_of_paginations) ? <li onClick={() => this.handleChange(current + 1)} className="active"><span>Next</span></li> : (next_btn) ? <li className="inactive"><span>Next</span></li> : ''}
                                {(last_btn && current < no_of_paginations) ? <li onClick={() => this.handleChange(no_of_paginations)} className="active"><span>Last</span></li> : (last_btn) ? <li class="inactive"><span>Last</span></li> : ''}
                            </ul>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

Paginate.propTypes = propTypes;
Paginate.defaultProps = defaultProps;

export default Paginate