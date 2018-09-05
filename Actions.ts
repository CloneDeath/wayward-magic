import IPlayer from "player/IPlayer";
import { IActionArgument, IActionResult, ActionCallback, IActionDescriptionNamed } from "action/IAction";
import Mod from "mod/Mod";
import { MAGIC_MOD_ID, IMagicMod } from "./IMagicMod";
import MagicMod from "./MagicMod";
import Log from "utilities/Log";
import Register, { Registry } from "mod/ModRegistry";
import { TileEventType } from "tile/ITileEvent";
import ExploreMap from "renderer/ExploreMap";

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
		if (this.mana.get(executor) < 0) return;
		
		this.mana.reduce(executor, 1);
		var x = executor.getFacingPoint().x;
		var y = executor.getFacingPoint().y;
		var z = executor.getFacingPoint().z;
		tileEventManager.create(TileEventType.Fire, x, y, z);
		result.updateRender = true;
	}

	@Mod.log(MAGIC_MOD_ID)
	public log: Log;

	@Register.action(description("clairvoyance"))
	public clairvoyance(executor: IPlayer, {}: IActionArgument, result: IActionResult){
		let exploredMap = executor.exploredMap;
		if (!exploredMap) {
			exploredMap = executor.exploredMap = [];
		}

		let explored = exploredMap[executor.z];
		if (!explored) {
			const layer = (renderer && renderer.layers) ? renderer.layers[executor.z] : undefined;
			explored = exploredMap[executor.z] = new ExploreMap(layer ? layer.width : game.mapSize, layer ? layer.height : game.mapSize);
		}

		const bounds = fieldOfView.getBounds(executor);
		for (let x = bounds.min.x; x < bounds.max.x; x++) {
			for (let y = bounds.min.y; y < bounds.max.y; y++) {
				const wx = game.getWrappedCoord(x);
				const wy = game.getWrappedCoord(y);

				this.log.info("wx: " + wx + ", wy: " + wy + ", val: " + explored.get(wx, wy));
				if (explored.get(wx, wy) !== 255 && this.isVisible(executor, x, y)) {
					explored.set(wx, wy, 255);
				}
			}
		}

		if (executor.isLocalPlayer()){
			const gl = (fieldOfView as any).gl;
            const explored = world.layers[localPlayer.z].exploredMap;

            gl.bindTexture(gl.TEXTURE_2D, renderer.layers[localPlayer.z].texExplored);

            const bounds = fieldOfView.getBounds(localPlayer);
            for (let x = bounds.min.x; x < bounds.max.x; x++) {
                for (let y = bounds.min.y; y < bounds.max.y; y++) {
                    const wx = game.getWrappedCoord(x);
                    const wy = game.getWrappedCoord(y);
					if (explored.get(wx, wy) !== 255 && this.isVisible(localPlayer, x, y)) {
                        explored.set(wx, wy, 255);
                        gl.texSubImage2D(gl.TEXTURE_2D, 0, wx, wy, 1, 1, gl.ALPHA, gl.UNSIGNED_BYTE, new Uint8Array([255]));
                    }
                }
            }
		}

		fieldOfView.compute(true);
		result.updateRender = true;
		result.updateView = true;
		game.updateView(true);
	}

	isVisible(player: IPlayer, x: number, y: number){
		return this.distance(player.x, player.y, x, y) < fieldOfView.radius;
	}

	distance(x1: number, y1: number, x2: number, y2: number):number{
		let dx = x1 - x2;
		let dy = y1 - y2;
		return Math.sqrt(dx * dx + dy * dy);
	}
}