import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ToggleDto } from 'dtos/toggleDto';
import { TOGGLE_REPOSITORY } from './core/database/constants';
import { Toggle } from './toggle.entity';

const toggleList: ToggleDto[] = [
  {displayName: "test1", technicalName: 'Hydrogen', expiresOn: new Date(),
   description: 'H', isInverted: true, customerIds: ['1', '2', '3']},
  {displayName: "test2", technicalName: 'Helium', expiresOn: new Date(),
   description: 'He', isInverted: false, customerIds: ['1', '2', '3']},
  {displayName: "test3", technicalName: 'Lithium', expiresOn: new Date(),
   description: 'Li', isInverted: true, customerIds: ['1', '2', '3']},
  {displayName: "test4", technicalName: 'Beryllium', expiresOn: new Date(),
   description: 'Be', isInverted: true, customerIds: ['1', '2', '3']}
];

@Injectable()
export class ToggleService {

  constructor(@Inject(TOGGLE_REPOSITORY) private readonly userRepository: typeof Toggle) { }

  async getToggles(): Promise<Toggle[]> {
    return await this.userRepository.findAll();
  }

  async insertToggle(toggle: ToggleDto): Promise<Toggle> { 
    const toggleModel = await Toggle.create({
      displayName: toggle.displayName,
      techincalName: toggle.technicalName,
      expiresOn: toggle.expiresOn,
      description: toggle.description,
      isInverted: toggle.isInverted,
      customerIds: toggle.customerIds
  });
    
    return await this.userRepository.create(toggleModel);
  }

  async updateToggle(toggle: ToggleDto): Promise<[number, Toggle[]]> { 
    const toggleModel = await Toggle.create({
      displayName: toggle.displayName,
      techincalName: toggle.technicalName,
      expiresOn: toggle.expiresOn,
      description: toggle.description,
      isInverted: toggle.isInverted,
      customerIds: toggle.customerIds
  });
    
    return await this.userRepository.update(toggleModel);
  }


}
