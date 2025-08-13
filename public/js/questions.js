// Refactored: Group questions by category for clarity and maintainability
const categories = [
  {
    name: 'HTML',
    questions: [
      { prompt: 'Which tag is used to create a hyperlink in HTML?', options: ['<a>', '<link>', '<href>', '<hyper>'], correctAnswer: '<a>', cashPrize: 10 },
      { prompt: 'Which attribute is used to provide alternative text for an image?', options: ['alt', 'src', 'title', 'href'], correctAnswer: 'alt', cashPrize: 50 },
      { prompt: 'Which HTML element is used for the largest heading?', options: ['<h6>', '<heading>', '<h1>', '<head>'], correctAnswer: '<h1>', cashPrize: 100 },
      { prompt: 'What does the <form> element do?', options: ['Creates a table', 'Embeds a video', 'Collects user input', 'Defines a section'], correctAnswer: 'Collects user input', cashPrize: 500 },
      { prompt: 'Which tag is used to display a numbered list?', options: ['<ul>', '<ol>', '<li>', '<dl>'], correctAnswer: '<ol>', cashPrize: 1000 }
    ]
  },
  {
    name: 'CSS',
    questions: [
      { prompt: 'Which property is used to change the text color of an element?', options: ['font-color', 'color', 'text-color', 'background-color'], correctAnswer: 'color', cashPrize: 10 },
      { prompt: 'Which CSS selector targets an element with id="main"?', options: ['#main', '.main', 'main', '*main'], correctAnswer: '#main', cashPrize: 50 },
      { prompt: 'Which property is used to set the spacing between lines of text?', options: ['line-height', 'letter-spacing', 'word-spacing', 'text-spacing'], correctAnswer: 'line-height', cashPrize: 100 },
      { prompt: 'What does the display: flex property do?', options: ['Makes text bold', 'Creates a flexible container', 'Hides the element', 'Changes font'], correctAnswer: 'Creates a flexible container', cashPrize: 500 },
      { prompt: 'Which property is used to add shadow to text?', options: ['box-shadow', 'text-shadow', 'shadow', 'font-shadow'], correctAnswer: 'text-shadow', cashPrize: 1000 }
    ]
  },
  {
    name: 'JavaScript',
    questions: [
      { prompt: 'Which keyword declares a variable in JavaScript?', options: ['var', 'int', 'let', 'Both var and let'], correctAnswer: 'Both var and let', cashPrize: 10 },
      { prompt: 'What is the output of: console.log(typeof [])?', options: ['array', 'object', 'list', 'undefined'], correctAnswer: 'object', cashPrize: 50 },
      { prompt: 'Which method is used to select an element by its ID?', options: ['getElementById', 'querySelectorAll', 'getElementsByClass', 'getElement'], correctAnswer: 'getElementById', cashPrize: 100 },
      { prompt: 'What does JSON stand for?', options: ['JavaScript Object Notation', 'Java Source Object Notation', 'JavaScript Oriented Notation', 'Java Syntax Object Notation'], correctAnswer: 'JavaScript Object Notation', cashPrize: 500 },
      { prompt: 'Which symbol is used for single-line comments in JavaScript?', options: ['//', '<!--', '#', '/*'], correctAnswer: '//', cashPrize: 1000 }
    ]
  },
  {
    name: 'Command Line & Tools',
    questions: [
      { prompt: 'Which command lists files and directories in Unix/Linux?', options: ['ls', 'cd', 'pwd', 'cat'], correctAnswer: 'ls', cashPrize: 10 },
      { prompt: 'Which command is used to change directories?', options: ['cd', 'ls', 'mv', 'cp'], correctAnswer: 'cd', cashPrize: 50 },
      { prompt: 'What does the command "mkdir" do?', options: ['Deletes a directory', 'Moves a file', 'Creates a directory', 'Lists files'], correctAnswer: 'Creates a directory', cashPrize: 100 },
      { prompt: 'Which tool is commonly used for version control in web development?', options: ['Git', 'NPM', 'Webpack', 'Docker'], correctAnswer: 'Git', cashPrize: 500 },
      { prompt: 'Which file is used to define dependencies for a Node.js project?', options: ['package.json', 'index.html', 'requirements.txt', 'main.js'], correctAnswer: 'package.json', cashPrize: 1000 }
    ]
  },
  {
    name: 'Web Performance & General Web',
    questions: [
      { prompt: 'What does the acronym SEO stand for?', options: ['Search Engine Optimization', 'Simple Email Output', 'Server Event Operation', 'Secure External Output'], correctAnswer: 'Search Engine Optimization', cashPrize: 10 },
      { prompt: 'Which tool is used to analyze website performance in Chrome?', options: ['Lighthouse', 'Firebug', 'PageSpeed', 'WebPageTest'], correctAnswer: 'Lighthouse', cashPrize: 50 },
      { prompt: 'What is a CDN?', options: ['Content Delivery Network', 'Central Data Node', 'Code Deployment Network', 'Content Data Network'], correctAnswer: 'Content Delivery Network', cashPrize: 100 },
      { prompt: 'Which metric measures how quickly a web page becomes interactive?', options: ['TTI', 'FCP', 'LCP', 'CLS'], correctAnswer: 'TTI', cashPrize: 500 },
      { prompt: 'Which protocol is used for secure communication on the web?', options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'], correctAnswer: 'HTTPS', cashPrize: 1000 }
    ]
  }
];

// Export a flat array for compatibility with existing code
const questions = categories.reduce((arr, cat) => arr.concat(cat.questions), []);

export { categories };
export default questions;