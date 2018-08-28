define(["require", "exports", "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions", "newui/screen/IScreen"], function (require, exports, MenuBarButtonDescriptions_1, IScreen_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpellbookMenuBarButton {
        constructor(bindable, spellbookDialogId) {
            this.group = MenuBarButtonDescriptions_1.MenuBarButtonGroup.World;
            this.tooltip = (tooltip) => {
                return tooltip.addText(t => t.setText(() => [{ content: "Spellbook" }]));
            };
            this.onActivate = function () {
                newui.getScreen(IScreen_1.ScreenId.Game)
                    .toggleDialog(this.spellbookDialogId);
            };
            this.bindable = bindable;
            this.spellbookDialogId = spellbookDialogId;
        }
    }
    SpellbookMenuBarButton.buttonName = "Spellbook";
    exports.SpellbookMenuBarButton = SpellbookMenuBarButton;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlbGxib29rTWVudUJhckJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1NwZWxscy9TcGVsbGJvb2tNZW51QmFyQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU9BLE1BQWEsc0JBQXNCO1FBUWxDLFlBQVksUUFBa0IsRUFBRSxpQkFBMkI7WUFMM0QsVUFBSyxHQUF3Qiw4Q0FBa0IsQ0FBQyxLQUFLLENBQUM7WUFVdEQsWUFBTyxHQUFHLENBQUMsT0FBZ0IsRUFBYSxFQUFFO2dCQUN6QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFBO1lBRUQsZUFBVSxHQUFHO2dCQUNaLEtBQUssQ0FBQyxTQUFTLENBQWEsa0JBQVEsQ0FBQyxJQUFJLENBQUM7cUJBQ3ZDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUE7WUFYQSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDNUMsQ0FBQzs7SUFWYSxpQ0FBVSxHQUFZLFdBQVcsQ0FBQztJQURqRCx3REFxQkMifQ==