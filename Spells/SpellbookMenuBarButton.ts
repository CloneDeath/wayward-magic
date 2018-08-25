import { IMenuBarButtonDescription, MenuBarButtonGroup } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { Bindable } from "Enums";
import { ITooltip } from "newui/component/IComponent";

export class SpellbookMenuBarButton implements IMenuBarButtonDescription {
	public static buttonName : string = "Spellbook";

	group : MenuBarButtonGroup = MenuBarButtonGroup.World;

	bindable: Bindable;

	constructor(bindable: Bindable){
		this.bindable = bindable;
	}

	tooltip = (tooltip:ITooltip) : ITooltip => {
		return tooltip.addText(t => t.setText(() => [{content: "Spellbook"}]));
	}

	onActivate = function(): void {

	}
}