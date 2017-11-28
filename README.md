# atm-logging
A simple logging service for electron applications

## Usage:

Define you logging area, e.g.:
```html
<pre id="log-output" class="log-output" type="text"></pre>
```

Apply some styling for this area:
```css
.log-output {
  height: 440px;
  color: #575B5E;
  font-size: 12px;
  font-family: monospace;
  white-space: pre-wrap;
  border:1px solid lightgrey;
}
```

Import and use the library:
```javascript
import {Log} from 'atm-logging';
const log = new Loig();

log.info('This will be shown as a usual text');
log.warn('This will be displayed bold');
log.error('This will be colored red');
```

