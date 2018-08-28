import { DialogId } from "newui/screen/screens/game/Dialogs";
import { ManaProvider } from "./ManaProvider";

export interface IMagicMod {
	manaProvider: ManaProvider;
	spellbookDialogId: DialogId;
}