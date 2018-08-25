import Mod from "mod/Mod";
import { IStatDisplayDescription } from "newui/screen/screens/game/static/stats/IStatDisplayDescription";
import { StatDisplayType } from "entity/IStats";
import StatFactory from "entity/StatFactory";
import IPlayer from "player/IPlayer";
import { HookMethod } from "mod/IHookHost";
import Log from "utilities/Log";
import { SpellbookMenuBarButton } from "./Spells/SpellbookMenuBarButton";
import Register from "mod/ModRegistry";
import { SpellbookDialog } from "./Spells/SpellbookDialog";

let log : Log;

export default class HelloWorld extends Mod {
	mana: number;
	manaFactory: StatFactory;

	@Register.dialog("Spellbook", SpellbookDialog.description, SpellbookDialog)
	

	public onInitialize(): void {
		log = this.getLog();
		
		this.mana = this.addStat("Mana", new ManaStatDescription() );
		
		this.manaFactory = new StatFactory(this.mana, 100);
		this.manaFactory.setMax(100);
		this.manaFactory.setChangeTimer(10, 1);

		let binding = this.addBindable("spellbook", { key: "KeyB"});
		this.addMenuBarButton(SpellbookMenuBarButton.buttonName, new SpellbookMenuBarButton(binding));
	}

	@HookMethod
	public onGameStart(isLoadingSave: boolean, playedCount: number): void {
		log.info("game start: " + localPlayer.name)
		this.manaFactory.initializeOn(localPlayer);
		localPlayer.updateStatsAndAttributes();
	}
	
	@HookMethod
	onPlayerJoin(player: IPlayer): void{
		log.info("player joined: " + player.name)
		this.manaFactory.initializeOn(player);
		player.updateStatsAndAttributes();
	}
}

class ManaStatDescription implements IStatDisplayDescription {
    color?: string = "#00f";
    displayType?: StatDisplayType = StatDisplayType.Statbar;
	displayOrder?: number = 100;
}