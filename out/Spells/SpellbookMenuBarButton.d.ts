import { IMenuBarButtonDescription, MenuBarButtonGroup } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { Bindable } from "Enums";
import { ITooltip } from "newui/component/IComponent";
import { DialogId } from "newui/screen/screens/game/Dialogs";
export declare class SpellbookMenuBarButton implements IMenuBarButtonDescription {
    static buttonName: string;
    group: MenuBarButtonGroup;
    bindable: Bindable;
    spellbookDialogId: DialogId;
    constructor(bindable: Bindable, spellbookDialogId: DialogId);
    tooltip: (tooltip: ITooltip) => ITooltip;
    onActivate: () => void;
}
