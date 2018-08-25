var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mod/Mod", "entity/IStats", "entity/StatFactory", "mod/IHookHost", "./Spells/SpellbookMenuBarButton", "mod/ModRegistry", "./Spells/SpellbookDialog"], function (require, exports, Mod_1, IStats_1, StatFactory_1, IHookHost_1, SpellbookMenuBarButton_1, ModRegistry_1, SpellbookDialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let log;
    class HelloWorld extends Mod_1.default {
        onInitialize() {
            log = this.getLog();
            this.mana = this.addStat("Mana", new ManaStatDescription());
            this.manaFactory = new StatFactory_1.default(this.mana, 100);
            this.manaFactory.setMax(100);
            this.manaFactory.setChangeTimer(10, 1);
            let binding = this.addBindable("spellbook", { key: "KeyB" });
            this.addMenuBarButton(SpellbookMenuBarButton_1.SpellbookMenuBarButton.buttonName, new SpellbookMenuBarButton_1.SpellbookMenuBarButton(binding));
        }
        onGameStart(isLoadingSave, playedCount) {
            log.info("game start: " + localPlayer.name);
            this.manaFactory.initializeOn(localPlayer);
            localPlayer.updateStatsAndAttributes();
        }
        onPlayerJoin(player) {
            log.info("player joined: " + player.name);
            this.manaFactory.initializeOn(player);
            player.updateStatsAndAttributes();
        }
    }
    __decorate([
        ModRegistry_1.default.dialog("Spellbook", SpellbookDialog_1.SpellbookDialog.description, SpellbookDialog_1.SpellbookDialog)
    ], HelloWorld.prototype, "onInitialize", null);
    __decorate([
        IHookHost_1.HookMethod
    ], HelloWorld.prototype, "onGameStart", null);
    __decorate([
        IHookHost_1.HookMethod
    ], HelloWorld.prototype, "onPlayerJoin", null);
    exports.default = HelloWorld;
    class ManaStatDescription {
        constructor() {
            this.color = "#00f";
            this.displayType = IStats_1.StatDisplayType.Statbar;
            this.displayOrder = 100;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0hlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBV0EsSUFBSSxHQUFTLENBQUM7SUFFZCxNQUFxQixVQUFXLFNBQVEsYUFBRztRQU9uQyxZQUFZO1lBQ2xCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLG1CQUFtQixFQUFFLENBQUUsQ0FBQztZQUU3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywrQ0FBc0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSwrQ0FBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9GLENBQUM7UUFHTSxXQUFXLENBQUMsYUFBc0IsRUFBRSxXQUFtQjtZQUM3RCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0MsV0FBVyxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDeEMsQ0FBQztRQUdELFlBQVksQ0FBQyxNQUFlO1lBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7S0FDRDtJQTFCQTtRQUhDLHFCQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxpQ0FBZSxDQUFDO2tEQWMxRTtJQUdEO1FBREMsc0JBQVU7aURBS1Y7SUFHRDtRQURDLHNCQUFVO2tEQUtWO0lBaENGLDZCQWlDQztJQUVELE1BQU0sbUJBQW1CO1FBQXpCO1lBQ0ksVUFBSyxHQUFZLE1BQU0sQ0FBQztZQUN4QixnQkFBVyxHQUFxQix3QkFBZSxDQUFDLE9BQU8sQ0FBQztZQUMzRCxpQkFBWSxHQUFZLEdBQUcsQ0FBQztRQUM3QixDQUFDO0tBQUEifQ==