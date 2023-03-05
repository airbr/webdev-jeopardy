const questions = [
  /* Category 1 Questions */
  {
    prompt: 'Who describes big data as an inability of conventional/traditional data management methods?',
    options: ['NASA', 'National Institutes of Standards & Technology (NIST)', 'U.S. National Science Foundation (NSF)', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 10
  },
  {
    prompt: 'What were some challenges posed by the NSF?',
    options: ['Data sets being too numerous and too large', 'Data sets too unorganized and too heterogenous', 'Limitations in our ability to use data', 'All of the above'],
    correctAnswer: 'All of the above',
    cashPrize: 50
  },
  {
    prompt: 'Which element does not belong in the 5-V framework?',
    options: ['Veracity', 'Voracity', 'Variety', 'Value'],
    correctAnswer: 'Voracity',
    cashPrize: 100
  },
  {
    prompt: 'Which of the following statements are not true?',
    options: ['The Internet Assigned Numbers Authority (IANA) specified the 8 top-level media types', 'Media types and MIME types are two different things', 'Request for Comments (RFCs) were managed by different groups over the years', 'RFC 822 was the standard for ARPA in the early 80s'],
    correctAnswer: 'Media types and MIME types are two different things',
    cashPrize: 500
  },
  {
    prompt: 'Which of the following statements are not true?',
    options: ['Initially there were only 6 top level MIME types', 'RFC 2046 improves on RFC 2045 by differentiating discrete and composite types', 'RFC 2045 addressed RFC 822\'s limitation with email attachments', 'In RFC 2046 new extension types can be added without IANA'],
    correctAnswer: 'Initially there were only 6 top level MIME types',
    cashPrize: 1000
  },
  /* Category 2 Questions */
  {
    prompt: 'What is the expansion of aoeusnth?',
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
    options: ['Remake your filedomains', 'Rename your file register', 'Recursively rename all your files with the tag rm', 'Irreparably damage your file system'],
    correctAnswer: 'Irreparably damage your file system',
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
    prompt: 'Use of "Alert" popup windows is often considered bad practice as browsers and users are hostile to pop-ups. What are the other two native Javascript popup functions?',
    options: ['Warning, Confirm', 'Confirm, Refresh', 'Prompt, Confirm', 'Prompt, Notice'],
    correctAnswer: 'Prompt, Confirm',
    cashPrize: 10
  },
  {
    prompt: 'The man page for Git describes it as:',
    options: ['That stupid content tracker', 'A Content Version Tracker', 'General-Index-Tracker', 'A Revision Editor'],
    correctAnswer: 'That stupid content tracker',
    cashPrize: 50
  },
  {
    prompt: 'What version of what coding language introduced the audio function contained in this page?',
    options: ['ECMAScript', 'MP3ML', 'HTML5', 'WavML'],
    correctAnswer: 'HTML5',
    cashPrize: 100
  },
  {
    prompt: 'Which of these frameworks include support for TypeScript?',
    options: ['AngularJS', 'Angular', 'JQuery', 'Whitespace'],
    correctAnswer: 'Angular',
    cashPrize: 500
  },
  {
    prompt: 'What is an early computer language famous for being designed by Government and Business without much input from computer scientists?',
    options: ['MS Office', 'Telnet', 'COBOL', 'C--'],
    correctAnswer: 'COBOL',
    cashPrize: 1000
  }
];

export default questions;