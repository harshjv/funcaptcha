window.funcaptcha_init = function () {
  var divs = document.getElementsByClassName('funcaptcha')

  for (var i = 0; i < divs.length; i++) {
    var fc = divs[i]
    var text = fc.getAttribute('data-text')
    var checked = fc.getAttribute('data-checked') === '' || fc.getAttribute('data-checked') === 'true'

    fc.innerHTML = '<style>.funcaptcha_div{display:inline-block;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;border:1px solid #d4d4d4;padding:15px 40px 15px 30px;border-radius:3px;background:#f9f9f9}.funcaptcha_div label{display:flex;justify-content:center;align-items:center}.funcaptcha_div input{margin:0;padding:0}.funcaptcha_div span{margin-left:8px}</style><div class="funcaptcha_div"><label><input type="checkbox" ' + (checked ? 'checked' : '') + ' onclick="funcaptcha_onclick(this)"><span>' + text + '</span></label></div>'
  }
}

if (!window.funcaptcha_nostartup) window.funcaptcha_init()
