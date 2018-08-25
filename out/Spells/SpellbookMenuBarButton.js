define(["require", "exports", "newui/screen/screens/game/static/menubar/MenuBarButtonDescriptions"], function (require, exports, MenuBarButtonDescriptions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpellbookMenuBarButton {
        constructor(bindable) {
            this.group = MenuBarButtonDescriptions_1.MenuBarButtonGroup.World;
            this.tooltip = (tooltip) => {
                return tooltip.addText(t => t.setText(() => [{ content: "Spellbook" }]));
            };
            this.onActivate = function () {
            };
            this.bindable = bindable;
        }
    }
    SpellbookMenuBarButton.buttonName = "Spellbook";
    exports.SpellbookMenuBarButton = SpellbookMenuBarButton;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlbGxib29rTWVudUJhckJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1NwZWxscy9TcGVsbGJvb2tNZW51QmFyQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBLE1BQWEsc0JBQXNCO1FBT2xDLFlBQVksUUFBa0I7WUFKOUIsVUFBSyxHQUF3Qiw4Q0FBa0IsQ0FBQyxLQUFLLENBQUM7WUFRdEQsWUFBTyxHQUFHLENBQUMsT0FBZ0IsRUFBYSxFQUFFO2dCQUN6QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFBO1lBRUQsZUFBVSxHQUFHO1lBRWIsQ0FBQyxDQUFBO1lBVEEsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDMUIsQ0FBQzs7SUFSYSxpQ0FBVSxHQUFZLFdBQVcsQ0FBQztJQURqRCx3REFrQkMifQ==