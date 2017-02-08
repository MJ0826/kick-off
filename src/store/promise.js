import promise from 'redux-promise-middleware';

export default promise({
  promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']
});
