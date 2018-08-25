import Dialog from "newui/screen/screens/game/component/Dialog";
import { TranslationGenerator } from "newui/component/IComponent";
import { IDialogDescription } from "newui/screen/screens/game/Dialogs";
import { IHookHost } from "mod/IHookHost";
export declare class SpellbookDialog extends Dialog implements IHookHost {
    static description: IDialogDescription;
    getName(): TranslationGenerator;
}
