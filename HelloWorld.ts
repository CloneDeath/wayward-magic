import Mod from "mod/Mod";
import { HookMethod } from "mod/IHookHost";
import { MessageType } from "language/IMessages";

export default class HelloWorld extends Mod {
	@HookMethod
	public onGameScreenVisible(): void{
		localPlayer.messages
			.type(MessageType.Good)
			.send("Magic Loaded!");
	}
}