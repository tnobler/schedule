import React, { Component } from 'react';

export default class LibraryCourse extends Component {
  render () {
    return (
      <div className="library-course">
         <label className="library-course__title">Problem Solving</label>
         {/* icon component */}
         {/* arrow component */}
         {/* action button component */}
         <div className="library-course__description">
          <label>Course Description</label>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, elit eget eleifend accumsan, odio neque ullamcorper velit, vitae blandit tellus tortor eget magna. Nullam tempus massa eros, ut tincidunt justo elementum id.</p>
         </div>
      </div>
    );
  }
}