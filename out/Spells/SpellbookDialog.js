var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "newui/screen/screens/game/component/Dialog", "newui/screen/screens/game/Dialogs", "mod/ModRegistry"], function (require, exports, Dialog_1, Dialogs_1, ModRegistry_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SpellbookDialog extends Dialog_1.default {
        constructor(gsapi, id) {
            super(gsapi, id);
            this.classes.add("spellbook-dialog");
        }
        getName() {
            return () => [{ content: "spellbook" }];
        }
    }
    SpellbookDialog.description = {
        minSize: {
            x: 25,
            y: 25,
        },
        size: {
            x: 25,
            y: 30,
        },
        maxSize: {
            x: 40,
            y: 70,
        },
        edges: [
            [Dialogs_1.Edge.Left, 25],
            [Dialogs_1.Edge.Bottom, 0],
        ],
    };
    __decorate([
        ModRegistry_1.default.dialog("Spellbook", SpellbookDialog.description, SpellbookDialog)
    ], SpellbookDialog, "id", void 0);
    exports.SpellbookDialog = SpellbookDialog;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlbGxib29rRGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3BlbGxzL1NwZWxsYm9va0RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFPQSxNQUFhLGVBQWdCLFNBQVEsZ0JBQU07UUF1QjFDLFlBQW1CLEtBQXFCLEVBQUUsRUFBWTtZQUNyRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVELE9BQU87WUFDTixPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN2QyxDQUFDOztJQTFCYSwyQkFBVyxHQUF1QjtRQUMvQyxPQUFPLEVBQUU7WUFDUixDQUFDLEVBQUUsRUFBRTtZQUNMLENBQUMsRUFBRSxFQUFFO1NBQ0w7UUFDRCxJQUFJLEVBQUU7WUFDTCxDQUFDLEVBQUUsRUFBRTtZQUNMLENBQUMsRUFBRSxFQUFFO1NBQ0w7UUFDRCxPQUFPLEVBQUU7WUFDUixDQUFDLEVBQUUsRUFBRTtZQUNMLENBQUMsRUFBRSxFQUFFO1NBQ0w7UUFDRCxLQUFLLEVBQUU7WUFDTixDQUFDLGNBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxjQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNoQjtLQUNELENBQUM7SUFuQkY7UUFEQyxxQkFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUM7cUNBQy9DO0lBRjdCLDBDQStCQyJ9