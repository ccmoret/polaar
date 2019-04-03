import { Component } from 'react';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// import '../styles/styles.scss';

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'some\ntext',
      copied: false
    };
  }

  onCopy = () => {
    this.setState({ copied: true });
  };

  renderCopyLink() {
    return (
      <div>
        <CopyToClipboard onCopy={this.onCopy} text={this.state.value}>
          <button>Copy Link</button>
        </CopyToClipboard>
      </div>
    );
  }

  render() {
    console.log(this.props);

    return (
      <div className="row pt-3">
        <div className="col-12 text-center medium">
          <ul className="smallList text-center">
            <li className="smallLink">Share</li>
            <li className="smallLink">—</li>
            <li className="smallLink">
              <a target="_blank" href={this.props.twitter} data-size="large">
                Twitter
              </a>
              {/* <a
                target="_blank"
                className="twitter-share-button"
                href="https://twitter.com/intent/tweet"
                dataSize="large"
                dataText="custom share text"
                dataUrl="https://dev.twitter.com/web/tweet-button"
                dataHashtags="example,demo"
                dataVia="twitterdev"
                dataRelated="twitterapi,twitter">
                Twitter
              </a> */}
            </li>
            <li className="smallLink">Facebook</li>
            <li className="smallLink">Copy link</li>
          </ul>
          {/* {this.renderCopyLink()} */}
        </div>
      </div>
    );
  }
}

export default Share;
