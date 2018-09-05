import { DialogId } from "newui/screen/screens/game/Dialogs";
import { ManaProvider } from "./ManaProvider";
import Mod from "mod/Mod";

export interface IMagicMod extends Mod {
	manaProvider: ManaProvider;
	spellbookDialogId: DialogId;
}

export const MAGIC_MOD_ID = "Magic";