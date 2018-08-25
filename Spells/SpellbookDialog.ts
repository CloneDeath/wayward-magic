import Dialog from "newui/screen/screens/game/component/Dialog";
import { TranslationGenerator } from "newui/component/IComponent";
import { IDialogDescription, Edge } from "newui/screen/screens/game/Dialogs";
import { IHookHost } from "mod/IHookHost";

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

	getName(): TranslationGenerator {
		return () => [{content: "spellbook"}];
	}
}