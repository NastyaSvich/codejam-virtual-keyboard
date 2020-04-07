const Keyboard = {
  elements: {
    main: null,
    text: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    c: false,
  },

  init() {
    // Create main elements
    this.elements.text = document.createElement('textarea');
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add('keyboard', 'keyboard--hidden');
    this.elements.text.classList.add('use-keyboard-input');
    this.elements.keysContainer.appendChild(this.createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
    document.body.appendChild(this.elements.text);


    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll('.use-keyboard-input').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
      9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
      20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 27,
      16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 106, 38, 110,
      17, 91, 18, 32, 107, 109, 37, 40, 39];


    // Creates HTML for an icon
    const createIconHTML = (iconname) => `<i class="material-icons">${iconname}</i>`;


    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = [8, 220, 27, 110].indexOf(key) !== -1;

      let count = 0;

      if (localStorage.languag === 'NaN') {
        localStorage.languag = 0;
      }


      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      this.elements.text.setAttribute('id', 'cap');
      keyElement.classList.add('keyboard__key');
      keyElement.setAttribute('data', key);
      let flag = false;
      let q = 0; let
        a = 0;
      document.onkeydown = function pr(event) {
        for (let s = 0; s < keyLayout.length; s += 1) {
          if (event.keyCode === keyLayout[s]) {
            q = 1;
          }
        }
        if (q === 1) {
          q = 0;
          document.querySelector(`button[data = "${event.keyCode}"]`).classList.add('active');
        }
        if (event.keyCode === 16) flag = true;
        if (event.keyCode === 17 && flag) {
          flag = false;
          if (localStorage.languag % 2 === 0) localStorage.languag = 1;
          else localStorage.languag = 0;
          window.location.reload();
        }
      };


      document.onkeyup = function pr(event) {
        for (let s = 0; s < keyLayout.length; s += 1) {
          if (event.keyCode === keyLayout[s]) {
            a = 1;
          }
        }
        if (a === 1) {
          a = 0;
          document.querySelector(`button[data = "${event.keyCode}"]`).classList.remove('active');
        }
      };


      switch (key) {
        case 8:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('backspace');

          keyElement.addEventListener('click', () => {
            const x = this.properties.value.substring(0, this.properties.value.length - 1);
            this.properties.value = x;
            this.triggerEvent('oninput');
          });

          break;

        case 91:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('language');

          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 === 0) localStorage.languag = 1;
            else localStorage.languag = 0;
            window.location.reload();
          });


          break;


        case 9:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'Tab';
          break;

        case 109:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '-';
          keyElement.addEventListener('click', () => {
            this.properties.value += '-';
            this.triggerEvent('oninput');
          });
          break;

        case 81:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'q';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'й';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'q';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'й';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 87:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'w';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ц';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'w';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ц';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 69:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'e';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'у';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'e';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'у';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 82:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'r';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'к';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'r';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'к';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 84:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 't';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'е';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 't';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'е';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 89:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'y';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'н';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'y';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'н';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 85:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'u';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'г';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'u';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'г';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 73:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'i';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ш';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'i';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ш';
            }
            this.triggerEvent('oninput');
          });
          break;


        case 79:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'o';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'щ';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'o';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'щ';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 80:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'p';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'з';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'p';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'з';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 65:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'a';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ф';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'a';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ф';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 83:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 's';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ы';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 's';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ы';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 68:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'd';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'в';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'd';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'в';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 70:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'f';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'а';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'f';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'а';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 71:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'g';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'п';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'g';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'п';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 72:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'h';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'р';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'h';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'р';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 74:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'j';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'о';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'j';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'о';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 75:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'k';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'л';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'k';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'л';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 76:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'l';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'д';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'l';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'д';
            }
            this.triggerEvent('oninput');
          });
          break;


        case 110:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = '.';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = ',';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += '.';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += ',';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 106:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '*';
          keyElement.addEventListener('click', () => {
            this.properties.value += '*';
            this.triggerEvent('oninput');
          });
          break;

        case 107:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '+';
          keyElement.addEventListener('click', () => {
            this.properties.value += '+';
            this.triggerEvent('oninput');
          });
          break;


        case 192:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = '~';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ё';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += '~';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ё';
            }
            this.triggerEvent('oninput');
          });
          break;


        case 189:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '-';
          keyElement.addEventListener('click', () => {
            this.properties.value += '-';
            this.triggerEvent('oninput');
          });
          break;

        case 187:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '=';
          keyElement.addEventListener('click', () => {
            this.properties.value += '=';
            this.triggerEvent('oninput');
          });
          break;

        case 219:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = '[';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'х';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += '[';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'х';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 221:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = ']';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ъ';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += ']';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ъ';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 220:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '\\';
          keyElement.addEventListener('click', () => {
            this.properties.value += '\\';
            this.triggerEvent('oninput');
          });
          break;

        case 186:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = ';';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ж';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += ';';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ж';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 222:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = "'";
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'э';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += "'";
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'э';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 90:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'z';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'я';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'z';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'я';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 88:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'x';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ч';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'x';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ч';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 86:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'v';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'м';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'v';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'м';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 66:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'b';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'и';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'b';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'и';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 78:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'n';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'т';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'n';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'т';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 77:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = 'm';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ь';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += 'm';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ь';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 188:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = ',';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'б';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += ',';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'б';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 190:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = '.';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = 'ю';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += '.';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += 'ю';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 191:
          keyElement.classList.add('keyboard__key');
          if (localStorage.languag % 2 !== 0) {
            keyElement.innerHTML = '/';
          } else if (localStorage.languag % 2 === 0) {
            keyElement.innerHTML = '.';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.languag % 2 !== 0) {
              this.properties.value += '/';
            } else if (localStorage.languag % 2 === 0) {
              this.properties.value += '.';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 18:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'Alt';
          break;

        case 17:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'Ctrl';
          break;

        case 16:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'Shift';
          break;


        case 38:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_up');
          break;

        case 40:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_down');
          break;

        case 37:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_left');
          break;

        case 39:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_right');
          break;

        case 20:
          keyElement.classList.add('keyboard__key', 'keyboard__key--activatable');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');

          keyElement.addEventListener('click', () => {
            if (count % 2 === 0) {
              this.toggleCapsLock();
              keyElement.classList.toggle('keyboard__key--active', this.properties.c);
              document.getElementById('cap').style.textTransform = 'uppercase';
            } else if (count % 2 !== 0) {
              this.toggleCapsLock();
              keyElement.classList.toggle('keyboard__key--active', this.properties.c);
              document.getElementById('cap').style.textTransform = 'none';
            }
            count += 1;
          });

          break;

        case 13:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent('oninput');
          });

          break;

        case 32:
          keyElement.classList.add('probel');
          keyElement.innerHTML = createIconHTML('space_bar');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.triggerEvent('oninput');
          });

          break;

        case 27:
          keyElement.classList.add('keyboard__key', 'keyboard__key--dark');
          keyElement.innerHTML = createIconHTML('check_circle');

          keyElement.addEventListener('click', () => {
            this.close();
            this.triggerEvent('onclose');
          });

          break;


        default:


          keyElement.textContent = String.fromCharCode(key).toLowerCase();

          keyElement.addEventListener('click', () => {
            this.properties.value += String.fromCharCode(key);
            this.triggerEvent('oninput');
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },

  triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  toggleCapsLock() {
    this.properties.c = !this.properties.c;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        const m = this.properties.c ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        key.textContent = m;
      }
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove('keyboard--hidden');
  },

  close() {
    this.properties.value = '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add('keyboard--hidden');
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
document.body.innerHTML = 'Change the language: Shift+Ctrl. This is app for Windows!';
