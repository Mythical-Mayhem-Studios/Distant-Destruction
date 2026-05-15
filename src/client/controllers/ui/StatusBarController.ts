import { Controller, OnStart } from "@flamework/core";
import React from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import StatusBar from "client/components/StatusBar";

@Controller({})
export class StatusBarController implements OnStart {
	onStart(): void {
		const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");
		const root = createRoot(new Instance("Folder", playerGui));

		root.render(
			createPortal(
				React.createElement(StatusBar, {
					defaultMaxHealth: 100,
					defaultMaxShield: 50,
				}),
				playerGui,
			),
		);
	}
}
