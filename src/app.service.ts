import { Injectable } from "@nestjs/common";
import { createClient } from "@libsql/client";

@Injectable()
export class AppService {
	private connect() {
		return createClient({
			url: process.env.TURSO_URL,
			authToken: process.env.TURSO_TOKEN,
		});
	}

	async getHello() {
		console.log(process.env.TURSO_URL, process.env.TURSO_TOKEN);
		return await this.connect().execute("select * from games");
	}
}
