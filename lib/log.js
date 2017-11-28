import Timestamp from 'atm-timestamp';

class Log{
  constructor() {
    this.timestamp = new Timestamp();
    this.logArea = document.getElementById('log-output');
    this.scrollHeight = this.logArea.scrollHeight;
  }

  log(data, options){
    let timestamp = '';
    let title = '';

    if(options){
      if(options.timestamp)
        timestamp = this.timestamp.get() + ' ';
      if(options.title)
        title = options.title;
    }

    this.logArea.innerHTML += timestamp + title + data + '\n';
    this.logArea.scrollTop = this.logArea.scrollHeight;
  }

  info(data, options){
    this.log('<div>' + data + '</div>', options);
  }

  warn(data, options){
    this.log('<p><b>' + data + '</b></p>', options);
  }

  error(data, options){
    this.log('<p style="color:red">' + data + '</p>', options);
  }
}

export {Log};
