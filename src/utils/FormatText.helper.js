class FormatText {
  strReplace = (source, replace, replaceWith) => {
    var value = source;
    var i = 0;
    for (i; i < value.length; i++) {
      value = value.replace(replace, replaceWith);
    }
    return value;
  };

  formattingNumber = i => {
    if (typeof i === 'number') {
      return i.toLocaleString(navigator.language, {minimumFractionDigits: 0});
    }
    return i;
  };

  formatNumber(num) {
    const value = num || '';
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  removeDot(num) {
    return num.split('.').join('');
  }

  formatMoney(num) {
    num = parseInt(num) + '';

    if (num == '' || num == '0') {
      return 0;
    }

    num = num.replace(/\./g, '');
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return num_parts.join('.');
  }

  formatMoneyWithCurrency(num, currency = 'Rp') {
    if (!num) {
      num = 0;
    }
    const formattedMoney = this.formatMoney(parseInt(num));

    return currency + ' ' + formattedMoney;
  }

  moneytoInt(num) {
    if (num) {
      return num.replace(/\./g, '');
    } else {
      return 0;
    }
  }

  blurName(name) {
    name = name.slice(0, -3);
    name = name + '***';
    return name;
  }

  remove62Phone(num) {
    let newNumber = num;
    var checking62 = num?.substring(0, 3);
    if (checking62 === '+62') {
      newNumber = '0' + newNumber.slice(3);
    }
    return newNumber;
  }

  firstCapital(str) {
    return str.replace(/^\w/, c => c.toUpperCase());
  }

  capitalize(str) {
    return str
      ? str.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
      : null;
  }

  firstWord(str) {
    if (typeof str !== 'string') {
      return '';
    }

    let arrayName = str.trim();
    arrayName = arrayName.split(' ');

    return arrayName[0];
  }

  cutWord = (text, length) => {
    if (text?.length > length) {
      text = text?.substring(0, length - 1) + '...';
    }
    return text;
  };
}

export default new FormatText();
