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
		const { rows } = await this.connect().execute("select * from games");
		return rows;
	}
}
