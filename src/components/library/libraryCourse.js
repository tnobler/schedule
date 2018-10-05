import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

export default class LibraryCourse extends Component {
  render () {
    return (
      <div className="library-course">
         <div className="library-course__title-check">
          <label className="library-course__title">Problem Solving</label>
          { Icon('fas fa-check', 'library-course__icon') }
         </div>
         <Arrow className="library-course__arrow" />
         <Action className="library-course__action" />
         <div className="library-course__description">
          <label>Course Description</label>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, elit eget eleifend accumsan, odio neque ullamcorper velit, vitae blandit tellus tortor eget magna. Nullam tempus massa eros, ut tincidunt justo elementum id.</p>
         </div>
      </div>
    );
  }
}