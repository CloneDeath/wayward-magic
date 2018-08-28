import Dialog from "newui/screen/screens/game/component/Dialog";
import { TranslationGenerator } from "newui/component/IComponent";
import { IDialogDescription, DialogId } from "newui/screen/screens/game/Dialogs";
import { IHookHost } from "mod/IHookHost";
import IGameScreenApi from "newui/screen/screens/game/IGameScreenApi";
export declare class SpellbookDialog extends Dialog implements IHookHost {
    static description: IDialogDescription;
    constructor(gsapi: IGameScreenApi, id: DialogId);
    getName(): TranslationGenerator;
}
