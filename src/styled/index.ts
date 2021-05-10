import twbsButton from './twbs/button';
import twbsNav from './twbs/nav';
import twbsSpinner from './twbs/spinner';
import twbsBadge from './twbs/badge';

const bootstrapStylesOverrides = [twbsButton, twbsNav, twbsSpinner, twbsBadge];

export { default as globalStyles } from './_global';
export { bootstrapStylesOverrides };
