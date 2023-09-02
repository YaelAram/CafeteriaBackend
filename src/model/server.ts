import cors from "cors";
import express from "express";

import { conectToDataBase } from "../database";
import { guessRouter, salesRouter } from "../routes";

export class Server {
  private app;
  private PORT: number;
  private salesPath: string = "/api/sales";
  private guessPath: string = "/api/guess";

  constructor() {
    this.app = express();
    this.PORT = Number(process.env.PORT ?? "8080");

    this.conectDB();

    this.middlewares();
    this.routes();
  }

  private async conectDB() {
    conectToDataBase();
  }

  private middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(this.salesPath, salesRouter);
    this.app.use(this.guessPath, guessRouter);
  }

  public listen(): void {
    this.app.listen(this.PORT, () =>
      console.log(`Listening at port ${this.PORT}`)
    );
  }
}
