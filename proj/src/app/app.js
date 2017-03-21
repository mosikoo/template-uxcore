import './app.less';
<% if (SPA) { %>
import './routes';
<% } %>

// This is a Chrome only hack
if (__LOCAL__ && window.chrome && chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}
