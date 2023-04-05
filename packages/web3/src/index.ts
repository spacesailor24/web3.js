import { Web3PluginFactory, Web3RequestManager } from "web3-core";
import { HttpProvider, WsProvider } from "web3-providers";

export class Web3 {
    private _web3RequestManager: Web3RequestManager;

    constructor(
        provider: HttpProvider | WsProvider,
        plugins: Web3PluginFactory[],
        actions?: never
    )
    constructor(
        provider: HttpProvider | WsProvider,
        actions: unknown[],
        plugins?: never,
    )
    constructor(
        provider: HttpProvider | WsProvider,
        pluginsOrActions?: Web3PluginFactory[] | unknown[],
        actions?: unknown[]
    )
    constructor(
        provider: HttpProvider | WsProvider,
        pluginsOrActions?: Web3PluginFactory[] | unknown[],
        actions?: unknown[]
    ) {
        this._web3RequestManager = new Web3RequestManager(provider);

        if (pluginsOrActions !== undefined && pluginsOrActions.length > 0) {
            if ((pluginsOrActions[0] as Web3PluginFactory).init !== undefined) {
                this._initPlugins(pluginsOrActions as Web3PluginFactory[]);
            } else {
                this._initActions(pluginsOrActions);
            }
        }

        if (actions !== undefined) this._initActions(actions);
    }

    private _initPlugins(plugins: Web3PluginFactory[]) {
        for (const plugin of plugins) {
            // @ts-ignore
            this[plugin.pluginNamespace] = plugin.init(this._web3RequestManager);
        }
    }

    private _initActions(actions: unknown[]) {
        for (const action of actions) {
            // @ts-ignore
            this[action.name] = function () {
                // @ts-ignore
                return action(this._web3RequestManager, ...arguments);
            }
        }
    }
}
