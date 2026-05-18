import { OnStart, Service } from "@flamework/core";
import { Players } from "@rbxts/services";
import { Supabase } from "server/supabase/Client";

@Service({})
export default class UserDataService implements OnStart {
	onStart(): void {
		Players.PlayerAdded.Connect((player) => {
			Supabase.from("users").upsert({ id: player.UserId });
		});
	}
}
