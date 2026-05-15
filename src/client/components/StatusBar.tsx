import React, { useEffect, useState } from "@rbxts/react";
import { ClientHealthEvents } from "shared/networking/HealthEvents";
import { ClientShieldEvents } from "shared/networking/ShieldEvents";

interface StatusBarProps {
	defaultMaxHealth: number;
	defaultMaxShield: number;
}

export default function StatusBar(props: StatusBarProps) {
	const [health, setHealth] = useState(props.defaultMaxHealth);
	const [maxHealth, setMaxHealth] = useState(props.defaultMaxHealth);
	const [shield, setShield] = useState(props.defaultMaxShield);
	const [maxShield, setMaxShield] = useState(props.defaultMaxShield);

	const [healthProgress, setHealthProgress] = useState(1);
	const [shieldProgress, setShieldProgress] = useState(1);

	useEffect(() => {
		const healthEventConn = ClientHealthEvents.healthChangedEvent.connect((health: number) => {
			setHealth(health);
			setHealthProgress(health / maxHealth);
		});

		const maxHealthEventConn = ClientHealthEvents.maxHealthChangedEvent.connect((maxHealth: number) => {
			setMaxHealth(maxHealth);
			setHealthProgress(health / maxHealth);
		});

		const shieldEventConn = ClientShieldEvents.shieldChangedEvent.connect((shield: number) => {
			setShield(shield);
			setShieldProgress(shield / maxShield);
		});

		const maxShieldEventConn = ClientShieldEvents.maxShieldChangedEvent.connect((maxShield: number) => {
			setMaxShield(maxShield);
			setShieldProgress(shield / maxShield);
		});

		return () => {
			healthEventConn.Disconnect();
			maxHealthEventConn.Disconnect();
			shieldEventConn.Disconnect();
			maxShieldEventConn.Disconnect();
		};
	}, []);

	return (
		<screengui
			key="HealthShield"
			IgnoreGuiInset={true}
			ResetOnSpawn={false}
			ScreenInsets={Enum.ScreenInsets.DeviceSafeInsets}
			ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
		>
			<frame
				key="HealthShieldFrame"
				BackgroundColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				Position={UDim2.fromScale(0.016, 0.74)}
				Size={UDim2.fromScale(0.23900000000000002, 0.226)}
			>
				<frame
					key="HealthFrame"
					BackgroundColor3={Color3.fromRGB(12, 157, 22)}
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.048, 0.138)}
					Size={UDim2.fromScale(0.907, 0.315)}
				>
					<uistroke Color={Color3.fromRGB(204, 255, 51)} Thickness={3} />
					<frame
						key="HealthBar"
						BackgroundColor3={Color3.fromRGB(0, 255, 8)}
						BorderSizePixel={0}
						Position={UDim2.fromScale(-0.008, 0)}
						Size={UDim2.fromScale(healthProgress, 1)}
					/>
					<textlabel
						key="HealthLabel"
						BackgroundTransparency={1}
						FontFace={
							new Font(
								"rbxasset://fonts/families/SourceSansPro.json",
								Enum.FontWeight.Regular,
								Enum.FontStyle.Normal,
							)
						}
						Position={UDim2.fromScale(-0.004, 0)}
						Size={UDim2.fromScale(1, 1)}
						Text={`Health: ${health}/${maxHealth}`}
						TextColor3={Color3.fromRGB(0, 0, 0)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
						ZIndex={2}
					/>
				</frame>
				<frame
					key="ShieldFrame"
					BackgroundColor3={Color3.fromRGB(44, 117, 157)}
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.045, 0.508)}
					Size={UDim2.fromScale(0.91, 0.315)}
				>
					<textlabel
						key="ShieldLabel"
						BackgroundTransparency={1}
						FontFace={
							new Font(
								"rbxasset://fonts/families/SourceSansPro.json",
								Enum.FontWeight.Regular,
								Enum.FontStyle.Normal,
							)
						}
						Size={UDim2.fromScale(1, 1)}
						Text={`Shield: ${shield}/${maxShield}`}
						TextColor3={Color3.fromRGB(0, 0, 0)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
						ZIndex={2}
					/>
					<uistroke Color={Color3.fromRGB(0, 0, 255)} Thickness={3} />
					<frame
						key="ShieldBar"
						BackgroundColor3={Color3.fromRGB(33, 170, 255)}
						BorderSizePixel={0}
						Position={UDim2.fromScale(-0.004, 0)}
						Size={UDim2.fromScale(shieldProgress, 1)}
					/>
				</frame>
			</frame>
		</screengui>
	);
}
