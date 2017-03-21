import './app.less';
<% if (SPA) { %>
import './routes';
<% } %>
const { chrome } = window;
// This is a Chrome only hack
if (__LOCAL__ && window.chrome && chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}
