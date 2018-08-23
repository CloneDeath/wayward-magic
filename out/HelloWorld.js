var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mod/Mod", "entity/IStats", "entity/StatFactory", "mod/IHookHost"], function (require, exports, Mod_1, IStats_1, StatFactory_1, IHookHost_1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0hlbGxvV29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBUUEsSUFBSSxHQUFTLENBQUM7SUFFZCxNQUFxQixVQUFXLFNBQVEsYUFBRztRQUluQyxZQUFZO1lBQ2xCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLG1CQUFtQixFQUFFLENBQUUsQ0FBQztZQUU3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBR00sV0FBVyxDQUFDLGFBQXNCLEVBQUUsV0FBbUI7WUFDN0QsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLFdBQVcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFHRCxZQUFZLENBQUMsTUFBZTtZQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNuQyxDQUFDO0tBQ0Q7SUFaQTtRQURDLHNCQUFVO2lEQUtWO0lBR0Q7UUFEQyxzQkFBVTtrREFLVjtJQTFCRiw2QkEyQkM7SUFFRCxNQUFNLG1CQUFtQjtRQUF6QjtZQUNJLFVBQUssR0FBWSxNQUFNLENBQUM7WUFDeEIsZ0JBQVcsR0FBcUIsd0JBQWUsQ0FBQyxPQUFPLENBQUM7WUFDM0QsaUJBQVksR0FBWSxHQUFHLENBQUM7UUFpQjdCLENBQUM7S0FBQSJ9