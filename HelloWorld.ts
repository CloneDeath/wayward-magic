import Mod from "mod/Mod";
import { IStatDisplayDescription } from "newui/screen/screens/game/static/stats/IStatDisplayDescription";
import { StatDisplayType } from "entity/IStats";
import StatFactory from "entity/StatFactory";
import IPlayer from "player/IPlayer";
import { HookMethod } from "mod/IHookHost";
import Log from "utilities/Log";

let log : Log;

export default class HelloWorld extends Mod {
	mana: number;
	manaFactory: StatFactory;

	public onInitialize(): void {
		log = this.getLog();
		
		this.mana = this.addStat("Mana", new ManaStatDescription() );
		
		this.manaFactory = new StatFactory(this.mana, 100);
		this.manaFactory.setMax(100);
		this.manaFactory.setChangeTimer(10, 1);
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
	imagePath?: string = "star.png";
    color?: string = "#00f";
    displayType?: StatDisplayType = StatDisplayType.Statbar;
	displayOrder?: number = 100;
	
    /**
     * Handlers for when the stat changes. Called when the stat changes & when the stat max changes.
     */
    //onChange?: Array<(statElement: Component, entity: IBaseEntity, stat: IStat, oldValue?: number) => void>;
	
	/**
     * Requires `StatDisplayType.Attribute`.
     *
     * For overriding the normal formatted output of a stat.
     */
    //getFormatted?(entity: IBaseEntity, stat?: IStat): IStringSection[];
    /**
     * A function that will initialize a tooltip for this stat element
     */
    //tooltip?(tooltip: ITooltip, entity: IBaseEntity, stat?: IStat): any;
}