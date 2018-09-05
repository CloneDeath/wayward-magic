import IPlayer from "player/IPlayer";
import { IActionArgument, IActionResult, ActionCallback, IActionDescriptionNamed } from "action/IAction";
import Mod from "mod/Mod";
import { MAGIC_MOD_ID, IMagicMod } from "./IMagicMod";
import MagicMod from "./MagicMod";
import Log from "utilities/Log";
import Register, { Registry } from "mod/ModRegistry";
import { TileEventType } from "tile/ITileEvent";

type ExecuteFunction<F extends any> = F extends (player: IPlayer, argument: IActionArgument<infer X>, result: IActionResult) => void ? (undefined extends Extract<X, undefined> ?
	(argument?: IActionArgument<X>) => void : (argument: IActionArgument<X>) => void) : never;

function description(name: string): IActionDescriptionNamed {
	return { name, usableAsGhost: false, usableWhenPaused: false, ignoreHasDelay: true };
}

export class Actions {
	@Mod.instance<MagicMod>(MAGIC_MOD_ID)
	public static readonly magicMod: IMagicMod;

	@Mod.log(MAGIC_MOD_ID)
	public static readonly log: Log;

	/**
	 * Returns an action by its method name.
	 */
	public static get<K extends keyof Actions, F extends Actions[K]>(name: K): { execute: ExecuteFunction<F> } {
		return {
			execute: (argument: IActionArgument) => {
				const action = this.magicMod.actions[name];
				if (typeof action !== "function") {
					this.log.error(`Action ${name} is invalid`);
					return;
				}

				actionManager.execute(localPlayer, Registry.id(action as ActionCallback), argument);
			},
		} as any;
	}

	get mana() {
		return Actions.magicMod.manaProvider;
	}

	@Register.action(description("ignite"))
	public ignite(executor: IPlayer, {}: IActionArgument, result: IActionResult){
		this.mana.reduce(localPlayer, 1);
		var x = localPlayer.getFacingPoint().x;
		var y = localPlayer.getFacingPoint().y;
		var z = localPlayer.getFacingPoint().z;
		tileEventManager.create(TileEventType.Fire, x, y, z);
		result.updateRender = true;
	}
}