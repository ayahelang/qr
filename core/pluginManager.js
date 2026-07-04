/*
====================================================
SilverQR Plugin Manager
Version : 2.0.0
====================================================
*/

export default class PluginManager {

    constructor(){

        this.plugins = new Map();

    }

    async load(pluginName){

        if(this.plugins.has(pluginName)){

            return this.plugins.get(pluginName);

        }

        //------------------------------------------------

        const module = await import(

            `../plugins/${pluginName}/index.js`

        );

        const plugin = new module.default();

        //------------------------------------------------

        this.plugins.set(

            pluginName,

            plugin

        );

        return plugin;

    }

    //----------------------------------------------------

    async run(pluginName,context={}){

        const plugin = await this.load(

            pluginName

        );

        if(plugin.init){

            await plugin.init(context);

        }

        if(plugin.run){

            await plugin.run(context);

        }

        return plugin;

    }

}
