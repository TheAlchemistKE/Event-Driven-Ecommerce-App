import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'rogue.db.elephantsql.com',
      port: 5432,
      username: 'cgmpiinh',
      password: 'QKuBi3KH5qSKYYCWQwtx6r2XiEOCYG1v',
      database: 'cgmpiinh',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
