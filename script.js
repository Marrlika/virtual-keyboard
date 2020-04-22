const CAPS_LOCK = 'CapsLock';
const SHIFT_RIGHT = 'ShiftRight';
const SHIFT_LEFT = 'ShiftLeft';
const CONTROL_LEFT = 'ControlLeft';
const ALT_LEFT = 'AltLeft';

const buttonsKey = [
  {
    code: 'Backquote', engLayout: '`', engLayoutShift: '~', rusLayout: 'ё', rusLayoutShift: 'Ё',
  }, {
    code: 'Digit1', engLayout: '1', engLayoutShift: '!', rusLayout: '1', rusLayoutShift: '!',
  }, {
    code: 'Digit2', engLayout: '2', engLayoutShift: '@', rusLayout: '2', rusLayoutShift: '"',
  }, {
    code: 'Digit3', engLayout: '3', engLayoutShift: '#', rusLayout: '3', rusLayoutShift: '№',
  }, {
    code: 'Digit4', engLayout: '4', engLayoutShift: '$', rusLayout: '4', rusLayoutShift: ';',
  }, {
    code: 'Digit5', engLayout: '5', engLayoutShift: '%', rusLayout: '5', rusLayoutShift: '%',
  }, {
    code: 'Digit6', engLayout: '6', engLayoutShift: '^', rusLayout: '6', rusLayoutShift: ':',
  }, {
    code: 'Digit7', engLayout: '7', engLayoutShift: '&', rusLayout: '7', rusLayoutShift: '?',
  }, {
    code: 'Digit8', engLayout: '8', engLayoutShift: '*', rusLayout: '8', rusLayoutShift: '*',
  }, {
    code: 'Digit9', engLayout: '9', engLayoutShift: '(', rusLayout: '9', rusLayoutShift: '(',
  }, {
    code: 'Digit0', engLayout: '0', engLayoutShift: ')', rusLayout: '0', rusLayoutShift: ')',
  }, {
    code: 'Minus', engLayout: '-', engLayoutShift: '_', rusLayout: '-', rusLayoutShift: '_',
  }, {
    code: 'Equal', engLayout: '=', engLayoutShift: '+', rusLayout: '=', rusLayoutShift: '+',
  }, {
    code: 'Backspace', isSpecial: true, engLayout: 'Backspace',
  }, {
    code: 'Tab', isSpecial: true, engLayout: 'Tab',
  }, {
    code: 'KeyQ', engLayout: 'q', engLayoutShift: 'Q', rusLayout: 'й', rusLayoutShift: 'Й',
  }, {
    code: 'KeyW', engLayout: 'w', engLayoutShift: 'W', rusLayout: 'ц', rusLayoutShift: 'Ц',
  }, {
    code: 'KeyE', engLayout: 'e', engLayoutShift: 'E', rusLayout: 'у', rusLayoutShift: 'У',
  }, {
    code: 'KeyR', engLayout: 'r', engLayoutShift: 'R', rusLayout: 'к', rusLayoutShift: 'К',
  }, {
    code: 'KeyT', engLayout: 't', engLayoutShift: 'T', rusLayout: 'е', rusLayoutShift: 'Е',
  }, {
    code: 'KeyY', engLayout: 'y', engLayoutShift: 'Y', rusLayout: 'н', rusLayoutShift: 'Н',
  }, {
    code: 'KeyU', engLayout: 'u', engLayoutShift: 'U', rusLayout: 'г', rusLayoutShift: 'Г',
  }, {
    code: 'KeyI', engLayout: 'i', engLayoutShift: 'I', rusLayout: 'ш', rusLayoutShift: 'Ш',
  }, {
    code: 'KeyO', engLayout: 'o', engLayoutShift: 'O', rusLayout: 'щ', rusLayoutShift: 'Щ',
  }, {
    code: 'KeyP', engLayout: 'p', engLayoutShift: 'P', rusLayout: 'з', rusLayoutShift: 'З',
  }, {
    code: 'BracketLeft', engLayout: '[', engLayoutShift: '{', rusLayout: 'х', rusLayoutShift: 'Х',
  }, {
    code: 'BracketRight', engLayout: ']', engLayoutShift: '}', rusLayout: 'ъ', rusLayoutShift: 'Ъ',
  }, {
    code: 'Backslash', engLayout: '\\', engLayoutShift: '|', rusLayout: '\\', rusLayoutShift: '/',
  }, {
    code: 'Delete', isSpecial: true, engLayout: 'DEL',
  }, {
    code: CAPS_LOCK, isSpecial: true, engLayout: 'Caps Lock',
  }, {
    code: 'KeyA', engLayout: 'a', engLayoutShift: 'A', rusLayout: 'ф', rusLayoutShift: 'Ф',
  }, {
    code: 'KeyS', engLayout: 's', engLayoutShift: 'S', rusLayout: 'ы', rusLayoutShift: 'Ы',
  }, {
    code: 'KeyD', engLayout: 'd', engLayoutShift: 'D', rusLayout: 'в', rusLayoutShift: 'В',
  }, {
    code: 'KeyF', engLayout: 'f', engLayoutShift: 'F', rusLayout: 'а', rusLayoutShift: 'А',
  }, {
    code: 'KeyG', engLayout: 'g', engLayoutShift: 'G', rusLayout: 'п', rusLayoutShift: 'П',
  }, {
    code: 'KeyH', engLayout: 'h', engLayoutShift: 'H', rusLayout: 'р', rusLayoutShift: 'Р',
  }, {
    code: 'KeyJ', engLayout: 'j', engLayoutShift: 'J', rusLayout: 'о', rusLayoutShift: 'О',
  }, {
    code: 'KeyK', engLayout: 'k', engLayoutShift: 'K', rusLayout: 'л', rusLayoutShift: 'Л',
  }, {
    code: 'KeyL', engLayout: 'l', engLayoutShift: 'L', rusLayout: 'д', rusLayoutShift: 'Д',
  }, {
    code: 'Semicolon', engLayout: ';', engLayoutShift: ':', rusLayout: 'ж', rusLayoutShift: 'Ж',
  }, {
    code: 'Quote', engLayout: "'", engLayoutShift: '"', rusLayout: 'э', rusLayoutShift: 'Э',
  }, {
    code: 'Enter', isSpecial: true, engLayout: 'Enter',
  }, {
    code: SHIFT_LEFT, isSpecial: true, engLayout: 'Shift',
  }, {
    code: 'KeyZ', engLayout: 'z', engLayoutShift: 'Z', rusLayout: 'я', rusLayoutShift: 'Я',
  }, {
    code: 'KeyX', engLayout: 'x', engLayoutShift: 'X', rusLayout: 'ч', rusLayoutShift: 'Ч',
  }, {
    code: 'KeyC', engLayout: 'c', engLayoutShift: 'C', rusLayout: 'с', rusLayoutShift: 'С',
  }, {
    code: 'KeyV', engLayout: 'v', engLayoutShift: 'V', rusLayout: 'м', rusLayoutShift: 'М',
  }, {
    code: 'KeyB', engLayout: 'b', engLayoutShift: 'B', rusLayout: 'и', rusLayoutShift: 'И',
  }, {
    code: 'KeyN', engLayout: 'n', engLayoutShift: 'N', rusLayout: 'т', rusLayoutShift: 'Т',
  }, {
    code: 'KeyM', engLayout: 'm', engLayoutShift: 'M', rusLayout: 'ь', rusLayoutShift: 'Ь',
  }, {
    code: 'Comma', engLayout: ',', engLayoutShift: '<', rusLayout: 'б', rusLayoutShift: 'Б',
  }, {
    code: 'Period', engLayout: '.', engLayoutShift: '>', rusLayout: 'ю', rusLayoutShift: 'Ю',
  }, {
    code: 'Slash', engLayout: '/', engLayoutShift: '?', rusLayout: '.', rusLayoutShift: ',',
  }, {
    code: 'ArrowUp', engLayout: '▲', engLayoutShift: '▲', rusLayout: '▲', rusLayoutShift: '▲',
  }, {
    code: SHIFT_RIGHT, isSpecial: true, engLayout: 'Shift',
  }, {
    code: CONTROL_LEFT, isSpecial: true, engLayout: 'Ctrl',
  }, {
    code: 'MetaLeft', isSpecial: true, engLayout: 'Win',
  }, {
    code: ALT_LEFT, isSpecial: true, engLayout: 'Alt',
  }, {
    code: 'Space', isSpecial: true, engLayout: ' ',
  }, {
    code: 'AltRight', isSpecial: true, engLayout: 'Alt',
  }, {
    code: 'ArrowLeft', engLayout: '◄', engLayoutShift: '◄', rusLayout: '◄', rusLayoutShift: '◄',
  }, {
    code: 'ArrowDown', engLayout: '▼', engLayoutShift: '▼', rusLayout: '▼', rusLayoutShift: '▼',
  }, {
    code: 'ArrowRight', engLayout: '►', engLayoutShift: '►', rusLayout: '►', rusLayoutShift: '►',
  }, {
    code: 'ControlRight', isSpecial: true, engLayout: 'Ctrl',
  },
];

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
const instruction = document.createElement('div');
instruction.innerHTML = 'Language change: left Ctrl + left Alt <br> Keyboard created at Windows operating system';
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
function getLanguage() {
  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', 'engLayout');
  }
  return localStorage.getItem('language');
}

let isUpperCase = false;
let isShiftPush = false;
let isControlLeft = false;
let isAltLeft = false;
let language = getLanguage();
class Button {
  constructor(buttonKey, lang) {
    this.code = buttonKey.code;
    this.isSpecial = buttonKey.isSpecial || false;
    this.engLayout = buttonKey.engLayout;
    this.engLayoutShift = buttonKey.engLayoutShift;
    this.rusLayout = buttonKey.rusLayout;
    this.rusLayoutShift = buttonKey.rusLayoutShift;
    this.CurrentValue = (this.isSpecial) ? this.engLayout : this[lang];
  }

  createButton() {
    const button = document.createElement('button');
    button.id = this.code;
    button.classList = 'keyboard__button';
    if (this.isSpecial) {
      button.classList.add(`keyboard__button_${this.code[0].toLowerCase() + this.code.slice(1)}`);
    }
    button.innerHTML = this.CurrentValue;
    return button;
  }

  getCurrentValue() {
    return this.CurrentValue;
  }

  updateCurrentValue(currentLanguage, shiftPushed, capsLockPushed) {
    if (!this.isSpecial) {
      if (shiftPushed) {
        this.CurrentValue = this[`${currentLanguage}Shift`];
        if (capsLockPushed) {
          this.CurrentValue = this.CurrentValue.toLowerCase();
        }
      } else if (capsLockPushed) {
        this.CurrentValue = this[currentLanguage].toUpperCase();
      } else {
        this.CurrentValue = this[currentLanguage];
      }
    }
  }
}

const buttonsObj = {};
buttonsKey.forEach((key) => {
  buttonsObj[key.code] = new Button(key, language);
  keyboard.append(buttonsObj[key.code].createButton());
});

const wrapper = document.createElement('div');
wrapper.classList = 'wrapper';
wrapper.append(textarea, keyboard, instruction);
document.body.append(wrapper);

textarea.focus();
textarea.addEventListener('blur', () => textarea.focus());

function PushButton(button) {
  if (button) {
    if (!button.classList.contains('button_pushed')) {
      button.classList.add('button_pushed');
    }
  }
}

function removePushedButton(button) {
  if (button) {
    if (button.classList.contains('button_pushed')) {
      button.classList.remove('button_pushed');
    }
  }
}

function updateTextarea(codeButton) {
  const currentTextarea = textarea.value.split('');
  let selectionPositionEnd = textarea.selectionEnd;
  const currentElement = buttonsObj[codeButton];
  switch (codeButton) {
    case 'Tab':
      currentTextarea.splice(selectionPositionEnd, 0, '\t');
      selectionPositionEnd += 1;
      break;
    case 'Backspace':
      currentTextarea.splice(selectionPositionEnd - 1, 1);
      selectionPositionEnd -= 1;
      break;
    case 'Delete':
      currentTextarea.splice(selectionPositionEnd, 1);
      break;
    case 'Enter':
      currentTextarea.splice(selectionPositionEnd, 0, '\n');
      selectionPositionEnd += 1;
      break;
    case 'MetaLeft':
    case 'AltRight':
    case 'ControlRight':
      break;
    default:
      currentTextarea.splice(selectionPositionEnd, 0, currentElement.getCurrentValue());
      selectionPositionEnd += 1;
  }
  textarea.value = currentTextarea.join('');
  textarea.selectionEnd = selectionPositionEnd;
}

function updateButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    const buttonObj = buttonsObj[button.id];
    buttonObj.updateCurrentValue(language, isShiftPush, isUpperCase);
    document.getElementById(button.id).innerHTML = buttonObj.getCurrentValue();
  });
}

function updateIsUpperCase(key) {
  if (isUpperCase) {
    removePushedButton(key);
  } else {
    PushButton(key);
  }
  isUpperCase = !isUpperCase;
  updateButtons();
}

function changeLanguage() {
  language = (language === 'engLayout') ? 'rusLayout' : 'engLayout';
  localStorage.setItem('language', language);
  updateButtons();
}

function keyDown(code) {
  const currentButton = document.getElementById(code);
  switch (code) {
    case CAPS_LOCK:
      updateIsUpperCase(currentButton);
      break;
    case SHIFT_RIGHT:
    case SHIFT_LEFT:
      if (!isShiftPush) {
        PushButton(currentButton);
        isShiftPush = true;
        updateButtons();
      }
      break;
    case CONTROL_LEFT:
      PushButton(currentButton);
      isControlLeft = true;
      if (isAltLeft) {
        changeLanguage();
      }
      break;
    case ALT_LEFT:
      PushButton(currentButton);
      isAltLeft = true;
      if (isControlLeft) {
        changeLanguage();
      }
      break;
    default:
      PushButton(currentButton);
      updateTextarea(code);
  }
}

function keyUp(code) {
  const currentButton = document.getElementById(code);
  switch (code) {
    case CAPS_LOCK:
      break;
    case SHIFT_RIGHT:
    case SHIFT_LEFT:
      removePushedButton(currentButton);
      isShiftPush = false;
      updateButtons();
      break;
    case CONTROL_LEFT:
      removePushedButton(currentButton);
      isControlLeft = false;
      break;
    case ALT_LEFT:
      removePushedButton(currentButton);
      isAltLeft = false;
      break;
    default:
      removePushedButton(currentButton);
  }
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (buttonsObj[event.code]) {
    keyDown(event.code);
  }
});

document.addEventListener('keyup', (event) => {
  keyUp(event.code);
});

document.addEventListener('mousedown', (event) => {
  if (event.target.tagName === 'BUTTON') {
    keyDown(event.target.id);
  }
});

document.addEventListener('mouseup', (event) => {
  if (event.target.tagName === 'BUTTON') {
    keyUp(event.target.id);
  }
});
