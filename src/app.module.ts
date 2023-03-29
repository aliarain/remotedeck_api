import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [UsersModule, CommonModule, JobModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
