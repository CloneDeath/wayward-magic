import Mod from "mod/Mod";
import StatFactory from "entity/StatFactory";
import IPlayer from "player/IPlayer";
import { DialogId } from "newui/screen/screens/game/Dialogs";
export default class HelloWorld extends Mod {
    mana: number;
    manaFactory: StatFactory;
    spellbookDialogId: DialogId;
    onInitialize(): void;
    onGameStart(isLoadingSave: boolean, playedCount: number): void;
    onPlayerJoin(player: IPlayer): void;
}
