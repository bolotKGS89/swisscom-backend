import { Controller, Get, Post, Put } from '@nestjs/common';
import { ToggleDto } from 'dtos/toggleDto';
import { Toggle } from './toggle.entity';
import { ToggleService } from './toggle.service';

@Controller('toggle')
export class ToggleController {
  constructor(private readonly toggleService: ToggleService) {}

  @Get('get-toggles')
  getToggles(): Promise<Toggle[]> {
    return this.toggleService.getToggles();
  }

  @Put('update-toggle')
  updateToggle(toggleDto: ToggleDto): Promise<any> {
    return this.toggleService.updateToggle(toggleDto);
  }

  @Post('create-toggle')
  createToggle(toggleDto: ToggleDto): Promise<any> {
    return this.toggleService.insertToggle(toggleDto);
  }

  @Put('archive-toggle')
  archiveToggle(): ToggleDto {
    return null;
  }

}
