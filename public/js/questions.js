const questions = [
  /* Category 1 Questions */
  {
    prompt: 'What is the expansion of HTML?',
    options: ['Hyper Text Markup Language', 'Holding Text Marker Language', 'Hyperlink Text Management Language', 'Holding Text Modal Language'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 10
  },
  {
    prompt: 'What is the current version of HTML?',
    options: ['HTMLv5000', 'HTML', 'HTML2016', 'HTMLC'],
    correctAnswer: 'HTML',
    cashPrize: 50
  },
  {
    prompt: 'What language placed in a seperate file has largely replaced use of <style></style> elements?',
    options: ['HTMLS Code', 'Style Sheet Language', 'CSS or Central Style Sheet', 'CSS or Cascading Style Sheets'],
    correctAnswer: 'CSS or Cascading Style Sheets',
    cashPrize: 100
  },
  {
    prompt: 'What new element type introduced in HTML5 is functionally the same as a Div?',
    options: ['Semantic Tags', 'PseudoDivs', 'DivisionIDs', 'Division Notation'],
    correctAnswer: 'Semantic Tags',
    cashPrize: 500
  },
  {
    prompt: 'Browsers do not usually allow cross-site actions but there is one major exception:',
    options: ['Get Requests', 'Ping Commands', 'iFrames', 'Git'],
    correctAnswer: 'iFrames',
    cashPrize: 1000
  },
  /* Category 2 Questions */
  {
    prompt: 'What is the expansion of CSS?',
    options: ['Cascading Style Sheets', 'Central Style Server', 'Control Set Styles', 'C Safe Server'],
    correctAnswer: 'Cascading Style Sheets',
    cashPrize: 10
  },
  {
    prompt: 'The "<Span> </Span>" has what as a default property?',
    options: ['set-length', 'block', 'timestamp', 'inline'],
    correctAnswer: 'inline',
    cashPrize: 50
  },
  {
    prompt: 'The * css selector applies to what?',
    options: ['Everything', 'Wildcard elements', 'Multiplication Functions', 'Elements with the Id of *'],
    correctAnswer: 'Everything',
    cashPrize: 100
  },
  {
    prompt: 'What feature recently introduced in CSS 3 addresses issues with "floats"?',
    options: ['Center Flagpoints', 'Flexbox', 'Flexpoints', 'FloatV2.0'],
    correctAnswer: 'Flexbox',
    cashPrize: 500
  },
  {
    prompt: 'CSS is hard. What is one feature that makes it hard compared to other languages? ',
    options: ['Lack of Case Examples', 'No Error Output', 'Inclusion of complex variable functions', 'Lack of documentation'],
    correctAnswer: 'No Error Output',
    cashPrize: 1000
  },
  /* Category 3 Questions */
  {
    prompt: 'Which is a coding language or library not actually relevant to modern Javascript?',
    options: ['Java', 'ECMAScript', 'Ajax', 'JQuery'],
    correctAnswer: 'Java',
    cashPrize: 10
  },
  {
    prompt: 'Javascript is usually described as a " "-based language?',
    options: ['Relational', 'COBOL', 'Object', 'Directional'],
    correctAnswer: 'Object',
    cashPrize: 50
  },
  {
    prompt: 'JSON is: ',
    options: ['A Javascript engine', 'A text format readable by Javascript', 'A Javascript library', 'A Javascript function'],
    correctAnswer: 'A text format readable by Javascript',
    cashPrize: 100
  },
  {
    prompt: 'Angular JS is an example of:',
    options: ['A JS Framework', 'an open-source, cross-platform runtime environment for developing server-side web applications', 'A JS library', 'An AJAX library'],
    correctAnswer: 'A JS Framework',
    cashPrize: 500
  },
  {
    prompt: 'Can you change the properties on a const variable?',
    options: ['Never', 'Yes, by default', 'Yes, only if $constprop is present', 'Yes, if in an IIFE'],
    correctAnswer: 'Yes, by default',
    cashPrize: 1000
  },
  /* Category 4 Questions */
  {
    prompt: 'The Terminal or command line is an example of a?',
    options: ['Interconnected Network', 'Read-Eval-Print-Loop', 'C++ Library Object', 'Skynet'],
    correctAnswer: 'Read-Eval-Print-Loop',
    cashPrize: 10
  },
  {
    prompt: 'UNIX was added relatively later into what popular propietary operating system?',
    options: ['Windows 10', 'Linux Mint', 'Mac OS X', 'Ubuntu'],
    correctAnswer: 'Mac OS X',
    cashPrize: 50
  },
  {
    prompt: 'The command "man x" would?',
    options: ['Bring up the task manager for x', 'Modularize x', 'Attempt to bring up the manual page for x', 'Make x mandatory on startup'],
    correctAnswer: 'Attempt to bring up the manual page for x',
    cashPrize: 100
  },
  {
    prompt: 'Someone shady on the internet tells you to enter a "rm -rf" command into your terminal on your root directory. Doing this would:',
    options: ['Remake your filedomains', 'Rename your file register', 'Recursively rename all your files with the tag rm', 'Damage your file system'],
    correctAnswer: 'Damage your file system',
    cashPrize: 500
  },
  {
    prompt: 'The GREP command allows a user to:',
    options: ['Quickly search files for specific items of text', 'Grab-Read-Evaluate-Loop', 'Gauge RAM event parameters', 'Group related events in the processor'],
    correctAnswer: 'Quickly search files for specific items of text',
    cashPrize: 1000
  },
  /* Category 5 Questions */
  {
    prompt: 'What is DOMContentLoaded?',
    options: ['A meaningless trivial thing', 'A web performance certification', 'A rare error', 'A timing event for performance measurement'],
    correctAnswer: 'A timing event for performance measurement',
    cashPrize: 10
  },
  {
    prompt: 'What is the best lighthouse score possible?',
    options: ['A+', 'Four Hundreds', 'Certified', 'Correct'],
    correctAnswer: 'Four Hundreds',
    cashPrize: 50
  },
  {
    prompt: 'Which of these are not Performance products?',
    options: ['SpeedCurve', 'mPulse', 'Rumvision', 'SpinningTree'],
    correctAnswer: 'SpinningTree',
    cashPrize: 100
  },
  {
    prompt: 'What is not a Core Web Vital?',
    options: ['FID', 'INP', 'CLS', 'LCP'],
    correctAnswer: 'FID',
    cashPrize: 500
  },
  {
    prompt: 'What is RUM?',
    options: ['Real User Monitoring', 'Real User Measurement', 'Real User Maximization', 'Real User Mode'],
    correctAnswer: 'Real User Monitoring',
    cashPrize: 1000
  }
];

export default questions;