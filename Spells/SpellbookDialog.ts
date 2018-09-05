import Dialog from "newui/screen/screens/game/component/Dialog";
import { TranslationGenerator } from "newui/component/IComponent";
import { IDialogDescription, Edge, DialogId } from "newui/screen/screens/game/Dialogs";
import { IHookHost } from "mod/IHookHost";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import Button, { ButtonEvent } from "newui/component/Button";
import MagicMod from "../MagicMod";
import { TileEventType } from "tile/ITileEvent";
import Mod from "mod/Mod";
import { IMagicMod, MAGIC_MOD_ID } from "../IMagicMod";

export class SpellbookDialog extends Dialog implements IHookHost {
	public static description: IDialogDescription = {
		minSize: {
			x: 25,
			y: 25,
		},
		size: {
			x: 25,
			y: 30,
		},
		maxSize: {
			x: 40,
			y: 70,
		},
		edges: [
			[Edge.Left, 25],
			[Edge.Bottom, 0],
		],
	};

	@Mod.instance<MagicMod>(MAGIC_MOD_ID)
	public readonly magicMod: IMagicMod;

	get mana() {
		return this.magicMod.manaProvider;
	}

	public constructor(gsapi: IGameScreenApi, id: DialogId) {
		super(gsapi, id);
		this.classes.add("spellbook-dialog");

		new Button(this.api)
			.setText(() => [{content:"ignite"}])
			.on(ButtonEvent.Activate, () => {
				this.mana.reduce(localPlayer, 1);
				var x = localPlayer.getFacingPoint().x;
				var y = localPlayer.getFacingPoint().y;
				var z = localPlayer.getFacingPoint().z;
				tileEventManager.create(TileEventType.Fire, x, y, z);
				game.updateView(true);
			})
			.appendTo(this.body);

		new Button(this.api)
			.setText(() => [{content:"clairvoyance"}])
			.on(ButtonEvent.Activate, () => {
				
			})
			.appendTo(this.body);
	}

	getName(): TranslationGenerator {
		return () => [{content: "spellbook"}];
	}
}