import Dialog from "newui/screen/screens/game/component/Dialog";
import { TranslationGenerator } from "newui/component/IComponent";
import { IDialogDescription, Edge, DialogId } from "newui/screen/screens/game/Dialogs";
import { IHookHost } from "mod/IHookHost";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
import Button, { ButtonEvent } from "newui/component/Button";
import { Actions } from "../Actions";

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

	public constructor(gsapi: IGameScreenApi, id: DialogId) {
		super(gsapi, id);
		this.classes.add("spellbook-dialog");

		new Button(this.api)
			.setText(() => [{content:"ignite"}])
			.on(ButtonEvent.Activate, () => Actions.get("ignite").execute())
			.appendTo(this.body);

		new Button(this.api)
			.setText(() => [{content:"clairvoyance"}])
			.on(ButtonEvent.Activate, () => Actions.get("clairvoyance").execute())
			.appendTo(this.body);
	}

	getName(): TranslationGenerator {
		return () => [{content: "spellbook"}];
	}
}