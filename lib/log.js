const Timestamp = require('atm-timestamp');
const fs = require('fs');

class Log{
  constructor() {
    this.timestamp = new Timestamp();
    this.logArea = document.getElementById('log-output');
    this.scrollHeight = this.logArea.scrollHeight;
  }

  log(data, options)
  {
    let timestamp = '';
    let title = '';

    if(options)
	{
      if(options.timestamp)
        timestamp = this.timestamp.get() + ' ';
      if(options.title)
        title = options.title;
    }

    let strLog = '';
	if (data.substring(0, 5) === '<div>')
	  strLog = data.substring(5, data.length - 6);

	if (data.substring(0, 6) === '<p><b>')
	  strLog = data.substring(6, data.length - 8);

	if (data.substring(0, 21) === '<p style="color:red">')
	  strLog = data.substring(21, data.length - 4);

  
    fs.appendFile('log-output.txt', timestamp + title + strLog + "\n", function (err) 
	{
      if (err) return console.log(err);
    });

    this.logArea.innerHTML += timestamp + title + data;
    this.logArea.scrollTop = this.logArea.scrollHeight;
  }

  info(data, options)
  {
    this.log('<div>' + data + '</div>', options);
  }

  warn(data, options)
  {
    this.log('<p><b>' + data + '</b></p>', options);
  }

  error(data, options)
  {
    this.log('<p style="color:red">' + data + '</p>', options);
  }
}

module.exports = Log;

