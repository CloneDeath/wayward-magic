import { IMenuBarButtonDescription, MenuBarButtonGroup } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { ITooltip } from "newui/component/IComponent";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";

export class SpellbookMenuBarButtonDescription implements IMenuBarButtonDescription {
	public static buttonName : string = "Spellbook";

	group : MenuBarButtonGroup = MenuBarButtonGroup.World;

	tooltip?(tooltip: ITooltip): ITooltip {
		return tooltip.addText(t => t.setText(() => [{content: "Spellbook"}]));
	}

	onActivate(api: IGameScreenApi): void{

	}
}