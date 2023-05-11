import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "../config/ormConfig";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JwtAuthGuard } from "./guard/jwt-auth.guard";
import { RolesGuard } from "./guard/roles.guard";
import { AdminController } from "./modules/admin/admin/admin.controller";
import { AdminModule } from "./modules/admin/admin/admin.module";
import { AuthModule } from "./modules/admin/auth/auth.module";

@Module({
  imports: [TypeOrmModule.forRoot(config), AdminModule, AuthModule],
  controllers: [AppController, AdminController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
