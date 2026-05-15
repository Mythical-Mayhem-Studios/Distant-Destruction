import { Networking } from "@flamework/networking";

interface ClientToServerEvents {}

interface ServerToClientEvents {
	maxHealthChangedEvent(maxHealth: number): void;
	healthChangedEvent(health: number): void;
}

export const GlobalHealthEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();

export const ServerHealthEvents = GlobalHealthEvents.createServer({});
export const ClientHealthEvents = GlobalHealthEvents.createClient({});
