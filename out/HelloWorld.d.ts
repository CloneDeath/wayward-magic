import Mod from "mod/Mod";
import StatFactory from "entity/StatFactory";
import IPlayer from "player/IPlayer";
export default class HelloWorld extends Mod {
    mana: number;
    manaFactory: StatFactory;
    onInitialize(): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onPlayerJoin(player: IPlayer): void;
}
