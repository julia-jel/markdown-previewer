import React from 'react';
import marked from 'marked';

//setting target to links' href:

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

// setting line breaks for carriage returns:

marked.setOptions ({
  gfm: true,
  breaks: true
});

// Previewer:

class Previewer extends React.Component {
  render() {
    const createMarkup = () => {
      return {__html: marked(this.props.text, {renderer: renderer})}
                               };
    return (
      <div id="preview-block">
         <h2 className="headings">PREVIEWER</h2>
         <div id="preview"
           dangerouslySetInnerHTML={createMarkup()}>
         </div>
      </div>
    );
  }
};

export default Previewer;
