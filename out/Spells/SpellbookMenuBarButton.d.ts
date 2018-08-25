import { IMenuBarButtonDescription, MenuBarButtonGroup } from "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions";
import { Bindable } from "Enums";
import { ITooltip } from "newui/component/IComponent";
export declare class SpellbookMenuBarButton implements IMenuBarButtonDescription {
    static buttonName: string;
    group: MenuBarButtonGroup;
    bindable: Bindable;
    constructor(bindable: Bindable);
    tooltip: (tooltip: ITooltip) => ITooltip;
    onActivate: () => void;
}
