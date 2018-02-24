import React from 'react';
import marked from 'marked';

class MarkdownRender extends React.Component {
  getMarkdown() {
    var rawMarkdown = marked(this.props.inhalt, {sanitize: true});
    return {__html: rawMarkdown};
  }
  render() {
    return <div dangerouslySetInnerHTML={this.getMarkdown()} />;
  }

}

export default MarkdownRender;
