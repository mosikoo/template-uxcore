import React, { Component } from 'react';
import classnames from 'classnames';
import ReactDOM from 'react-dom';<% if (SPA) { %>
import { withRouter } from 'react-router';
<% } %><% if (i18n) { %>
import i18n from 'i18n';
<% } %>
<% if (store) { %>
import { Component } from 'reflux';
import Actions from './actions';
import Store from './store';
import './Page<%- Name %>.less';

class Page<%- Name %> extends Component {

  constructor(props) {
    super(props);
    this.store = Store;
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }
}

<% } else { %>
import './Page<%- Name %>.less';

class Page<%- Name %> extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-<%= name %>">
        page <%= name %>
      </div>
    );
  }
}
<% } %>
<% if(SPA){ %>
export default withRouter(Page<%- Name %>);
<% } else {%>
ReactDOM.render(<Page<%- Name %> />, document.getElementById('App'));
<% } %>
