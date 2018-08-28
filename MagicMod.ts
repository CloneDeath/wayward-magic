import Mod from "mod/Mod";
import { IStatDisplayDescription } from "newui/screen/screens/game/static/stats/IStatDisplayDescription";
import { StatDisplayType } from "entity/IStats";
import IPlayer from "player/IPlayer";
import { HookMethod } from "mod/IHookHost";
import Log from "utilities/Log";
import { SpellbookMenuBarButton } from "./Spells/SpellbookMenuBarButton";
import { SpellbookDialog } from "./Spells/SpellbookDialog";
import Register from "mod/ModRegistry";
import { DialogId } from "newui/screen/screens/game/Dialogs";
import { ManaProvider } from "./ManaProvider";
import { IMagicMod } from "./IMagicMod";

let log : Log;

export default class MagicMod extends Mod implements IMagicMod {
	public static INSTANCE: IMagicMod;

	public manaProvider: ManaProvider;

	@Register.dialog("Spellbook", SpellbookDialog.description, SpellbookDialog)
	public spellbookDialogId : DialogId;

	public onInitialize(): void {
		MagicMod.INSTANCE = this;
		log = this.getLog();

		this.manaProvider = new ManaProvider(this.addStat("Mana", new ManaStatDescription() ));
		
		let binding = this.addBindable("spellbook", { key: "KeyB"});
		this.addMenuBarButton(SpellbookMenuBarButton.buttonName, new SpellbookMenuBarButton(binding));
	}

	@HookMethod
	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		log.info("game start: " + localPlayer.name)
		this.manaProvider.enableMana(localPlayer);
	}
	
	@HookMethod
	onPlayerJoin(player: IPlayer): void{
		log.info("player joined: " + player.name) 
		this.manaProvider.enableMana(player);
	}
}

class ManaStatDescription implements IStatDisplayDescription {
    color?: string = "#00f";
    displayType?: StatDisplayType = StatDisplayType.Statbar;
	displayOrder?: number = 100;
}