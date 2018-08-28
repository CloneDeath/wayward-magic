import { IMenuBarButtonDescription, MenuBarButtonGroup } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { Bindable } from "Enums";
import { ITooltip } from "newui/component/IComponent";
import GameScreen from "newui/screen/screens/GameScreen";
import { ScreenId } from "newui/screen/IScreen";
import { ManaProvider } from "../ManaProvider";
import MagicMod from "../MagicMod";

export class SpellbookMenuBarButton implements IMenuBarButtonDescription {
	public static buttonName : string = "Spellbook";

	group : MenuBarButtonGroup = MenuBarButtonGroup.World;
	bindable: Bindable;
	manaProvider: ManaProvider;

	get spellbookDialogId() {
		return MagicMod.INSTANCE.spellbookDialogId;
	}

	constructor(bindable: Bindable){
		this.bindable = bindable;
	}

	tooltip = (tooltip:ITooltip) : ITooltip => {
		return tooltip.addText(t => t.setText(() => [{content: "Spellbook"}]));
	}

	onActivate = function(): void {
		newui.getScreen<GameScreen>(ScreenId.Game)
			 .openDialog(this.spellbookDialogId);
	}
}