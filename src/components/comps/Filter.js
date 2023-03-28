import PropTypes from 'prop-types';
import css from './Filter.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
export class Filter extends Component {
  filterId = nanoid();

  render() {
    const { change } = this.props;
    return (
      <div className={css.filter}>
        <label htmlFor={this.filterId}>Find Contact By Name</label>
        <input id={this.filterId} type="text" name="filter" onChange={change} />
      </div>
    );
  }
}

Filter.propTypes = { change: PropTypes.func };
