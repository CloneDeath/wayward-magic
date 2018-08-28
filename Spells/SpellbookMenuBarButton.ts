import { IMenuBarButtonDescription, MenuBarButtonGroup } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { Bindable } from "Enums";
import { ITooltip } from "newui/component/IComponent";
import GameScreen from "newui/screen/screens/GameScreen";
import { ScreenId } from "newui/screen/IScreen";
import { DialogId } from "newui/screen/screens/game/Dialogs";

export class SpellbookMenuBarButton implements IMenuBarButtonDescription {
	public static buttonName : string = "Spellbook";

	group : MenuBarButtonGroup = MenuBarButtonGroup.World;
	bindable: Bindable;

	spellbookDialogId: DialogId;

	constructor(bindable: Bindable, spellbookDialogId: DialogId){
		this.bindable = bindable;
		this.spellbookDialogId = spellbookDialogId;
	}

	tooltip = (tooltip:ITooltip) : ITooltip => {
		return tooltip.addText(t => t.setText(() => [{content: "Spellbook"}]));
	}

	onActivate = function(): void {
		newui.getScreen<GameScreen>(ScreenId.Game)
			 .toggleDialog(this.spellbookDialogId);
	}
}