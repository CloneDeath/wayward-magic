import { DialogId } from "newui/screen/screens/game/Dialogs";
import { ManaProvider } from "./ManaProvider";
import Mod from "mod/Mod";
import { Actions } from "./Actions";

export interface IMagicMod extends Mod {
	manaProvider: ManaProvider;
	spellbookDialogId: DialogId;
	actions: Actions;
}

export const MAGIC_MOD_ID = "Magic";