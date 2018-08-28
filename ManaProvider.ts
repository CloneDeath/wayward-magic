import StatFactory from "entity/StatFactory";
import IPlayer from "player/IPlayer";

export class ManaProvider {
	private mana: number;

	constructor(manaId: number){
		this.mana = manaId;
	}

	private getFactory(): StatFactory{
		let manaFactory = new StatFactory(this.mana, 10);
		manaFactory.setMax(10);
		manaFactory.setChangeTimer(10, 1);
		return manaFactory;
	}

	public enableMana(player: IPlayer){
		let factory = this.getFactory();
		factory.initializeOn(player);
		player.updateStatsAndAttributes();
	}

	reduce(localPlayer: IPlayer, amount: number): void {
		localPlayer.reduceStat(this.mana, amount);
	}
}