import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';

class Footer extends Component {
  render() {
    return (
      // <Footer
      //   copyrights="&copy 2015 Copyright Text"
      // 	moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
      // 	links={
      // 		<ul>
      // 			<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
      // 			<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
      // 			<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
      // 			<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
      // 		</ul>
      // 	}
      // 		<h5 className="white-text">Footer Content</h5>
      // 		<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      // </Footer>;
      <Footer>
        <p style={{ textAlign: 'center'}}>
          created by <a target="_blank" href="https://github.com/abazilla">abazilla</a>.
        </p>
        <p style={{ textAlign: 'center'}}>
          <a className="icon" href="https://github.com/bokuweb/re-bulma">
          <i className="fa fa-github"></i>
        </a>
      </p>
      </Footer>
    )
  };
}

//
// export default Footer;
