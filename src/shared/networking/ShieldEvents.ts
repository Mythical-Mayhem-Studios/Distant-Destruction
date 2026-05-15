import { Networking } from "@flamework/networking";

interface ClientToServerEvents {}

interface ServerToClientEvents {
	maxShieldChangedEvent(maxShield: number): void;
	shieldChangedEvent(shield: number): void;
}

export const GlobalShieldEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();

export const ServerShieldEvents = GlobalShieldEvents.createServer({});
export const ClientShieldEvents = GlobalShieldEvents.createClient({});
