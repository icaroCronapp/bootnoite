window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Periodo = window.blockly.js.blockly.Periodo || {};

/**
 * @function mostraModal
 *
 *
 *
 *
 * @author Ícaro Antunes
 * @since 15/12/2023, 17:04:42
 *
 */
window.blockly.js.blockly.Periodo.mostraModalArgs = [];
window.blockly.js.blockly.Periodo.mostraModal = async function() {
 var item;
  //
  this.cronapi.util.callServerBlocklyAsynchronous('blockly.Periodo:obterPeriodoAtivo', async function(sender_item) {
      item = sender_item;
  }.bind(this));
}
