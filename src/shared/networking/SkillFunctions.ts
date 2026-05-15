import { Networking } from "@flamework/networking";

interface ClientToServerFunctions {
	useSkill(name: string): boolean;
}

interface ServerToClientFunctions {}

export const GlobalSkillFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();

export const ServerFunctions = GlobalSkillFunctions.createServer({});
export const ClientFunctions = GlobalSkillFunctions.createClient({});
