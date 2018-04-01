'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

// console.log('ServiceProvider', ServiceProvider)

class AppProvider extends ServiceProvider {

  _registerCommands () {
    this.app.bind('Adonis/Commands/Make:Rest', () => require('../commands/MakeRest'))
  }

  /**
   * Register all the required providers
   *
   * @method register
   *
   * @return {void}
   */
  register () {
    this._registerCommands()
  }

  /**
   * On boot add commands with ace
   *
   * @method boot
   *
   * @return {void}
   */
  boot () {
    const ace = require('@adonisjs/ace')
    ace.addCommand('Adonis/Commands/Make:Rest')
  }

}

module.exports = AppProvider
