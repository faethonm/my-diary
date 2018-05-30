import ReactOnRails from 'react-on-rails';

import Posts from '../bundles/Posts/components/Posts';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Posts,
});
