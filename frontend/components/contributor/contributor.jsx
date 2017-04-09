import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Contributor extends React.Component{
  constructor(props){
    super(props);
    this.renderContributors = this.renderContributors.bind(this);
    this.removeContributor = this.removeContributor.bind(this);
    this.resetContributors = this.resetContributors.bind(this);
  }

  componentDidMount(){
    this.props.fetchContributors();
  }

  removeContributor(id){
    this.props.removeContributor(id);
  }

  resetContributors(){
    const contributors = [
      { id: 35, firstName: "Mark", lastName: "Spencer", photo:"https://placekitten.com/200/201" },
      { id: 89, firstName: "Jordan", lastName: "Salinger", photo:"https://placekitten.com/200/202" },
      { id: 90, firstName: "Carl", lastName: "Jung", photo:"https://placekitten.com/200/203" },
      { id: 11, firstName: "Dwight", lastName: "Eisenhower", photo:"https://placekitten.com/200/204" },
      { id: 22, firstName: "Walter", lastName: "White", photo:"https://placekitten.com/200/205" },
      { id: 67, firstName: "Roger", lastName: "Rabbit", photo:"https://placekitten.com/200/206" },
      { id: 98, firstName: "Pen", lastName: "Pineapple", photo:"https://placekitten.com/200/207" }
    ];
    this.props.resetContributors(contributors);
  }

  renderContributors(){
    let contributors = this.props.contributors;
    if (contributors === null) {
      contributors = (<div className="loader"></div>);
    } else if (contributors.length > 0) {
      contributors = contributors.slice(0,6).map(contributor => {
        return (
          <div key={contributor.id} className="contributor-item">
            <i className="fa fa-times" aria-hidden="true"
              key={contributor.id}
              onClick={() => this.removeContributor(contributor.id)}/>
            <img className="img-portrait" src={contributor.photo}/>
            <div className="contributor-name">
              {contributor.firstName}<br/>
              {contributor.lastName}
            </div>
          </div>
        );
      });
    } else {
      contributors = (
        <a onClick={this.resetContributors} href="#">
          click here to contribute (sends default data to node server)
        </a>
      );
    }
    return (
      <ReactCSSTransitionGroup
        component="div"
        className="contributors"
        transitionName="example"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
          {contributors}
      </ReactCSSTransitionGroup>
    );
  }

  render(){
    return (
      <div>
        <h1 className="contributor-heading">Contributor's Page</h1>
        {this.renderContributors()}
      </div>
    );
  }
}

export default Contributor;
