import React from 'react';


class Editor extends React.Component {
  render() {
    return (
      <div id="editor-block">
        <h2 className="headings">EDITOR</h2>
        <form>
          <textarea id="editor" type="text" onChange={this.props.handleChange} value={this.props.userInput} />
        </form>
      </div>
    )
  }
};

export default Editor;
